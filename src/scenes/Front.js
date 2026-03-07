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

        var sun = this.add.sprite(350, 200, 'sheet', 'sun.png');
        sun.setDisplaySize(100, 100);
        sun.setPosition(350, 200)

        this.cherry = this.add.image(100, -75, 'cherry').setOrigin(0)
        this.cherry.setDisplaySize(700, 500)

        this.interactableItem(350, 200, 'sun.png', 100, 100, 'the sun is a deadly laser');
        this.interactableItem(400, 400, 'mtfuji.png', 800, 600, 'mt fuji is a mountain');
        this.interactableItem(200, 400, 'torigate.png', 300, 300, 'torigates are cool')

        this.input.keyboard.on('keydown-F', () => {
        this.scene.start('backScene')
    })
        
    }
    update(){

        
    }   


    interactableItem(x, y, name, width, height, message){
        //glow
        //listener for pointerdown
        //
        let item = this.add.sprite(x, y, 'sheet', name)
        item.setDisplaySize(width, height)
        item.setInteractive({ pixelPerfect: true })
        item.on('pointerdown', ()=> {
            console.log(message)
            //popup()
        })
        return item
    }

    popUp(){
        //if interactableItem is clicked, activate popUp
        //popUp for each landmark

    }
}

