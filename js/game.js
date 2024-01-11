import Preloader from './scenes/Preloader.js'
import Scene1 from './scenes/Scene1.js';
import Scene2 from './scenes/Scene2.js';
import Scene3 from './scenes/Scene3.js';
import Scene4 from './scenes/Scene4.js';
import Scene5 from './scenes/Scene5.js';
import Scene6 from './scenes/Scene6.js';
import Scene7 from './scenes/Scene7.js';
import Scene8 from './scenes/Scene8.js';
import Scene9 from './scenes/Scene9.js';
import Scene10 from './scenes/Scene10.js';
import Scene11 from './scenes/Scene11.js';
import Scene12 from './scenes/Scene12.js';
import Scene13 from './scenes/Scene13.js';
import Scene14 from './scenes/Scene14.js';
import Scene15 from './scenes/Scene15.js';
import Scene16 from './scenes/Scene16.js';
import Scene17 from './scenes/Scene17.js';
import Scene18 from './scenes/Scene18.js';
import Scene19 from './scenes/Scene19.js';
import Scene20 from './scenes/Scene20.js';
import Scene21 from './scenes/Scene21.js';
import Scene22 from './scenes/Scene22.js';

const config = {
  type: Phaser.WEBGL,
  backgroundColor: '#000000',
  pixelart: false,
  antialias: true,
  autoFocus: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    parent: 'phaser-example'
  },
  physics: {
		default: 'matter',
		matter: {
			enableSleeping: true,
			gravity: {
				y: 2
			},
			debug: {
				showBody: true,
				showStaticBody: true
			}
		}
	},
  plugins: {
    scene: [
      {
        key: 'SpinePlugin',
        plugin: window.SpinePlugin,
        sceneKey: 'spine'
      }
    ]
  },
  scene: [Preloader,Scene1,Scene2,Scene3,Scene4,Scene5,Scene6,Scene7,Scene8,Scene9,Scene10,Scene11,Scene12,Scene13,Scene14,Scene15,Scene16,Scene17,Scene18,Scene19,Scene20,Scene21,Scene22]
}

window.addEventListener('load', () => {
  new Phaser.Game(config);
})
