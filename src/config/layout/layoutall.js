/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

import Scene from '../scene/scene';
import Sounds from '../../config/utils/sounds';
import TopBar from './topbar';
import OnOffSound from '../../config/utils/onoffsound';
import Time from '../../config/utils/time';

class LayoutAll {
 
  constructor (parent) {
    this.scene = parent;
    this.scne = new Scene();
    this.theSounds = new Sounds(this.scene);
    this.topBar = new TopBar(this.scene);
    this.onOffSound = new OnOffSound(this.scene);
    this.times = new Time(this.scene);
  }

 
  createTimer() {
    return this.times.createTimer();
  }

  updateTimer() {
    return this.times.updateTimer();
  }

  playOnOff(data) {
    return this.onOffSound.playOnOff(data);
  }

  iconSoundTopBar(x, y, data) {
    return this.onOffSound.iconSoundTopBar(x, y);
  }

  iconSoundOffOnTopBar(x, y, data) {
    return this.onOffSound.iconSoundOffOnTopBar(x, y, data);
  }

  iconSoundSetting (x, y, data) {
    return this.onOffSound.iconSoundSetting(x, y, data);
  }

  iconSoundOffOn(x, y, data) {
    return this.onOffSound.iconSoundOffOn(x, y, data);
  }

  onSoundOff() {
     return this.onOffSound.onSoundOff();
  }

  get loadTopBar() {
    return this.topBar.loadTopBar;
  }

  get topBars() {
      return this.topBar.topBars;
  }

  initAll () {
      this.scene.accessThirdDimension();
      this.scene.third.cache.clear();
      this.scene.third.renderer.setPixelRatio(window.devicePixelRatio);

      this.scene.third.warpSpeed('light', 'camera', '-sky', 'orbitControls', '-ground');

      this.scene.third.camera.aspect = this.scene.third.renderer.domElement.clientWidth / this.scene.third.renderer.domElement.clientHeight;
      this.scene.third.camera.updateProjectionMatrix();

      let width=this.scene.third.renderer.domElement.clientWidth;
      let height=this.scene.third.renderer.domElement.clientHeight;

      if (width < height && width < 500) {
          this.scene.third.renderer.setSize(this.scene.third.renderer.domElement.clientWidth, this.scene.third.renderer.domElement.clientHeight);
          this.scene.third.camera.position.set(0, 0, 40);
      } else if (width > 500 && width < 800) {
          this.scene.third.renderer.setSize(this.scene.third.renderer.domElement.clientWidth, this.scene.third.renderer.domElement.clientHeight);
          this.scene.third.camera.position.set(0, 0, 30);
      } else {
          this.scene.third.renderer.setSize(this.scene.third.renderer.domElement.clientWidth, this.scene.third.renderer.domElement.clientHeight);
          this.scene.third.camera.position.set(0, 0, 25);
      }

  }

  renderAll() {
    this.scene.third.camera.lookAt(0, 0, 0);
    this.scene.third.renderer.render(this.scene.third.scene, this.scene.third.camera);
    this.scene.third.renderer.autoUpdate;
    
  }

  clearObjectScene() {
    while (this.scene.third.scene.children.length > 0) {
        this.scene.third.scene.remove(this.scene.third.scene.children[0]);
    }
  }

  get textureBG() {
    return this.scene.third.load.texture('background').then((background) => {this.scene.third.scene.background = background;});
  }

  get platformMaterial() {
    const platformMaterial={ phong: { transparent: true, opacity: 0 } };
    return platformMaterial;
  }

  get scale() {
    // const scalenya=1;
    return 1;
  }

  get soundTextOn() {
    return this.theSounds.textOn;
  }

  get soundTextOff() {
    return this.theSounds.textOff;
  }

  get soundImageOn()  {
    return this.theSounds.imageOn;

  }

  get soundImageOff()  {
    return this.theSounds.imageOff;
  }

  get soundIconOnTopBar() {
      return this.theSounds.iconOnTopBar;
  }

  get soundIconOffTopBar() {
      return this.theSounds.iconOffTopBar;
  }

  soundIconOn(x, y) {
      return this.theSounds.iconOn(x, y);
  }

  soundIconOff(x, y) {
      return this.theSounds.iconOff(x, y);
  }

  set soundOnOff(data) {
    this.theSounds.On = data;
  }
  
  get soundOnOffVal() {
    return this.theSounds.onVal;
  }
  
  get configSound() {
    return this.theSounds.loadConfigAudio;
  }

  changeScene(parent, scene, scene1, data, song, type) {
    return this.scne.changeScene(parent, scene, scene1, data, song, type);
  }

  clearStorage() {
    // localStorage.clear();
    localStorage.removeItem('position');
    localStorage.removeItem('uuid');
  }

}

export default LayoutAll;