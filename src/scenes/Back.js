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

        var shapes = this.cache.json.get('shapes')
        this.matter.world.setBounds(0, 0, game.config.width, game.config.height)

        var mask = this.matter.add.sprite(0, 0, 'sheet', 'mask.png', {shape: shapes.mask})
        mask.setPosition(100, 100)
        mask.setDisplaySize(100, 130)
        this.matter.world.remove(mask)

        this.input.keyboard.on('keydown-F', () => {
        this.scene.start('frontScene')
        })
    }

    update(){
        
    }

    sticker(){
        //handle drag events for sprites 
    }
}