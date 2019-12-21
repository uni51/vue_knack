// 子から親にデータを引き渡す（引数ありのパターン）
var app = new Vue({
  el: '#app',
  data: {
    price: 980
  },
  methods: {
    //（5）子から呼び出されるメソッド（「dicount」が子から引き渡された引数）
    priceDown: function(discount) {
      // 値下げ幅が指定されていない場合は100円とする
      if (discount == undefined) discount = 100;
      // 値下げする
      this.price -= discount;
    }
  }
});