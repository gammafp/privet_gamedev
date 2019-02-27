class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';
        this.load.atlas('nina_troglo', 'img/nina/nina_troglo.png', 'img/nina/nina_troglo_atlas.json');
    }

    create() {
        this.scene.start('Start');
    }
}
export default Bootloader;