// 子から親にデータを引き渡す（引数なしのパターン）
var app = new Vue({
  el: '#app',
  data: {
    price: 980
  },
  methods: {
    //（5）子から呼び出されるメソッド
    priceDown: function() {
      this.price -= 100;
    }
  }
});