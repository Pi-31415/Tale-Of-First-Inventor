import button from "../objects/button.js";

/* 
To use this template, change 3 names of Template Scene in class, super and finally export at bottom
Also change print_scene name
*/

class Scene21 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene21" });
  }

  preload() {}

  add_buttons(currentscene) {
    //Add UI Buttons
       //Add UI Buttons
       button(this, DEFAULT_WIDTH - 250,DEFAULT_HEIGHT - 100, 'button_UI',10, 'Next', 40, 0.5, true, () => { 
        this.scene.start("Scene22");     
    });
  
    button(this, 250,DEFAULT_HEIGHT - 100, 'button_UI',10, 'Back', 40, 0.5, true, () => { 
      this.scene.start("Scene20");  
  });
button(this, DEFAULT_WIDTH / 2,DEFAULT_HEIGHT - 100, 'button_UI',10, 'Main Menu', 40, 0.5, true, () => { 
    this.cameras.main.fadeOut(1000, 0, 0, 0);
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      var nextscene = currentscene + 1;
      this.scene.start("Preloader"); //comment this finally
    })    
  });

  }

  create() {
    const currentscene = 21;
    const musicname = "empire";
    var textdisplay =
    "Their remains scattered across the earth, turning into quartz crystals, the foundation of modern electronics, powered by the life of the goddess.";
    var audioname = "theirremai";
    let result = "";
    var scenename = "scene"+currentscene.toString();
    let n = 110;
    let lastIndex = 0;

    while (lastIndex < textdisplay.length) {
      let sliceEnd = lastIndex + n;
      if (sliceEnd < textdisplay.length) {
        while (sliceEnd > lastIndex && textdisplay[sliceEnd] !== " ") {
          sliceEnd--;
        }
        if (sliceEnd === lastIndex) {
          sliceEnd = lastIndex + n; // Fallback in case there are no spaces
        }
      }
      result += textdisplay.substring(lastIndex, sliceEnd).trim() + "\n";
      lastIndex = sliceEnd + 1;
    }

    textdisplay = result;
    print_scene("Scene21");
    this.logo = this.add.image(DEFAULT_WIDTH / 2, DEFAULT_HEIGHT / 2, scenename);

    this.game.sound.stopAll(); //Stops all Music
    this.cameras.main.setBackgroundColor("rgba(255,255,255,1)");
    //Add gears
    this.gear1 = this.add.image(1920, 1080, "gear_silhouette");
    this.gear1.setAlpha(0.3);
    this.gear2 = this.add.image(1300, 700, "gear_silhouette");
    this.gear2.setScale(0.5);
    this.gear2.setAlpha(0.3);
    this.gear3 = this.add.image(0, 1080, "gear_silhouette");
    this.gear3.setAlpha(0.3);
    this.gear4 = this.add.image(0, 0, "gear_silhouette");
    this.gear4.setAlpha(0.3);
    //Add characters
    this.dark = this.add.image(DEFAULT_WIDTH / 2, 0, "dark");
    this.dark.setAlpha(0.6);
    this.dark.setScale(1);
    this.add_buttons(currentscene);

    // Add Text
    this.add
      .text(30, 30, textdisplay, {
        font: "32px " + "Timeless",
        fill: "#ffffff",
      })
      .setScrollFactor(0);
    // Narration
    this.sound.add(audioname).play();
    // Also play the musicname
    var music = this.sound.add(musicname);
    // Play musicname at half volume
    music.volume = 0.3;
    music.play();
  }

  update() {
    this.gear1.angle += 0.5;
    this.gear2.angle -= 1;
    this.gear3.angle += 1;
    this.gear4.angle -= 1;
  }
}

export default Scene21;
