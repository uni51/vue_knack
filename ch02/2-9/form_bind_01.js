// 単純なフォーム入力バインディング
var app = new Vue({
  el: '#app',
  data: {
    // 初期値は当年
    year: (new Date()).getFullYear()
  }
});