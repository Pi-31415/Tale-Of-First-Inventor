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
  scene: [Preloader,Scene1,Scene2,Scene3,Scene4,Scene5,Scene6,Scene7,Scene8,Scene9,Scene10]
}

window.addEventListener('load', () => {
  new Phaser.Game(config);
})
