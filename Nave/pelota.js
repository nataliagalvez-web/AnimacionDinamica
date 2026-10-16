function Pelota () {
  this.x = 0;
  this.y = 0;
  this.radius = 100;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
}

Pelota.prototype.draw = function (context) {
  var pelota = new Image();
  pelota.src = "pelota.png";
  context.save();
  context.translate(this.x, this.y);
  context.drawImage(pelota, -pelota.width/2,-pelota.height/2);
  context.restore();
};
