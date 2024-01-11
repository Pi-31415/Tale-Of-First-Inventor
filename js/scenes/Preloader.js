import button from '../objects/button.js'

class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'Preloader' })
    }

    preload() {
        this.load.setPath('assets/images');
        this.load.image('studio_logo', 'studio_logo.png');
        this.load.image('logo', 'logo.png');
        this.load.image('mainmenu_bg', 'mainmenu_bg.jpg');
        // Add Scenes
        this.load.image('scene1', 'scene1.png');
        this.load.image('scene2', 'scene2.png');
        this.load.image('scene3', 'scene3.png');
        this.load.image('scene4', 'scene4.png');
        this.load.image('scene5', 'scene5.png');
        this.load.image('scene6', 'scene6.png');
        this.load.image('scene7', 'scene7.png');
        this.load.image('scene8', 'scene8.png');
        this.load.image('scene9', 'scene9.png');
        this.load.image('scene10', 'scene10.png');
        this.load.image('scene11', 'scene11.png');
        this.load.image('scene12', 'scene12.png');
        this.load.image('scene13', 'scene13.png');
        this.load.image('scene14', 'scene14.png');
        this.load.image('scene15', 'scene15.png');
        this.load.image('scene16', 'scene16.png');
        this.load.image('scene17', 'scene17.png');
        this.load.image('scene18', 'scene18.png');
        this.load.image('scene19', 'scene19.png');
        this.load.image('scene20', 'scene20.png');
        this.load.image('scene21', 'scene21.png');
        this.load.image('scene22', 'scene22.png');

        this.load.image('gear_silhouette','gear_silhouette.png');
        this.load.image('dark','dark.jpg');
        this.load.image('ss_great_eastern_ticket','ss_great_eastern_ticket.png');
        
       

        this.load.setPath('assets/sfx');
        this.load.image('sunlight', 'sunlight.png');

        this.load.setPath('assets/UI');
        this.load.image('button_UI', 'button.png');

        this.load.setPath('assets/music');
        this.load.audio('intro_music', 'intro.mp3');
        this.load.audio('MainTheme','MainTheme.mp3');
        this.load.audio('button_hover', 'button_hover.wav');
        this.load.audio('button_click', 'button_click.wav');
        // Add empire.mp3
        this.load.audio('empire', 'empire.mp3');

        this.load.setPath('assets/spine');
        this.load.spine('Lugo_Cover', 'Lugo_Cover.json', 'Lugo_Cover.atlas');
        this.load.spine('Lin_Cover', 'Lin_Cover.json', 'Lin_Cover.atlas');

        this.load.setPath('assets/videos');
        this.load.video('video_prologue', 'prologue.mp4', 'loadeddata', false, false);

        this.load.setPath('assets/audio');     
        this.load.audio('asdaysturn', 'Asdaysturn.mp3');
        this.load.audio('eventually', 'Eventually.mp3');
        this.load.audio('ténghousa', 'TéngHou\'sa.mp3');
        this.load.audio('thusendedt', 'Thusendedt.mp3');
        this.load.audio('butsuànshé', 'ButSuànshé.mp3');
        this.load.audio('heartbroke', 'Heartbroke.mp3');
        this.load.audio('ténghoure', 'TéngHou,re.mp3');
        this.load.audio('triumphant', 'Triumphant.mp3');
        this.load.audio('buthappine', 'Buthappine.mp3');
        this.load.audio('movedbylov', 'Movedbylov.mp3');
        this.load.audio('ténghounod', 'TéngHounod.mp3');
        this.load.audio('withpride', 'Withpride,.mp3');
        this.load.audio('buthumans', 'Buthumans,.mp3');
        this.load.audio('mylovemy', 'Mylove,my.mp3');
        this.load.audio('theirlovef', 'Theirlovef.mp3');
        this.load.audio('yourpuppe', 'Yourpuppe.mp3');
        this.load.audio('determined', 'Determined.mp3');
        this.load.audio('onceuponat', 'Onceuponat.mp3');
        this.load.audio('theirremai', 'Theirremai.mp3');
        this.load.audio('eachevenin', 'Eachevenin.mp3');
        this.load.audio('onefateful', 'Onefateful.mp3');
        this.load.audio('theladyrev', 'Theladyrev.mp3');
    }

    create() {
        print_scene("Preloader");
        
        this.game.sound.stopAll(); //Stops all Music
        
        this.logo = this.add.image(DEFAULT_WIDTH / 2, DEFAULT_HEIGHT / 2, 'mainmenu_bg');
        
        preload_complete();

        button(this, DEFAULT_WIDTH / 2, DEFAULT_HEIGHT -100, 'button_UI',10, 'Play', 40, 0.5, true, () => { 
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('Scene1'); //comment this finally
            })    
        });
        //Add gears
        this.gear1 = this.add.image(1920, 1080, 'gear_silhouette');
        this.gear1.setAlpha(0.3);

        this.gear2 = this.add.image(1300, 700, 'gear_silhouette');
        this.gear2.setScale(0.5);
        this.gear2.setAlpha(0.3);

        this.gear3 = this.add.image(0, 1080, 'gear_silhouette');
        this.gear3.setAlpha(0.3);

        this.gear4 = this.add.image(0, 0, 'gear_silhouette');
        this.gear4.setAlpha(0.3);
        this.logo = this.add.image(1000, 400, 'logo');
        this.logo.setScale(1);

    }

  
    update() {
        this.gear1.angle += 0.5;
        this.gear2.angle -= 1;
        this.gear3.angle += 1;
        this.gear4.angle -= 1;
    }
}

export default Preloader
