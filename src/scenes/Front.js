class Front extends Phaser.Scene{
    constructor(){
        super('frontScene')
    }

    preload(){
        
    }

    create(){

        this.sky = this.add.image(0, 0, 'sky').setOrigin(0)
        this.sky.setDisplaySize(800, 600)
        
        this.matter.world.setBounds(0, 0, game.config.width, game.config.height)

        //sprites
        this.interactableItem(350, 200, 'sun.png', 100, 100, 'the sun is a deadly laser')
        this.interactableItem(680, 300, 'marioflag.png', 200, 350, 'japans mario world! if we go we have to visit pls. I love nintendo')
        this.interactableItem(150, 250, 'ttower.png', 300, 500, 'this is the tokyo tower. i feel like we are not real tourists if we dont see this')
        this.interactableItem(400, 420, 'mtfuji.png', 800, 400, 'mt fuji very iconic, see big mountain')
        this.interactableItem(200, 430, 'toriigate.png', 400, 300, 'not real tourists if we dont see this too')
        this.rocks = this.add.image(400, 350, 'rocks').setOrigin(0.5)
        this.cherry = this.add.image(535, 150, 'sakura').setOrigin(0.5)
        this.cherry.scale = 1.3
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
                    this.scene.start('backScene')

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

        //popup rectangle
        this.popUp = this.add.container(400, 300)
        this.popUp.setDepth(100)
        let bg = this.add.rectangle(0, 0, 500, 250, 0x000000, 0.8)
        bg.setStrokeStyle(4, 0xffffff)
        this.popUpText = this.add.text(0, -30, '', {
            fontSize: '24px',
            fill: '#ffffff',
            align: 'center',
            wordWrap: {width: 450},
            }).setOrigin(0.5)
        let closeButton = this.add.text(210, -90, 'X', {
            fontSize: '20px',
            fill: '#ff3d3d',
            }).setOrigin(0.5)

        closeButton.setInteractive({useHandCursor: true})
        closeButton.on('pointerdown', ()=>{
            this.popUp.setVisible(false)
        })
        
        this.popUp.add([bg, this.popUpText, closeButton])
        this.popUp.setVisible(false)

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.start('menuScene')
        })

        let line = new Phaser.Geom.Line(game.config.width, -50, 0, -30)  
        // set up particle emitter  
        this.lineEmitter = this.add.particles(0, 0, 'petals', {
            frequency: 200,
            gravityY: 50,
            lifespan: 6000,
            alpha: {
                start: 1,
                end: 0.1
            },
            tint: [ 0xfa37aa ],
            emitZone: { 
                type: 'random', 
                source: line, 
                quantity: 1
            },
            blendMode: 'ADD'
        })

        let line2 = new Phaser.Geom.Line(game.config.width, -50, 0, -30)  
        // set up particle emitter  
        this.lineEmitter2 = this.add.particles(0, 0, 'petals2', {
            frequency: 200,
            gravityY: 50,
            lifespan: 6000,
            alpha: {
                start: 1,
                end: 0.1
            },
            tint: [ 0xfa37a3 ],
            emitZone: { 
                type: 'random', 
                source: line2, 
                quantity: 1
            },
            blendMode: 'ADD'
        })
    }
    
    update(){

        
    }   


    interactableItem(x, y, name, width, height, message){
        //glow
        //listener for pointerdown
        let item = this.add.sprite(x, y, 'sheet', name)
        item.setDisplaySize(width, height)
        item.setInteractive({ pixelPerfect: true })

        let fx = item.preFX.addGlow(0xffffec, 4, 1, false)
        fx.active = false
        item.on('pointerover', () => {
        fx.active = true;
        })
        item.on('pointerout', () => {
            fx.active = false;
        })
        item.on('pointerdown', ()=> {
            this.sound.play('click')
            this.popUptrig(message)
        })
        return item
    }

    popUptrig(text){
        //if interactableItem is clicked, activate popUp
        //popUp for each landmark
        this.popUpText.setText(text)
        this.popUp.setVisible(true)

        this.popUp.setScale(0.5);
        this.tweens.add({
        targets: this.popUp,
        scaleX: 1,
        scaleY: 1,
        duration: 200,
        ease: 'Back.easeOut'
    })

    }
}

