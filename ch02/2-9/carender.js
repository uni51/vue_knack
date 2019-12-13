// カレンダーにバインドする
var app = new Vue({
  el: '#app',
  data: {
    arrival_date: null
  },
  created: function() {
    // 初期値を設定する
    this.arrival_date = this.formatDate(new Date());
  },
  methods: {
    // 日付をYYYY-MM-DDに整形するメソッド
    formatDate: function(dt) {
      var y = dt.getFullYear();
      var m = ('00' + (dt.getMonth()+1)).slice(-2);
      var d = ('00' + dt.getDate()).slice(-2);
      var reslut = y + '-' + m + '-' + d;
      return reslut;
    }
  }
});