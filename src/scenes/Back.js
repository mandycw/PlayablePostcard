class Back extends Phaser.Scene{
    constructor(){
        super("backScene")
    }

    preload(){
        this.load.path = "./assets/"
        this.load.image('postcard', 'postcard.png')
        this.load.atlas('sheet', 'japan.png', 'japan.json')
        this.load.json('shapes', 'japn.json')
        this.load.audio('unstick', 'unstick.wav')
    }

    create(){
        this.postcard = this.add.image(-10, -10, 'postcard').setOrigin(0)
        this.postcard.setDisplaySize(820, 620)
       
        //sprites
        this.mask = this.add.sprite(100, 100, 'sheet', 'mask.png')
        this.ramen = this.add.sprite(100, 100, 'sheet', 'ramen.png')
        this.mtfuji = this.add.sprite(100, 100, 'sheet', 'mtfuji.png')
        this.cherry = this.add.sprite(100, 100, 'sheet', 'tokyotower.png')
        this.nin = this.add.sprite(100, 100, 'sheet', 'nintendo.png')

        //scales
        this.mask.scale = 0.5
        this.ramen.scale = 0.5
        this.mtfuji.scale = 0.2
        this.cherry.scale = 0.2
        this.nin.scale = 0.5

        //make sticker
        this.sticker(this.mask)
        this.sticker(this.ramen)
        this.sticker(this.mtfuji)
        this.sticker(this.cherry)
        this.sticker(this.nin)

        //scene switching
        this.input.keyboard.on('keydown-F', () => {
            this.scene.launch('frontScene')
            this.scene.pause()
            this.scene.setVisible(false)
            //this.sound.play('pageturn')
        })
        this.events.on('resume', ()=> {
            this.scene.setVisible(true)
            //this.sound.play('pageturn')
        })
    }

    update(){
        
    }

    sticker(sprite){
        //handle drag events for sprites 
        if (sprite.preFX) {
            sprite.preFX.addGlow(0xffffff, 6, 0, false);
        }
        sprite.setInteractive({draggable: true, pixelPerfect: true, }) 

        sprite.on('dragstart', (pointer) => {
            sprite.setScale(sprite.scale * 1.1)
            this.children.bringToTop(sprite)
            sprite.setTint(0xdddddd)
            this.sound.play('unstick')
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