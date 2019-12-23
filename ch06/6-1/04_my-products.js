// リスト10：親から子へデータを渡す
Vue.component('my-product', {
  template: `
    <div>
      <span>{{ name }}</span> : <span>{{ price }}円</span>
    </div>`,
  props: ['name', 'price']
});