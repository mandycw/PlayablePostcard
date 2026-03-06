class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload(){
        this.load.path = "./assets/"
        this.load.atlas('sheet', 'japan.png', 'japan.json')
        this.load.json('shapes', 'japn.json')
        this.load.image('sky', 'sky.png')
        this.load.image('mtfuji', 'mtfuji.png')
        this.load.image('postcard', 'postcard.png')
        this.load.image('cherry', 'cherryblossom.png')
        this.load.image('sun', 'sun.png')
        this.load.image('tori', 'torigate.png')
    }

    create(){
        this.scene.start('frontScene')
        
    }

    update(){
        
    }


}