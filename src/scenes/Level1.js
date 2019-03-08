import Daniela from '../player/Daniela.js';

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
        this.daniela = new Daniela({
            scene: this,
            key: 'daniela',
            x: this.sys.game.config.width / 4,
            y: 100
        }).setScale(2);

        let map = this.make.tilemap({
            key: 'Level1'
        });

        let level1Tile = map.addTilesetImage('caveStones');
        let Level1 = map.createDynamicLayer('World', level1Tile, 0, 0);
        Level1.setCollisionByExclusion([-1]);
        
        this.physics.add.collider(this.daniela, Level1);
        
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.daniela);
    }

    update(time, delta) {
        this.daniela.update(delta);
    }
}

export default Level1;