class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        this.load.path = './assets/';
        this.load.atlas('daniela', 'img/daniela/daniela.png', 'img/daniela/daniela_atlas.json');
        this.load.animation('danielaData', 'img/daniela/daniela_anim.json');

        // Map
        this.load.tilemapTiledJSON('Level1', '../src/worlds/level1/cavemap.json');
        this.load.image('caveStones', '../src/worlds/level1/caveStones.png');
    
        // Enemy
        this.load.image('bats', 'img/bat/bat-32X32.png');
        this.load.on('complete', () => {
            this.scene.start('Level1');
        });
    }

    create() {
    }
}
export default Bootloader;