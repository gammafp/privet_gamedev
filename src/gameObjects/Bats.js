import Bat from '../gameObjects/Bat.js';

class Bats extends Phaser.Physics.Arcade.Group {
  constructor (world, scene, children, spriteArray) {
    super(world, scene, children);
    this.scene = scene;    
    

    // create our enemies from the sprite array
    this.createBats(scene, spriteArray);
  }

  
  
  createBats (scene, spriteArray) {
    spriteArray.forEach((sprite) => {     
      // create a new enemy      
      const bat = new Bat(this.scene, sprite.x, sprite.y);
      // add to our group
      this.add(bat);
      // destroy the sprite
      sprite.destroy();
    });
  }
}

export default Bats;