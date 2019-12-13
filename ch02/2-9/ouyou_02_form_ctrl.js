// 応用例2（レンジ入力とカラー選択を同期する）
var app = new Vue({
  el: '#app',
  data: {
    color: '#000000',
    red: 0,
    blue: 0,
    green: 0
  },
  computed: {
    // 赤・緑・青を配列で返す算出プロパティ
    colorElement: function() {
      return [this.red, this.green, this.blue];
    }
  },
  watch: {
    // 赤・緑・青のいずれかの変更を監視する
    colorElement: function(newRGB, oldRGB) {
      // 赤・緑・青を2桁の16進数で表示する
      var r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
      var g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
      var b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
      // #RRGGBBの形式の文字列で更新する
      this.color = '#' + r + g + b;
    },
    // カラーパレットの選択変更を監視する
    color: function(newColor, oldColor) {
      this.red = parseInt(newColor.substr(1,2), 16);
      this.green = parseInt(newColor.substr(3,2), 16);
      this.blue = parseInt(newColor.substr(5,2), 16);
    }
  }
});