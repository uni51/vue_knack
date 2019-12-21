// コンポーネントの基本構造
Vue.component('my-products', {
  // テンプレート部分
  template: `
    <div>
      <span>{{ name }}</span> : <span>{{ price }}円</span>
    </div>`,
  // データオプション
  data: function() {
    return {
      name: 'スマホケース', // 商品名
      price: 980  // 価格
    }
  },
  // メソッド
  methods: {
  },
  // 算出プロパティ
  computed: {
  },
  // ウオッチャ
  watch: {
  },
  // フィルター
  filters: {
  },
  // ライフサイクルハック
  created: function() {
  }
});