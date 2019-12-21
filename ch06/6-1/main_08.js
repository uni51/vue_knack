// コンポーネントのイベントハンドリング
var app = new Vue({
  el: '#app',
  data: {
    price: 980
  },
  methods: {
    //（2）子をクリックすると呼び出されるメソッド
    priceDown: function(discount) {
      var discount = 0;
      if (this.price -50 < 500) {
        // 例）現在の価格が530円の場合、値下げ幅は30円
        discount = this.price -500;
      } else {
         // 例）現在の価格が550円以上の場合、値下げ幅は50円
        discount = 50;
      }
      this.price -= discount;
    }
  }
});