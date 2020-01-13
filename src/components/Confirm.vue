<!--
  - ConfirmPopup Component Option -
  conFirmPopup: 팝업 OnOff
  btnText: 버튼 이름
  btnSize: 버튼 갯수 / default:1 / 최대: 2
  btnCallback: 버튼 callback
  --------------------------------------------------
  - 호출 시 EventBus를 통해 데이터 전달
  - style은 confirm.less 에서 따로 관리
  ex)
  this.$eventBus.$emit('conFirmPopup:open', {
    template: '노출 시킬 HTML',
    btnSize: 2,
    btnText: '버튼텍스트',
    btnCallback: function () {
      ...
    }
  });
-->
<template>
  <div class="confirmPopup" :class="{ on: open }">
    <div class="confirmCon">
      <div class="txtPopBox">
        <slot />
      </div>
      <div class="btnBox oneBtn" v-if="btnSize === 1">
          <gz-router-link :btnClick="btnCallback">{{ btnText }}</gz-router-link>
      </div>
      <div class="btnBox" v-else>
        <gz-router-link :btnClick="function () { $parent.conFirmPopup = false }">닫기</gz-router-link>
        <gz-router-link :btnClick="btnCallback">{{ btnText }}</gz-router-link>
      </div>
    </div>
  </div>
</template>

<script>
let $body = window.document.body;
let scrollTop = window.pageYOffset;
let self;

export default {
  name: 'Confirm',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: String,
      default: '닫기'
    },
    btnSize: {
      type: Number,
      default: 1
    },
    btnCallback: {
      type: Function,
      default: () => {
        self.$parent.conFirmPopup = false;
      }
    }
  },
  watch: {
    '$route' () {
      this.$parent.conFirmPopup = false;
    },
    open (val) {
      if (val) {
        setTimeout(() => {
          var $box = this.$el.querySelectorAll('.confirmCon')[0];
          var $contents = this.$el.querySelectorAll('.txtPopBox')[0];
          $box.style.cssText = 'margin-top:' + -1 * ($contents.offsetHeight / 2) + 'px;';
        }, 100);
      }
    }
  },
  created () {
    self = this;
    if (window.ultron && window.ultron.forApp) {
      this.$eventBus.$on('viewDisAppear', () => {
        this.$parent.conFirmPopup = false;
      });
    }
  }
};
</script>

<style lang="less">
  @import '../less/confirm';
</style>



