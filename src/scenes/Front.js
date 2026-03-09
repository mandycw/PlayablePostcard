class Front extends Phaser.Scene{
    constructor(){
        super('frontScene')
    }

    preload(){
        
    }

    create(){
        
        document.getElementById('info').innerHTML = 'press F to flip postcard'
        this.sky = this.add.image(0, 0, 'sky').setOrigin(0)
        this.sky.setDisplaySize(800, 600)
        
        //var shapes = this.cache.json.get('shapes')
        this.matter.world.setBounds(0, 0, game.config.width, game.config.height)

        //sprites
        this.interactableItem(350, 200, 'sun.png', 100, 100, 'the sun is a deadly laser')
        this.interactableItem(500, 300, 'nintendo.png', 200, 200, 'its a me mario')
        this.interactableItem(400, 400, 'mtfuji.png', 800, 600, 'mt fuji is a mountain')
        this.interactableItem(150, 250, 'tokyotower.png', 200, 200, 'effiel tower')
        this.interactableItem(200, 400, 'torigate.png', 300, 300, 'torigates are cool')
        
        //this.interactableItem(450, 200, 'cherryblossom.png', 700, 500, 'pink flower')

        this.cherry = this.add.image(100, -75, 'cherry').setOrigin(0)
        this.cherry.scale = 0.7

        //swtiching scenes
        this.input.keyboard.on('keydown-F', () => {
            if (this.scene.isPaused('backScene')){
                this.scene.resume('backScene')
                this.scene.stop('frontScene')
                //this.sound.play('pageturn')
            } else{
                this.scene.start('backScene')
                //this.sound.play('pageturn')
            }
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

