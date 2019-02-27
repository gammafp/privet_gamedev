class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';

    }

    create() {
        this.scene.start('Start');
    }
}
export default Bootloader;