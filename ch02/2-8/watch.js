var app = new Vue({
  el: '#app',
  data: {
    message: '',
    stock: 10
  },
  methods: {
    onDeleteItem: function() {
      this.stock--;
    }
  },
  watch: {
    // ウオッチャに登録した関数オブジェクトは、第一引数に変化後の値を取り、第二引数に変化前の値を受け取ることができます。
    // 在庫数が変化したときに呼び出されるハンドラ
    stock: function(newStock, oldStock) {
      if (newStock == 0) {
        this.message = '売り切れ';
      }
    }
  }
});