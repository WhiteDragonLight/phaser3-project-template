import 'phaser';
import config from './config/config';
import Scene1 from './scenes/scene-1';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Game', Scene1);
    this.scene.start('Game');
  }
}
 
window.game = new Game();