/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class Sounds {
  


  constructor (Scene) {
    this.iconOns = '/assets/img/bg/iconsound.png';
    this.iconOffs = '/assets/img/bg/iconsound1.png';
    this.scene = Scene;
    this.onOff = undefined;
    this.storage = undefined;
    this.valSound = [];
    localStorage.removeItem('soundval');
  }

  setDataSound (val) {
      localStorage.removeItem('soundval');
      localStorage.setItem('soundval', JSON.stringify(val));
  }

  dataSound () {
    this.storage = localStorage.getItem('soundval');
    // console.log(this.storage, 'storage')
    if (this.storage !== undefined && this.storage !== null) this.valSound = this.storage ? JSON.parse(this.storage) : {};
    else this.valSound[0] = 1;
    // console.log(this.valSound[0], 'ds');
    // return this.valSound
  }

  set On(data) {

    this.valSound[0] = data;
    // console.log(this.valSound[0], 'set')
    this.setDataSound(this.valSound);
  }

  get onVal() {
    this.dataSound();
    // console.log(this.valSound[0], 'get1')
    this.onOff = this.valSound[0];
    // console.log(this.onOff, 'get');
    return this.onOff;

  }

  get imageOn() {
    return this.scene.load.image('soundon', this.iconOns);

  }

  get imageOff() {
    return this.scene.load.image('soundoff', this.iconOffs);

  }

  get iconOnTopBar()  {

    return this.scene.add.sprite(12, 12, 'soundon').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  get iconOffTopBar()  {

    return this.scene.add.sprite(12, 12, 'soundoff').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  iconOn(x, y) {

    return this.scene.add.sprite(x, y, 'soundon').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  iconOff(x, y)  {

    return this.scene.add.sprite(x, y, 'soundoff').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  get textOn()  {
      return this.scene.add.text(280, 185, 'On', { fontSize: '64px', fill: '#ffffff', bold: true }).setVisible(true);

  }

  get textOff() {
      return this.scene.add.text(280, 185, 'Off', { fontSize: '64px', fill: '#ffff00', bold: true }).setVisible(true);
  }

  get loadConfigAudio() {
    let config = {
                    mute: false,
                    volume: 1,
                    rate: 1,
                    detune: 0,
                    seek: 0,
                    loop: true,
                    delay: 0
                };
    return config;
  }

}

export default Sounds;