// コンポーネントの配置に関する制限
var app = new Vue({
  el: '#app',
  data: {
    // 商品データの配列
    products: [
      { id: 1, name: '商品A', price: 1280 },
      { id: 2, name: '商品B', price: 1580 },
      { id: 3, name: '商品C', price: 1980 }
    ]
  }
});