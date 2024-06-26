// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Sprite {
    constructor(animation, x, y, speed) {
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.h = this.animation[0].height;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = floor(this.index) % this.len;
      image(this.animation[index], this.x, this.y, this.w*4,this.h*4);
    }
  
    animate() {
      this.index += this.speed;
      this.x += this.speed;
  
      if (this.x > width) {
        this.x = -this.w;
      }
    }
  }