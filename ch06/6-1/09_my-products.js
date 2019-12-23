// リスト26：コンポーネントを繰り返し描画する（v-for）
Vue.component('my-product', {
  template: '<li>{{id}} {{name}} {{price}}(円)</li>',
  props: ['id', 'name', 'price']
});