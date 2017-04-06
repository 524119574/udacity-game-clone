// 这是我们的玩家要躲避的敌人
var Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = 0;
    this.y = Math.floor(Math.random()*181+40);
    this.speed = Math.floor(Math.random()*41 + 20);
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x = this.x + this.speed*dt;
    if(this.x > 430){
      this.x = 0;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//this function consider player and bugs as a rectangle to check for collision
Enemy.prototype.checkCollisions = function(player){
//with reference to https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  if (this.x < player.x + 30 &&
   this.x + 50 > player.x &&
   this.y < player.y + 40 &&
   30 + this.y > player.y) {
    // collision detected!
    return true;
  }

/* the above code consider the player as a circle to determine collision
  var dx = this.x - player.x;
  var dy = this.y - player.y;
  var distance = Math.sqrt(dx * dx + dy * dy)

  if (distance < 40) {
    // collision detected!
    return true;
  }*/
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(){
  this.x = 200;
  this.y = 400;
  this.speed = 100;//actually dosen't really need it, need to change.
  this.sprite = "images/char-boy.png"
};

Player.prototype.update = function(dt){
//think about how to solve this
if (player.y<=0){
  player = new Player;
  alert("你赢了！You win!")
}
};
// draw the player in the canvas
Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input){
  //if the character is not in the boundary they can move as he wishes

  if(input==="left"){
    this.x = this.x - this.speed;
  }else if(input==="up"){
    this.y = this.y - this.speed;
  }else if(input === "right"){
    this.x = this.x + this.speed;
  }else if(input === "down"){
    this.y = this.y + this.speed;
  }

  if (this.x < 0){this.x = 0}
  if (this.x > 420){this.x = 420}
  if (this.y < 0){this.y = 0}
  if (this.y > 400){this.y = 400}
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var numOfBugs = 4;
var allEnemies = [];
for(var i =0;i < numOfBugs; i++){
  allEnemies.push(new Enemy);
}
var player = new Player;

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
