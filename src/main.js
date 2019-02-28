import Start from './scenes/Start.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "Privet Gamedev",
    version: '0.0.0',

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
    scene: [Bootloader, Start]
};

const game = new Phaser.Game(config);