class Back extends Phaser.Scene{
    constructor(){
        super("backScene")
    }

    preload(){
        this.load.path = "./assets/"
        this.load.image('postcard', 'postcard.png')
    }

    create(){
        this.postcard = this.add.image(0, 0, 'postcard').setOrigin(0)
        this.postcard.setDisplaySize(800, 600)
    }

    update(){
        this.input.keyboard.on('keydown-F', ()=>{
            this.scene.start('frontScene')
        })
    }
}