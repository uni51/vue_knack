var ball = {
  pos : {
    x: 10,
    y: 50
  },
  move: function(x,y) {
    this.pos.x += x;
    this.pos.y += y;    
  }
}

// 座標をブラウザのコンソールに出力する
console.log(ball.pos.x);
console.log(ball.pos.y);

// ボールをx方向に5、y方向に3動かす
ball.move(5,3);

// 座標をブラウザのコンソールに出力する
console.log(ball.pos.x);
console.log(ball.pos.y);