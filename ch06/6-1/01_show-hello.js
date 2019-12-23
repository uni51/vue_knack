// リスト3：コンポーネントの基本構造
Vue.component('show-hello', {
  // テンプレート部分
  template: '<p>{{ message }}</p>',
  // データオプション
  data: function() {
    return {
      message: 'Hello Vue!'
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