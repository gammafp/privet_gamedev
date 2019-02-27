
class Start extends Phaser.Scene {
    constructor() {
        super({key: 'Start'});
    }
    
    preload() {
        console.log('Scene: Start');
    }

    create() {
        this.add.sprite(100, 100, 'nina_troglo');
    }

    update() {

    }
}

export default Start;
