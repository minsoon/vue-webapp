<template>
  <v-app id="wrap" v-cloak>
    <div class="container">
      <router-view/>
    </div>

    <div class="loadingBox" :class="{ loadOpen: isLoading }">
      <div class="back"></div>
      <v-progress-circular indeterminate :size="40" :width="2" color="white"></v-progress-circular>
    </div>
    <v-dialog persistent v-model="errorPopup">
      <div class="confirmCon">
        <div class="txtPopupBox" :class="errorData.iconClass" v-html="errorData.template"></div>
        <div class="btnBox oneBtn">
          {{ errorData.btnText }}
        </div>
      </div>
    </v-dialog>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: false,
      errorPopup: false,
      errorData: {
        template: '',
        iconClass: '',
        btnText: '확인',
        btnCallback: () => {
          setTimeout(() => {
            this.errorPopup = false;
          }, 150);
          this.$eventBus.$emit('loading', false);
        }
      }
    }
  },
  watch: {
    errorPopup(val) {
      if (!val) {
        this.errorData.btnCallback = () => {
          setTimeout(() => {
            this.errorPopup = false;
          }, 150);
          this.$eventBus.$emit('loading', false);
        }
      }
    }
  },
  created () {
    this.$eventBus.$on('loading', key => {
      this.isLoading = key;
    });
    this.$eventBus.$on('errorPopup:open', data => {
      this.errorData.template = data.template;
      this.errorData.iconClass = data.iconClass ? data.iconClass : 'errorIcon';
      if (data.btnText) {
        this.errorData.btnText = data.btnText;
      }
      if (data.btnCallback) {
        this.errorData.btnCallback = () => {
          data.btnCallback();
          setTimeout(() => {
            this.errorPopup = false;
          }, 150);
        };
      }
      setTimeout(() => {
        this.errorPopup = true;
      });
    });
  }
};
</script>
