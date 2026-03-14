class Back extends Phaser.Scene{
    constructor(){
        super("backScene")
    }

    preload(){
        this.load.path = "./assets/"
        this.load.image('postcard', 'postcard.png')
        this.load.atlas('sheet', 'japan.png', 'japan.json')
        this.load.audio('unstick', 'unstick.wav')
        this.load.image('pipe', 'pipe.png')
    }

    create(){
        this.postcard = this.add.image(-10, -10, 'postcard').setOrigin(0)
        this.postcard.setDisplaySize(820, 620)
       
        //sprites
        this.bird = this.add.sprite(700, 500, 'sheet', 'bird.png')
        this.ramen = this.add.sprite(100, 500, 'sheet', 'rmen.png')
        this.fan = this.add.sprite(400, 100, 'sheet', 'fan.png')
        this.luckycat = this.add.sprite(650, 150, 'sheet', 'luckycat.png')
        this.dourma = this.add.sprite(100, 100, 'sheet', 'dourma.png')

        this.pipe = this.add.image(600, 480, 'pipe')
        this.pipe.setInteractive({pixelPerfect: true})
        
        let sfx = this.pipe.preFX.addGlow(0xffffec, 4, 1, false)
        sfx.active = false
        this.pipe.on('pointerover', () => {
            sfx.active = true;
        })
        this.pipe.on('pointerout', () => {
            sfx.active = false;
        })

        //scales
        this.dourma.setScale(0.7)
        this.fan.setScale(0.8)
        this.bird.setScale(0.7)

        //make sticker
        this.sticker(this.bird)
        this.sticker(this.ramen)
        this.sticker(this.fan)
        this.sticker(this.luckycat)
        this.sticker(this.dourma)

        this.isFlipping = false

        this.pipe.on('pointerdown', () => {

            if (this.isFlipping) return
            this.isFlipping = true

            this.tweens.add({
                targets: this.cameras.main,
                zoomX: 0,
                duration: 350,
                ease: 'Cubic.easeIn',
                onComplete: () => {
                    this.scene.start('frontScene')

                    }
                })
            })

        this.events.on('wake', () => {
            this.isFlipping = false
            this.cameras.main.zoomX = 0
            this.tweens.add({
                targets: this.cameras.main,
                zoomX: 1,
                duration: 350,
                ease: 'Cubic.easeOut'
            })

        })
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.start('menuScene')
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