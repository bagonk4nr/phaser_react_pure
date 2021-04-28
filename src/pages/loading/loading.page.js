/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/

import { Scene3D, ExtendedObject3D } from '@enable3d/phaser-extension';
import LayoutAll from '../../config/layout/layoutall';
import LayoutLoading from '../../config/layout/layoutloading';

export class LoadingPage extends Scene3D {

  constructor() {
    super({ key: 'LOADINGPAGE', active: false });
    this.loadScene = undefined;
    this.runPanda = undefined;
    this.music = undefined;
    this.inGame = undefined;
    this.dataPassing = undefined;
    this.inType = undefined;
    this.platformMaterial = undefined;
    this.sensor = undefined;
    this.layoutAll = new LayoutAll(this);
    this.layoutloading = new LayoutLoading(this);
    this.platformMaterial = this.layoutAll.platformMaterial;
    this.scalenya = this.layoutAll.scale;
    this.runPanda = undefined;
  }

  init(data) {
    this.layoutAll.initAll();
    delete this.sensor;
    delete this.runPanda;
    this.loadScene = data.scene1;
    // console.log(this.nScene)
    this.dataPassing = data.data;
    this.inType = data.type;
    // console.log(this.inType)
    // this.sound.get('login').stop();
  }

  preload() {
    this.layoutloading.imageLoading;
    this.layoutloading.audioLoading;
    this.layoutloading.imgBG;
  }

  create()   {
    // console.info('loading started.');
    this.layoutAll.textureBG;

    this.sensor = new ExtendedObject3D();
    this.runPanda = new ExtendedObject3D();
    // sensor.position.setY(0)
    this.third.physics.add.existing(this.sensor, { mass: 1e-8, shape: 'box', width: 0.2, height: 0.2, depth: 0.2 });
    this.sensor.body.setCollisionFlags(4);

    const width = this.third.renderer.domElement.clientWidth;
    const height = this.third.renderer.domElement.clientHeight;

    if (width < height && width < 500) {
      this.layoutloading.gltfFile(-15.75);
    } else if (width > 500 && width < 800) {
      this.layoutloading.gltfFile(-10.75);
    } else {
      this.layoutloading.gltfFile(-5.75);
    }

    this.layoutloading.textLoadings;

    this.layoutAll.playOnOff('loading');
    this.sound.get('login').stop();

    this.layoutAll.renderAll();

    setTimeout(() => {
      // console.log('complete')
      this.inGame = 1;
    }, 10000);
    
  }

  update() {
    if (this.inGame !== undefined) {
      this.inGame = undefined;
      return this.layoutAll.changeScene(this, this.loadScene, this.loadScene, this.dataPassing, 'loading', this.inType);
    }
  }

}

// export default LoadingPage;