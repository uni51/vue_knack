var app = new Vue({
  el: '#app',
  data: {
    year: (new Date()).getFullYear()
  },
  computed: {
    isUrudoshi: function() {
      // 「4で割り切れて100で割り切れない」または「400で割り切れる」場合
      if((this.year % 4 == 0) && (this.year % 100 != 0) || (this.year % 400 == 0)) {
        // うるう年
        return true;
      } else {
        // うるう年ではない
        return false;
      }
    }
  }
});