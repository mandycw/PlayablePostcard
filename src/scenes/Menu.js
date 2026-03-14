class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload(){

    }

    create(){
        this.cameras.main.setBackgroundColor('#facade')
        this.menuTextGroup = this.add.group()

        const title = this.add.text(400, 100, 'Playable Postcard\nPress ENTER to Start', { fontSize: '30px', wordWrap: { width: 800 }, color: '#000000'}).setOrigin(0.5)
        const directions = this.add.text(400, 200, 'Press D for Directions', { fontSize: '30px', wordWrap: { width: 800 }, color: '#000000'}).setOrigin(0.5)
        const credits = this.add.text(400, 300, 'Press C for Credits', { fontSize: '30px', wordWrap: { width: 800 }, color: '#000000'}).setOrigin(0.5)

        this.menuTextGroup.add(title)
        this.menuTextGroup.add(directions)
        this.menuTextGroup.add(credits)

        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.start('frontScene')

        })

        this.directionsText = this.add.text(160, 160,
            'click to interact! \npress ESC to go back to menu whenever \nstickers are movable in the back! click and drag to move them \nESC to go back to menu', { fontSize: '30px', wordWrap: { width: 500 }, color: '#000000', lineSpacing: 10}
        )
        this.directionsText.setVisible(false)

        this.creditsText = this.add.text(350, 250,
            'credits: \nArt: me\nmusic:\nhttps://freesound.org/people/ Seth_Makes_Sounds/sounds/680134/\nsticker sound:\nhttps://freesound.org/people/ jomse/sounds/428652/\npostcard:\nhttps://gallery.yopriceville.com/ Free-Clipart-Pictures/ Decorative-Elements-PNG/ Vintage_Envelope_PNG_Clipart\nESC to go back to menu\nmtfuji: \nhttps://travel.gaijinpot.com/mount-fuji/\ntoriigates:\nhttps://blog.gaijinpot.com/fushimi-inari-tori-gates/\nmario world:\nhttps://www.foodbeast.com/ listicle/the-ultimate-food-guide-to-universal -studios-japans-super-nintendo-world/', { fontSize: '20px', wordWrap: { width: 600 }, color: '#000000', lineSpacing: 5}
        ).setOrigin(0.5)
        this.creditsText.setVisible(false)
       
        this.input.keyboard.on('keydown-D', () => {
            this.menuTextGroup.setVisible(false)
            this.directionsText.setVisible(true)
            this.creditsText.setVisible(false)
        })

        this.input.keyboard.on('keydown-ESC', () => {
            this.menuTextGroup.setVisible(true)
            this.directionsText.setVisible(false)
            this.creditsText.setVisible(false)
        })

        this.input.keyboard.on('keydown-C', () => {
            this.menuTextGroup.setVisible(false)
            this.directionsText.setVisible(false)
            this.creditsText.setVisible(true)
        })
    }

    update(){

    }

}