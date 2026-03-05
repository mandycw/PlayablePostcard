class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload(){
        this.load.path = "./assets/"

        this.load.image('sky', 'bluesky.png')
        this.load.image('mtfuji', 'mtfuji.png')
        this.load.image('postcard', 'postcard.png')
    }




}