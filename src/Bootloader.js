class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';
        this.load.atlas('nina', 'img/nina/nina.png', 'img/nina/nina_atlas.json');
        this.load.animation('ninaData', 'img/nina/nina_anim.json');

    }

    create() {
        this.scene.start('IntroStory');
    }
}
export default Bootloader;