/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/

import {
  Scene3D
} from '@enable3d/phaser-extension';

import LayoutAll from '../../config/layout/layoutall';


export class WinPage extends Scene3D {

  
  constructor () {
    super({ key: 'WINPAGE', active: false });
    this.layoutAll = new LayoutAll(this);
    this.wScene = undefined;
    this.video = undefined;
    this.inGame = undefined;
    this.winData = undefined;
    // this.music = null;
    this.winner =  undefined;
  }

  init(data) {
    this.layoutAll.initAll();
    this.wScene = data.scene1;
    // console.log(this.nScene)
    this.winData = data.data;
    // this.music = data.music;
  }

  preload() {
    // this.load.video('win', ['/assets/video/win.mp4'])
    this.third.load.preload('background', '/assets/img/bg/win.png');
    this.load.image('winner', '/assets/img/winner.png');
  }

  create() {
    // console.info('win started.');
    this.third.load.texture('background').then(background => (this.third.scene.background = background));
    // this.video = this.add.video(((window.screen.width * window.devicePixelRatio)/2), ((window.screen.height * window.devicePixelRatio)/2), 'win');
    this.winner = this.add.sprite(((window.screen.width * window.devicePixelRatio)/2), ((window.screen.height * window.devicePixelRatio)/2), 'winner');
    this.winner.displayWidth = (window.screen.width * window.devicePixelRatio)/2;
    this.winner.displayHeight = (window.screen.height * window.devicePixelRatio)/2;
    // this.video.play(true);
    // let durationVideo = this.video.getDuration();
    // // console.log(this.inGame, 'this.inGame')
    // // console.log(durationVideo, 'durationVideo')
    setTimeout(() => {
      // console.log('complete video');
      // this.video.stop();
      this.inGame = 1;
    }, 7000);

  }

  update() {
    if (this.inGame !== undefined) {
      this.inGame = undefined;
      return this.layoutAll.changeScene(this, 'LOADINGPAGE', this.wScene, this.winData, null, 'wins');
    }
  }

  // nextScene()  {
  //   this.inGame = undefined;
  //   return this.layoutAll.changeScene(this, LoadingPage.name.toUpperCase(), this.nScene, this.inData, this.music, 'wins');

  // }

}

// export default WinPage;