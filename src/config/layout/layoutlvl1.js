/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class LayoutLvl1 {


  constructor (parent){
    this.scene = parent;
  }

  audio() {
    return this.scene.load.audio('lvl1', ['/assets/music/lvl2.mp3']);

  }

  imgBG() {
    return this.scene.third.load.preload('background', '/assets/img/bg/lvl2.png');
  }

  musicLvl() {
    return this.scene.sound.add('lvl1');
  }

}

export default LayoutLvl1;
