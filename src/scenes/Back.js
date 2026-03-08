class Back extends Phaser.Scene{
    constructor(){
        super("backScene")
    }

    preload(){
        this.load.path = "./assets/"
        this.load.image('postcard', 'postcard.png')
        this.load.atlas('sheet', 'japan.png', 'japan.json')
        this.load.json('shapes', 'japn.json')
    }

    create(){
        this.postcard = this.add.image(0, 0, 'postcard').setOrigin(0)
        this.postcard.setDisplaySize(800, 600)
       
        
        this.mask = this.add.sprite(100, 100, 'sheet', 'mask.png')

        this.mask.setDisplaySize(100, 130)
        this.sticker(this.mask)

        this.input.keyboard.on('keydown-F', () => {
            this.scene.launch('frontScene')
            this.scene.pause()
            this.scene.setVisible(false)
        })
        this.events.on('resume', ()=> {
            this.scene.setVisible(true)
        })
    }

    update(){
        
    }

    sticker(sprite){
        //handle drag events for sprites 
        sprite.setInteractive({draggable: true, pixelPerfect: true})

        sprite.on('dragstart', (pointer) => {
            sprite.setScale(sprite.scale * 1.1)
            sprite.setTint(0xdddddd)
        })
        sprite.on('drag', (pointer, dragX, dragY) => {
            sprite.x = dragX
            sprite.y = dragY
        })
        sprite.on('dragend', (pointer) => {
            sprite.setScale(sprite.scale / 1.1)
            sprite.clearTint()
        })
    }
}