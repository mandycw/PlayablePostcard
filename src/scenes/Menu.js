class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload(){

    }

    create(){
        this.cameras.main.setBackgroundColor('#facade')
        this.menuTextGroup = this.add.group()

        const title = this.add.text(400, 200, 'Playable Postcard\nPress ENTER to Start', { fontSize: '30px', wordWrap: { width: 800 }, color: '#000000'}).setOrigin(0.5)

        this.menuTextGroup.add(title)

        this.input.keyboard.on('keydown-ENTER', () => {
            //this.sound.play('menuStart')
            this.scene.start('frontScene')

        })
    }

    update(){

    }

}