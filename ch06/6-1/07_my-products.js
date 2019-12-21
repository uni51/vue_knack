// 子から親にデータを引き渡す（引数ありのパターン）
Vue.component('my-product', {
  //（1）ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
  template: `
    <div>
      <button v-on:click="clickHandler">値下げする</button> {{ price }}円
    </div>`,
  props: ['price'],
  methods: {
    // (2)ボタンのクリックイベントハンドラ
    clickHandler: function() {
      // (3)子コンポーネントに「child-click」イベントを発火させる
      var discount = 0;
      if (this.price -50 < 500) {
        // 例）現在の価格が530円の場合、値下げ幅は30円
        discount = this.price -500;
      } else {
         // 例）現在の価格が550円以上の場合、値下げ幅は50円
        discount = 50;
      }
      this.$emit('child-click', discount); // 「dicount」が親に引き渡す引数
    }
  }
});