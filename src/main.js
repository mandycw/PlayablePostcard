
'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 800,
    height: 600,
    pixelArt: true,
    zoom: 1,
    physics: {
        default: "matter",
        matter: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    scene: [ Load, Front, Back ] 
}

const game = new Phaser.Game(config)