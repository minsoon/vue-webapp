import Vue from 'vue';

const EventBus = new Vue();

window.errorConfirm = function (data) {
  var msg = data ? data.message : '서버와 통신 중 오류가 발생했습니다.';
  EventBus.$emit('conFirmPopup:open', {
    template: '<div class="errorMsg"><p>' + msg + '</p></div>',
    btnSize: 1,
    btnText: '닫기'
  });
};

export default EventBus;
