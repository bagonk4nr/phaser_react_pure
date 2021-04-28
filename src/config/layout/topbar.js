
/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class TopBar {


  constructor (parent) {
    this.scene = parent;
    this.dataImage = '/assets/img/bg/topbar.png';

  }

  get loadTopBar() {
    return this.scene.load.image('topbar', this.dataImage);
  }

  get topBars() {

    return this.scene.add.sprite(50, 21.5, 'topbar');
  }

}

export default TopBar;