// リスト33：コンポーネントの配置に関する制限
Vue.component('my-option', {
  template: '<option v-bind:value="id">{{name}} {{price}}(円)</option>',
  props: ['id', 'name', 'price']
});