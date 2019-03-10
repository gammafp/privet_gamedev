class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader :D');
        //LOAD ALL ASSETS
        this.load.path = './assets/';
        this.load.atlas('daniela', 'img/daniela/daniela.png', 'img/daniela/daniela_atlas.json');
        this.load.animation('danielaData', 'img/daniela/daniela_anim.json');

        // Map
        this.load.tilemapTiledJSON('Level1', '../src/worlds/level1/cavemap.json');
        this.load.image('caveStones', '../src/worlds/level1/caveStones.png');
    

        //Backgrounds
        this.load.image('bg_Level1', 'img/backgrounds/2560x1440-snapSat1800.jpg');
        //Se cambiara por un dibujo de los niños de una cueva
        //Ahora mismo esta de ejemplo
        //http://kidskunst.info/46/05451-2d-game-background-cave.htm


        // Enemy
        this.load.spritesheet('bats', 'img/bat/bat-32X32.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        //Bracelet
        this.load.spritesheet('bracelet', 'img/objects/bracelet.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        //Wheel
        this.load.spritesheet('wheel', 'img/wheelStone/wheelStone_Spritesheet_32x32x4.png', {
            frameWidth: 32,
            frameHeight: 32
        });

       
        //Sounds
        this.load.audio("soundJump", "sounds/jump.mp3");
        this.load.audio("danielaAuch", "sounds/Daniela_Auch.mp3");
        this.load.audio("LEVEL1_LOLO_findBracelet","sounds/dialogs/LEVEL1_LOLO_findBracelet.mp3");
        this.load.audio("LOLO_Bien_lo_hemos_conseguido","sounds/LOLO_Bien_lo_hemos_conseguido.mp3");
        this.load.audio("CaveBats","sounds/backgrounds/CaveBats.mp3");
        /*
        https://opengameart.org/content/cave-bats
        Copyright/Attribution Notice: 
        Please credit music by Dan Knoflicek
        */
        
        /*this.load.on('complete', () => {
            this.scene.start('Level1');
        });*/



        //PROGRESS BAR
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;

        let x = width / 2 - 10;
        let y = height / 2 + 30;
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0xffffff, 0.5);
        progressBox.fillRect(x - 140, y - 10, 320, 50);

        var loadingText = this.make.text({
            x: width / 2 - 5,
            y: height / 2 - 30,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2 - 10,
            y: height / 2 - 2,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        //While Loading show Progress Bar with percent
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(x - 130, y, 300 * value, 30);
        });



        //When all the assests are load go to next Scene
        this.load.on("complete", () => {
            this.scene.start("Level1");
        });



        
    }

    create() {
    }
}
export default Bootloader;