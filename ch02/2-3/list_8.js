// 「動くもの」クラスの定義
var Movable = function(x, y) {
  this.pos = {
    x: x,
    y: y
  };
  this.move = function(x, y) {
    this.pos.x += x;
    this.pos.y += y;        
  }
}

// ボールのインスタンスを生成する
var ball = new Movable(10, 50); // 最初の座標値を設定

// ボールをx方向に5、y方向に3動かす
ball.move(5,3);

// 座標をブラウザのコンソールに出力する
console.log(ball.pos.x);
console.log(ball.pos.y);