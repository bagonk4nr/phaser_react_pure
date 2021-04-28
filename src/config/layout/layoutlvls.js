/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class LayoutLvls {

  constructor (parent){
    this.scene = parent;
  }

  audio() {
    return this.scene.load.audio('lvls', ['/assets/music/lvl1.mp3'])

  }

  imgBG() {
    return this.scene.third.load.preload('background', '/assets/img/bg/lvl1.png');
  }

  musicLvl() {
    return this.scene.sound.add('lvls');
  }

}

export default LayoutLvls;