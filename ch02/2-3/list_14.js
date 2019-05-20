var ball = new Vue({
  el: '#ball',
  data: {
    pos: { x: 0, y: 0 },
    radius: 20
  },
  methods: {
    move: function(x, y) {
      this.pos.x += x;
      this.pos.y += y;      
    }
  }
});

ball.move(100, 100);
ball.radius = 40;

console.log(ball.pos);
console.log(ball.radius);


