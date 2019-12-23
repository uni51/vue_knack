// リスト28：コンポーネントの配置に関する制限
Vue.component('my-row', {
  template: '<tr><td>{{id}}</td><td>{{name}}</td><td>{{price}}(円)</td></tr>',
  props: ['id', 'name', 'price']
});