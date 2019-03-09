import Daniela from '../player/Daniela.js';
import Bats from '../gameObjects/Bats.js';

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
        //bat move
        this.anims.create({
            key: 'bat_move',
            frames: this.anims.generateFrameNumbers('bats', { start: 4, end: 7 }),
            frameRate: 5,
            repeat: -1
        }); 

        this.daniela = new Daniela({
            scene: this,
            key: 'daniela',
            x: this.sys.game.config.width / 4,
            y: 100
        }).setScale(2);

        let map = this.make.tilemap({
            key: 'Level1'
        });


        //Creating Bats         
        this.bats = map.createFromObjects('Bats', 'Bat', {key: 'bats'});        
        this.batsGroup = new Bats(this.physics.world, this, [], this.bats);
        
        //Tilemap
        let level1Tile = map.addTilesetImage('caveStones');
        let Level1 = map.createDynamicLayer('World', level1Tile, 0, 0);
        Level1.setCollisionByExclusion([-1]);

        //Colliders
        this.physics.add.collider(this.daniela, Level1);        
        this.physics.add.collider(this.batsGroup, Level1);
        this.physics.add.overlap(this.daniela, this.bats, () => {
            console.log('Daniela colisiona');
        });
        
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.daniela);
        console.log(this.batsGroup);
        this.anims.play('bat_move', this.bats);

    }

    update(time, delta) {
        this.daniela.update(delta);
        this.batsGroup.update();
    }
}

export default Level1;