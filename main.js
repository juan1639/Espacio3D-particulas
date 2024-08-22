
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('fondo-espacial', 'fondo-espacial-geralt.jpg');
    this.load.image('estrella', 'particula1.png');
}

function create()
{
    this.add.image(0, 0, 'fondo-espacial').setOrigin(0, 0).setDepth(100);

    const partis = this.add.particles(config.width / 2, config.height / 2, 'estrella', {
        speed: {min: 50, max: 250},
        lifespan: 22000,
        scale: {start: 0.005, end: 0.3},
        tint: 0xffffff,
        quantity: 4,
        blendMode: 'ADD'
    });

    partis.setDepth(200);
}

function update()
{

}
