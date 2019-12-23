// ロスト22：コンポーネントのイベントハンドリング
Vue.component('my-product', {
  // カスタムイベントや$emit()を実装する必要がない
  template: '<button>現在の価格{{price}}(円)</button>',
  props: ['price']
});