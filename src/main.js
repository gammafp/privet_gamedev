import IntroStory from './scenes/IntroStory.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "Privet Gamedev",
    version: '0.0.0',

    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#95afc0",
    pixelArt: true,
    zoom: 2,

    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, IntroStory]
};

const game = new Phaser.Game(config);