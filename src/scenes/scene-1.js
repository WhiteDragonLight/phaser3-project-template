import 'phaser';
import logo from '../../assets/sprites/logo.png'
 
export default class Scene1 extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    this.load.image('logo', logo);
  }
 
  create () {
    this.add.image(400, 300, 'logo');
  }
};