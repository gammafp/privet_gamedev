
class IntroStory extends Phaser.Scene {
    constructor() {
        super({key: 'IntroStory'});
    }
    
    preload() {
        console.log('Scene: IntroStory');
    }

    create() {
        this.add.sprite(100, 100, 'nina_troglo');
    }

    update() {

    }
}

export default IntroStory;
