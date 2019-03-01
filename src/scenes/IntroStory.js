
class IntroStory extends Phaser.Scene {
    constructor() {
        super({key: 'IntroStory'});
    }
    
    preload() {
        console.log('Scene: IntroStory');
    }

    create() {
        this.nina = this.add.sprite(this.sys.game.config.width/2, 100, 'nina');
        this.nina.anims.play('nina_walk');
    }

    update() {

    }
}

export default IntroStory;
