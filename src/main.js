
'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 800,
    height: 600,
    pixelArt: true,
    zoom: 1,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Front, Back ] 
}

const game = new Phaser.Game(config)