import Daniela from '../player/Daniela.js';
import Bats from '../gameObjects/Bats.js';
import Wheels from '../gameObjects/Wheels.js';

class Level1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Level1'
        });
    }

    preload() {
        console.log('Scene: Level1');        
    }

    create() {

        //Sounds
        this.soundLEVEL1_LOLO_findBracelet = this.sound.add("LEVEL1_LOLO_findBracelet");
        this.soundLEVEL1_LOLO_findBracelet.play();

        //Text Dialog
        this.textDialog = this.add.text(20, 570, 'Daniela, tienes que buscar la Pulsera mágica.', {
            fontSize: '25px',
            fill: '#ffffff'
        });
        this.textDialog.setScrollFactor(0);
        this.textDialog.setDepth(1);


        //Text Health
        this.textHealth = this.add.text(20, 20, 'Vidas:3', {
            fontSize: '25px',
            fill: '#ffffff'
        }); 
        this.textHealth.setScrollFactor(0);
        this.textHealth.setDepth(1);


        //bat move
        this.anims.create({
            key: 'bat_move',
            frames: this.anims.generateFrameNumbers('bats', { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        });
        
        
        //  movewheel animation
        this.anims.create({
            key: 'wheel_move',
            frames: this.anims.generateFrameNumbers('wheel', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        //Daniela Creation
        this.daniela = new Daniela({
            scene: this,
            key: 'daniela',
            x: this.sys.game.config.width / 4,
            y: 100
        }).setScale(2);

        //Read Tilemap
        let map = this.make.tilemap({
            key: 'Level1'
        });


        //Creating Bats         
        this.bats = map.createFromObjects('Bats', 'Bat', {key: 'bats'});        
        this.batsGroup = new Bats(this.physics.world, this, [], this.bats);

        //Creating Wheels         
        this.wheels = map.createFromObjects('Wheels', 'Wheel', {key: 'wheels'});        
        this.wheelsGroup = new Wheels(this.physics.world, this, [], this.wheels); 
        
        //Tilemap
        let level1Tile = map.addTilesetImage('caveStones');
        let Level1 = map.createDynamicLayer('World', level1Tile, 0, 0);
        Level1.setCollisionByExclusion([-1]);

        //Colliders
        this.physics.add.collider(this.daniela, Level1);        
        this.physics.add.collider(this.batsGroup, Level1);
        this.physics.add.collider(this.wheelsGroup, Level1);
        this.physics.add.overlap(this.daniela, this.bats, () => {
            this.daniela.enemyCollision();            
            console.log('Daniela colisiona con murciélago');
        });
        this.physics.add.overlap(this.daniela, this.wheels, () => {
            this.daniela.enemyCollision();
            console.log('Daniela colisiona con ruedas');
        });

        
        
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.daniela);
        console.log(this.batsGroup);
        this.anims.play('bat_move', this.bats);
        this.anims.play('wheel_move',this.wheels);

    }

    update(time, delta) {
        this.daniela.update(delta);
        this.batsGroup.update();
        this.wheelsGroup.update();

    }
}

export default Level1;