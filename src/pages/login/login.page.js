/*eslint-disable no-unused-expressions*/

import { Scene3D } from '@enable3d/phaser-extension';
import LayoutLogin from '../../config/layout/layoutlogin';
import LayoutAll from '../../config/layout/layoutall';

export class LoginPage extends Scene3D {
  
  constructor () {
    super({ key: 'LOGINPAGE', active: true });
    // console.info('Login construct.');
    this.layoutLogin = new LayoutLogin(this);
    this.layoutAll = new LayoutAll(this);
    this.pmusic = undefined;
    this.play = undefined;
    this.settings = undefined;
    this.inGame = undefined;
    // console.info('Login cons1truct.');
  }
  
  init (data) {

    this.layoutAll.initAll();
    this.layoutAll.clearStorage();
    // console.info('Login init.');
    this.pmusic = data.music;
  }

  preload () {
    
    this.layoutLogin.loadBgImage();
    this.layoutLogin.loadImgPlay();
    this.layoutLogin.loadImgSettings();
    this.layoutLogin.loadAudio();
    // console.info('Login preload.');
  }

  create() {
    // console.info('Login started.');
    this.layoutAll.textureBG;
    this.input.manager.enabled = true;
    this.play = this.layoutLogin.buttonPlay();
    this.play.displayWidth = 300;
    this.play.displayHeight = 300;
    
    // this.play.on('pointerdown', (pointer: undefined) => {this.playnOnClick(pointer);}, this);

    this.settings = this.layoutLogin.buttonSettings();
    this.settings.displayWidth = 300;
    this.settings.displayHeight = 300;

    this.play.on('pointerdown', () => {this.inGame = 1;}, this);
    this.play.on('pointerover', () => {this.play.setTint(0xc0c0c0);}, this);
    this.play.on('pointerout', () => {this.play.clearTint();}, this);

    this.settings.on('pointerdown', () => { this.inGame = 2;}, this);
    this.settings.on('pointerover', () => {this.settings.setTint(0xc0c0c0);}, this);
    this.settings.on('pointerout', () => {this.settings.clearTint();}, this);

    // this.music = this.layoutLogin.musicPlay;
    // console.log(this.pmusic);
    if ( this.pmusic === undefined) this.layoutAll.playOnOff('login');
    else this.sound.get(this.pmusic).play();

    this.layoutAll.renderAll();
  }

  update () {
    
    if (this.inGame !== undefined) {
      if (this.inGame === 1) {
        this.inGame = undefined;
        // this.sound.get('login').stop();
        return this.layoutAll.changeScene(this, 'LOADINGPAGE', 'LVLSPAGE', 'LVLSPAGE', 'login');
        // this.layoutAll.changeScene(this, 'LvlsPage', 'LvlsPage', 'LvlsPage', 'login');
      }else if(this.inGame === 2) {
          this.inGame = undefined;
          // console.log(SettingsPage.name, this.constructor.name, ' change scene');
          return this.layoutAll.changeScene(this, 'SETTINGSPAGE', 'LOGINPAGE', 'LOGINPAGE', 'login');
      }
    }
  }

}
