class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload(){
        this.load.path = "./assets/"
        this.load.atlas('sheet', 'japan.png', 'japan.json')
        this.load.image('sakura', 'sakura.png')
        this.load.image('sky', 'sky.png')
        this.load.audio('pageturn', 'pageturn.wav')
        this.load.audio('bgmusic', 'bgmusic.wav')
        this.load.audio('click', 'click.wav')
    }

    create(){
        this.sound.play('bgmusic', {loop: true})
        this.scene.start('menuScene')
        
    }

    update(){
        
    }


}