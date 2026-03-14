//Name: Mandy Cai
//Hours: ~35 hours
//Phaser components: drag and drop stickers in Back.js, tween manager for flipping postcard, particle effects in Front.js, glowFX on clickable sprites in Front.js, physics on petals in Back.js

'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    zoom: 1,
    physics: {
        default: "matter",
        matter: {
            //fdebug: true,
            gravity: { y: 0 }
        }
    },
    mode: Phaser.Scale.FIT,
    scene: [ Load, Menu, Front, Back ] 
}

const game = new Phaser.Game(config)