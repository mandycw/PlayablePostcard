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
        
        // this.sun = this.add.image(300, 170, 'sun').setOrigin(0)
        // this.sun.setDisplaySize(100, 100)
        // this.fuji = this.add.image(0, 75, 'mtfuji').setOrigin(0)
        // this.fuji.setDisplaySize(800, 600)
        
        // this.tori = this.add.image(150, 400, 'tori')
        // this.tori.setDisplaySize(300, 300)

        // 
        
        
        var shapes = this.cache.json.get('shapes')
        this.matter.world.setBounds(0, 0, game.config.width, game.config.height)
        var mtfuji = this.matter.add.sprite(0, 0, 'sheet', 'mtfuji.png', {shape: shapes.mtfuji})
        mtfuji.setPosition(400, 400)
        mtfuji.setDisplaySize(800, 600)
        var tori = this.matter.add.sprite(0, 0, 'sheet', 'torigate.png', {shape: shapes.torigate})
        tori.setPosition(200, 400)
        tori.setDisplaySize(300, 300)
        this.matter.world.remove(tori)
        this.matter.world.remove(mtfuji)
        this.cherry = this.add.image(100, -75, 'cherry').setOrigin(0)
        this.cherry.setDisplaySize(700, 500)

        tori.setInteractive({ pixelPerfect: true })
        tori.on('pointerdown', function (pointer, localX, localY, event) {
        console.log('torigates are cool') })

        mtfuji.setInteractive({ pixelPerfect: true })
        mtfuji.on('pointerdown', function (pointer, localX, localY, event) {
        console.log('mt fuji is a mountain') })
        
    }
    update(){

        this.input.keyboard.on('keydown-F', ()=>{
            this.scene.start('backScene')
        })
    }   


    interactableItem(){
        //glow
        //listener for pointerdown
        //
    }

    popUp(){
        //if interactableItem is clicked, activate popUp
        //popUp for each landmark

    }
}

