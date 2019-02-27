import Play from './scenes/Play.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "Privet Gamedev",
    verion: '0.0.0',

    width: 640,
    height: 360,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#95afc0",
    pixelArt: true,

    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, Play]
};

const game = new Phaser.Game(config);
const EE = new EventEmitter3();