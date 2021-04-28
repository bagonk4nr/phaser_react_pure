/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/

import { Scene3D
  } from '@enable3d/phaser-extension';
import LayoutSettings from '../../config/layout/layoutsettings';
import LayoutAll from '../../config/layout/layoutall';

export class SettingsPage extends Scene3D {

  constructor () {
    super({ key: 'SETTINGSPAGE', active: false});
    
    this.layoutAll = new LayoutAll(this);
    this.layoutSettings = new LayoutSettings(this);
    this.cScene = undefined;
    
    this.smusic = undefined;
    this.musicOn = undefined;
    this.textOn = undefined;
    this.textOff = undefined;
    this.buttonBack = undefined;
    this.iconOffOn = undefined;
    this.inTheGame = undefined;
    
  }

  init (data) {
    
    this.layoutAll.initAll();
    
    this.cScene = data.data;
    // if (this.nScene === undefined) this.nScene = 'LoginPage';
    // console.log(this.nScene);
    this.smusic = data.music;
  }

  preload() {

    this.layoutSettings.loadImgBg();
    this.layoutSettings.loadBackBtn();
    this.layoutAll.soundImageOn;
    this.layoutAll.soundImageOff;
    
    
  }

  create() {
    // console.info('settings started.');
    // this.iconSoundOn = this.layoutAll.soundIconOn(180, 210);
    // this.iconSoundOff = this.layoutAll.soundIconOff(180, 210);
    this.textOn = this.layoutAll.soundTextOn;
    this.textOff = this.layoutAll.soundTextOff;
    this.layoutAll.textureBG;
    this.buttonBack = this.layoutSettings.buttonBack();
    this.buttonBack.name = 'backButton';
    this.buttonBack.scale = 0.3;
  

    this.add.text(150, 80, 'Sounds', { fontSize: '64px', bold: true }).setFill('ffff#00');
    // console.log(this.layoutAll.soundOnOffVal)
    // console.log(this.music);
    // this.layoutAll.iconSoundSetting(180, 210, this.music);

    this.buttonBack.on('pointerdown', () => { 
      this.inGame = 1;
    }, this);

    this.buttonBack.on('pointerover', () => { 

      this.buttonBack.setTint(0xc0c0c0); 
    
    }, this);

    this.buttonBack.on('pointerout', () => { 

      this.buttonBack.clearTint(); 

    }, this);

    this.layoutAll.renderAll();

  }

  update() {

    if (this.inGame === 1) {
      this.inGame = undefined;
      
      this.layoutAll.changeScene(this, this.cScene, this.cScene, this.cScene, this.smusic);
      // this.layoutAll.changeScene(this, 'LvlsPage', 'LvlsPage', 'LvlsPage', 'login');
    }

    this.layoutAll.iconSoundOffOn(180, 210, this.music);
    this.layoutAll.iconSoundSetting(180, 210, this.cScene.toLowerCase().replace('page', ''));


  }
  
}

// export default SettingsPage;