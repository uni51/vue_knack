// ローカルスコープのコンポーネント
var myComponent = {
  // テンプレート部分
  template: `<p>{{ message }}</p>`,
  // データオプション
  data: function() {
    return {
      message: '子コンポーネントです。'
    }
  }
};