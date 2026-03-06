class Front extends Phaser.Scene{
    constructor(){
        super('frontScene')
    }

    preload(){
        
    }

    create(){
        this.sky = this.add.image(0, 0, 'sky').setOrigin(0)
        this.sky.setDisplaySize(800, 600)
        document.getElementById('info').innerHTML = 'press F to flip postcard'
        

    }
    update(){

        this.input.keyboard.on('keydown-F', ()=>{
            this.scene.start('backScene')
        })
    }   
}