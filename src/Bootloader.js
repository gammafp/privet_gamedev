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
        this.load.spritesheet('bats', 'img/bat/bat-32X32.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet('wheel', 'img/wheelStone/wheelStone_Spritesheet_32x32x4.png', {
            frameWidth: 32,
            frameHeight: 32
        });

       
        //Sounds
        this.load.audio("soundJump", "sounds/jump.mp3");
        this.load.audio("danielaAuch", "sounds/Daniela_Auch.mp3");
        this.load.audio("LEVEL1_LOLO_findBracelet","sounds/dialogs/LEVEL1_LOLO_findBracelet.mp3");
        
        this.load.on('complete', () => {
            this.scene.start('Level1');
        });

        
    }

    create() {
    }
}
export default Bootloader;