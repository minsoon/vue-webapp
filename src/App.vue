<template>
  <v-app id="wrap" v-cloak>
    <!-- @slot Use this slot header -->
    <app-header />
    <!-- @slot Use this slot content -->
    <div class="container">
      <router-view/>
    </div>

    <div class="loadingBox" :class="{ loadOpen: isLoading }">
      <div class="back"></div>
      <v-progress-circular indeterminate :size="40" :width="2" color="white"></v-progress-circular>
    </div>
    <div class="errorPopupCon">
      <v-dialog persistent v-model="errorPopup">
        <div class="confirmCon">
          <div class="txtPopupBox" :class="errorData.iconClass" v-html="errorData.template"></div>
          <div class="btnBox oneBtn">
            {{ errorData.btnText }}
          </div>
        </div>
      </v-dialog>
    </div>

  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
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
  created () {
   /**
   * eventBus를 통해 FullLoading OnOff
   * on  : this.$eventBus.$emit('loading', ture);
   * off : this.$eventBus.$emit('loading', false);
   * */
    this.$eventBus.$on('loading', key => {
      this.isLoading = key;
    });
    /**
     *  에러에 대한 메시지는 EventBus를 통해 노출
     * */
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
