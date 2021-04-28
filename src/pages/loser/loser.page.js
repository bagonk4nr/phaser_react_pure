/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/

import {
  Scene3D
} from '@enable3d/phaser-extension';

import LayoutAll from '../../config/layout/layoutall';


export class LoserPage extends Scene3D {

  constructor () {
    super({ key: 'LOSERPAGE', active: false });
    this.layoutAll = new LayoutAll(this);
    this.lScene = undefined;
    this.video = undefined;
    this.inGame = undefined;
    this.linData = undefined;
    // this.music = undefined;
    this.loser = undefined;
  }

  init(data) {
    this.layoutAll.initAll();
    this.lScene = data.scene1;
    // console.log(this.nScene)
    this.linData = data.data;
    // this.music = data.music;
  }

  preload() {
    // this.load.video('loser', ['/assets/video/loser.mp4']);
    this.third.load.preload('background', '/assets/img/bg/loser.png');
    this.load.image('loser', '/assets/img/losers.png');
  }

  create() {
    // console.info('loser started.');
    this.third.load.texture('background').then((background) => (this.third.scene.background = background));
    this.loser = this.add.sprite(((window.screen.width * window.devicePixelRatio)/2), ((window.screen.height * window.devicePixelRatio)/2), 'loser');
    this.loser.displayWidth = (window.screen.width * window.devicePixelRatio)/2;
    this.loser.displayHeight = (window.screen.height * window.devicePixelRatio)/2;
    // this.video = this.add.video(((window.screen.width * window.devicePixelRatio)/2), ((window.screen.height * window.devicePixelRatio)/2), 'loser');
    
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
      return this.layoutAll.changeScene(this, 'LOADINGPAGE', this.lScene, this.linData, null, 'loses');
    }
  }

  // nextScene() {
  //   this.inGame = undefined;
    
  // }
}

// export default LoserPage;