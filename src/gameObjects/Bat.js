/**
 * GameObject Bat
 * @since 0.0.0
 */
class Bat extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y) {
        super(scene, x, y, 'bats');               

        // enable physics
        this.scene.physics.world.enable(this);
        
        // add our player to the scene
        this.scene.add.existing(this);
        //delete gravity        
        this.body.allowGravity = false;

        this.setCollideWorldBounds(true); // don't go out of the map

        this.forward = true;
        
        
        // scale our player
        this.setScale(1.25);

        this.forward= true;        
        // move the bat
        //

        // create the player sprite
        
        this.move();
        
        

        //changeDir when touch the world
        //this.scene.physics.add.collider(this.scene.Level1, this,this.changeDir);


         
         
   }

   

  update(delta) {
    console.log(delta);
    this.anims.play('bat_move');
    

  }
  

    move () {        
        console.log("move");
        //this.scene.anims.play('bat_move', true);        
        this.setVelocityY(-500);
        //movebat right and left
        /*this.flipX=forward;
        if (this.forward) this.setVelocityX(-50);
        else this.setVelocityX(50);    */
    }

    changeDir(){    
        this.forward=!this.forward;
    }

  
}

export default Bat;