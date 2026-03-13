//Name: Mandy Cai
//Hours:
//Credits: 
'use strict'

const config = {
    parent: 'phaser-game',  // for info text
    type: Phaser.WEBGL,     // for tinting
    width: 800,
    height: 600,
    
    zoom: 1,
    physics: {
        default: "matter",
        matter: {
            //fdebug: true,
            gravity: { y: 0 }
        }
    },
    mode: Phaser.Scale.FIT,
    //autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: [ Load, Menu, Front, Back ] 
}

const game = new Phaser.Game(config)