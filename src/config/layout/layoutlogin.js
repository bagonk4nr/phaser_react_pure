/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

import Sounds  from '../utils/sounds';


class LayoutLogin {

  constructor(parent) {
    this.scene = parent;
    this.sound = new Sounds(parent);
  }

  loadBgImage() {
    return this.scene.third.load.preload('background', '/assets/img/bg/login.png');
  }

  loadImgPlay() {
    return this.scene.load.image('play', '/assets/img/bg/play.png');
  }

  loadImgSettings() {
    return this.scene.load.image('settings', '/assets/img/bg/settings.png');
  }

  loadAudio() {
    return this.scene.load.audio('login', ['/assets/music/login.mp3']);
  }

  configSound() {
    return this.sound.loadConfigAudio();
  }

  buttonPlay() {
    return this.scene.add.sprite(((window.screen.width * window.devicePixelRatio)/2) - 175, ( (window.screen.height * window.devicePixelRatio)/2), 'play').setInteractive({ useHandCursor: true  });
  }

  buttonSettings() {
    return this.scene.add.sprite(((window.screen.width * window.devicePixelRatio)/2) + 175, ( (window.screen.height * window.devicePixelRatio)/2), 'settings').setInteractive({ useHandCursor: true  });
  }

  musicPlay() {
    return this.scene.sound.play('login');
  }

  musicPause() {
    return this.scene.sound.pause('login');
  }
}

export default LayoutLogin;