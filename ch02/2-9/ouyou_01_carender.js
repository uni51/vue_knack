// 応用例1（日付範囲の制限をする） carender.jsの発展形
var app = new Vue({
  el: '#app',
  data: {
    arrival_date: null,
    min_date: null
  },
  created: function() {
    // 翌日の日付を初期値とする
    var dt = new Date();
    dt.setDate(dt.getDate() + 1);
    this.arrival_date = this.formatDate(dt);
    // 翌日の日付を最小値とする
    this.min_date = this.arrival_date;
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