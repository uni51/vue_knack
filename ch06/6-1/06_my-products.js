// 子から親にデータを引き渡す（引数なしのパターン）
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
      this.$emit('child-click')
    }
  }
});