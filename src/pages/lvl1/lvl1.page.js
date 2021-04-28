/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-disable no-loop-func*/

import {
  Scene3D, THREE
} from '@enable3d/phaser-extension';

import LayoutAll from '../../config/layout/layoutall';
import LayoutLvl1 from '../../config/layout/layoutlvl1';
import CenterScreen from '../../config/screen/centerscreen';

export class Lvl1Page extends Scene3D {

  constructor () {
    super({ key: 'LVL1PAGE', active: false });
    this.layoutAll = new LayoutAll(this);
    this.layoutLvl1 = new LayoutLvl1(this);
    this.centerScreen = new CenterScreen();
    this.platformMaterial = this.layoutAll.platformMaterial;
    this.scalenya = this.layoutAll.scale;

    this.boxImg = undefined;

    this.boxPositions = undefined;

    this.indexs = undefined;

    this.pictPosition = undefined;
    this.pickedObject = undefined;
    this.movePosition = undefined;

    this.boxName = undefined;
    this.copyMaterial = [];

    this.topBar = undefined;
   

    this.music = undefined;

    this.musicOn = undefined;
    this.iconSoundOn = undefined;
    this.iconSoundOff = undefined;

    this.arrayBoxX=[];
    this.arrayBoxY =[];
    this.countStar = 0;
    this.iconOffOn = undefined;
    this.startTime = new Date();
  	this.totalTime = 45;
  	this.timeElapsed = 0;
    this.timeLabel = undefined;

    this.sensor = undefined;

    this.clixkX = undefined;
    this.clixkY = undefined;

  }

  init (data) {

    this.layoutAll.initAll();

    if (this.boxImg !== undefined) delete this.boxImg;

    this.boxImg = data.data;
    // console.log(this.boxImg)
    var position = localStorage.getItem('position');
    var uuid = localStorage.getItem('uuid');
    if (position !== null || position !== undefined) localStorage.removeItem('position');
    if (uuid !== null || uuid !== undefined) localStorage.removeItem('uuid');
    
  }

  preload() {

    this.layoutLvl1.audio();
    this.layoutLvl1.imgBG();
    this.layoutAll.soundImageOn;
    this.layoutAll.soundImageOff;
    this.layoutAll.loadTopBar;
  }

  create() {
    // console.info('lvl1 started.');
    let topBar = this.layoutAll.topBars;
    topBar.displayWidth = ((window.screen.width * window.devicePixelRatio) * 2);
    topBar.displayHeight = 100;

    this.layoutAll.iconSoundTopBar(50, 25, 'lvl1')

    // this.music = this.layoutLvl1.musicLvl
    
    this.layoutAll.playOnOff('lvl1');
    if (this.sound.get('login') !== null) this.sound.get('login').stop();
    if (this.sound.get('loading') !== null) this.sound.get('loading').stop();
    // add platforms
    const platformMaterial = this.layoutAll.platformMaterial;

    this.layoutAll.textureBG;
    let width = (window.screen.width * window.devicePixelRatio);
    let height = (window.screen.height * window.devicePixelRatio);

    if (width < height && width < 500) {
        this.centerScreen.centerOfScreen(9, 2.5, 1.75);
        this.clixkX = 5.25;
        this.clixkY = 5.25;
    } else if (width > 500 && width < 800) {
        this.centerScreen.centerOfScreen(9, 2.5, 1.75);
        this.clixkX = 5.25;
        this.clixkY = 5.25;
    } else {
        this.centerScreen.centerOfScreen(9, 3, 1.75);
        this.clixkX = 5.25;
        this.clixkY = 5.25;
    }

    this.boxPositions = this.centerScreen.screen();
    // add a sensor

    let storage = localStorage.getItem('uuid'),
        existingNumbers = storage ? JSON.parse(storage) : {};
    let storagePosition = localStorage.getItem('position'),
        existingPositions = storagePosition ? JSON.parse(storagePosition) : {};
    let v = 0;


    while (true) {

    this.boxPositions.forEach( (pos, ib) => {
        let boxs;
        if(this.boxImg !== undefined) boxs = Phaser.Utils.Array.GetRandom(this.boxImg); // Math.floor(Math.random() * this.boxImg.length);
        // boxs =  Math.floor(Math.random() * this.boxImg.length);
        let posXs = { x: 0, y: 0, no: 0, row: 0, col: 0  };
        posXs = JSON.parse(pos);

        if ( boxs !== undefined) {

          if (!existingNumbers[boxs.uuid] && !existingPositions[JSON.stringify(posXs)]) {
            existingNumbers[boxs.uuid] = true;
            existingPositions[JSON.stringify(posXs)] = true;
            localStorage.setItem('uuid', JSON.stringify(existingNumbers));
            localStorage.setItem('position', JSON.stringify(existingPositions));
  
            this.third.physics.destroy(boxs.body);
  
            this.third.animationMixers.add(boxs.animation.mixer);
              // console.log(posXs, 'posXs')
              boxs.number = posXs.no;
              boxs.rows = posXs.row;
              boxs.cols = posXs.col;
              boxs.position.setX(posXs.x + 1);
              boxs.position.setY(posXs.y + 2);
              boxs.animation.play('Rotation');
              boxs.visible = true;
              let platforms =
                [
                  this.third.physics.add.box({ name: 'platform-ground', x: posXs.x + 1, y: posXs.y + 2, width: 2, depth: 1, height: 0, mass: 0 }, platformMaterial)
                ];
              this.third.add.existing(boxs);
  
              this.third.physics.update;
              // boxs.body.setCollisionFlags(6)
              // boxs.body.setLinearFactor(0, 0, 0)
              // boxs.body.setAngularFactor(0, 0, 0)
              // boxs.body.setFriction(0)
  
              v += 1;
            }

        }
        

    });
        if (v === 9) break;
    }

    window.addEventListener('pointerdown', (pointer) => {
      // prevent the window from scrolling
      // pointer.preventDefault();
      
      
          // console.log(this.pictPosition, this.movePosition, 'pict')
          if (this.pictPosition === '' && this.movePosition === '') {
            if (this.movePosition === '') {
              // console.log('uyee')
              this.onClick(pointer)
            }
          } else if (this.pictPosition === undefined && this.movePosition === undefined) {
            // console.log('uyee1')
            this.onClick(pointer)
          } else if (this.pictPosition === '' && this.movePosition === undefined) {
            // console.log('uyee2')
            this.onClick(pointer)
          } else if (this.pictPosition.x === 0 && this.pictPosition.y === 0) {
            // console.log('uyee3')
            this.onClick(pointer)
          } else if (this.pictPosition.x !== 0 && this.pictPosition.y !== 0 && this.movePosition === undefined) {
            // console.log('uyeeMove')
            this.onMove(pointer);
          }
      
    }, true);

    this.layoutAll.renderAll();

    this.startTime = new Date();
  	this.totalTime = 45;
  	this.timeElapsed = 0;
    this.layoutAll.createTimer();

  }

  update() {

        this.onSwitch();
        this.layoutAll.iconSoundOffOnTopBar(50, 25, 'lvl1');
        this.layoutAll.updateTimer();

        this.checkTimeLabel();

  }

  checkTimeLabel() {
    // console.log(this.timeLabel.text, 'timeLabel')
    if (this.timeLabel.text === '00:00' || this.timeLabel.text.indexOf('-') !== -1) {
      // console.log('loser')
      // setTimeout(() => {
        return this.layoutAll.changeScene(this, 'LOSERPAGE', 'LVL1PAGE', this.boxImg, 'lvl1');
      //  }, 10000);
    }

    if (this.timeLabel.text !== '02:00') {

      this.checkWin();
    }
  }

  onSwitch() {

    if (this.pictPosition !== undefined && this.pictPosition !== '') {
    if (this.pictPosition.x !== 0 && this.pictPosition.y !== 0) {
          // console.log(this.pictPosition, 'pictPosition on click')
        this.boxImg.forEach( (boxInPic) => {
          // console.log(this.pictPosition, 'pictPosition on click')
          if (boxInPic.position.x === this.pictPosition.x && boxInPic.position.y === this.pictPosition.y) {
            // console.log(this.pictPosition, 'pictPosition on click')
            if (boxInPic.name === 'this.boxStars') {
            boxInPic.traverse(  (child) => {
             if ( child instanceof THREE.Mesh ) {
                // console.log(child.material.color)

                  child.material.color.setHex(0xb1effe, 0);
                 }
             });
           }


          if (this.movePosition !== undefined && this.pictPosition !== undefined) {
              if (this.movePosition.x !== 0 && this.movePosition.y !== 0) {
                this.boxImg.forEach( (boxInPic1) => {
                  if (boxInPic1.position.x === this.movePosition.x && boxInPic1.position.y === this.movePosition.y) {
                    if (this.pictPosition.x === this.movePosition.x || this.pictPosition.y === this.movePosition.y) {

                        if (this.pictPosition.x - this.movePosition.x === this.clixkX || this.pictPosition.x - this.movePosition.x === -this.clixkX ||
                            this.pictPosition.y - this.movePosition.y === this.clixkY || this.pictPosition.y - this.movePosition.y === -this.clixkY) {
                          // console.log(this.pictPosition.x, boxInPic1.name, 'picked')
                          boxInPic1.position.setX(this.pictPosition.x);
                          boxInPic1.position.setY(this.pictPosition.y);
                          // this.movePosition = { x: 0, y: 0 };
                        } else {
                          boxInPic1.position.setX(this.movePosition.x);
                          boxInPic1.position.setY(this.movePosition.y);
                        }

                    } else {
                      boxInPic1.position.setX(this.movePosition.x);
                      boxInPic1.position.setY(this.movePosition.y);
                    }
                  }
                });
                if (this.pictPosition.x === this.movePosition.x || this.pictPosition.y === this.movePosition.y) {
                  if (this.pictPosition.x - this.movePosition.x === this.clixkX || this.pictPosition.x - this.movePosition.x === -this.clixkX ||
                      this.pictPosition.y - this.movePosition.y === this.clixkY  || this.pictPosition.y - this.movePosition.y === -this.clixkY) {
                    if (boxInPic.name === 'this.boxStars') {
                          // console.log(this.movePosition, boxInPic.name, 'move')
                        boxInPic.position.setX(this.movePosition.x);
                        boxInPic.position.setY(this.movePosition.y);
                        boxInPic.traverse(  (child) => {
                         if ( child instanceof THREE.Mesh ) {
                              child.material.color = this.copyMaterial;
                              // child.material.color.setHex(0xb1effe, 0)

                             }
                         });
                       }
                    } else {
                      if (boxInPic.name === 'this.boxStars') {
                        // console.log(this.movePosition, boxInPic.name, 'move')
                        boxInPic.position.setX(this.pictPosition.x);
                        boxInPic.position.setY(this.pictPosition.y);
                        boxInPic.traverse(  (child)=> {
                         if ( child instanceof THREE.Mesh ) {
                              child.material.color = this.copyMaterial;
                              // child.material.color.setHex(0xb1effe, 0)

                             }
                         });
                   }
                  }
               } else {
                 if (boxInPic.name === 'this.boxStars') {
                   // console.log(this.movePosition, boxInPic.name, 'move')
                   boxInPic.position.setX(this.pictPosition.x);
                   boxInPic.position.setY(this.pictPosition.y);
                   boxInPic.traverse(  (child) => {
                    if ( child instanceof THREE.Mesh ) {
                         child.material.color = this.copyMaterial;
                         // child.material.color.setHex(0xb1effe, 0)

                        }
                    });
                 }
               }

             }
           }
          }
        });

        if (this.movePosition !== undefined && this.movePosition !== '') {
            this.movePosition = '';
            this.pictPosition = '';
            // console.log(this.movePosition, this.pictPosition, 'value')
        }
        // console.log(this.movePosition, this.pictPosition, 'value1')
     }

   }
  }

  onMove(e) {
    if (this.third !== undefined) {
    let pickPosition = { x: 0, y: 0 };
    this.movePosition = { x: 0, y: 0 };
    let raycaster = new THREE.Raycaster();
    let width = this.third.renderer.domElement.clientWidth;
    let height = this.third.renderer.domElement.clientHeight;
    
    pickPosition.x = (e.clientX / (width)) * 2 - 1;
    pickPosition.y = (e.clientY / (height)) * -2 + 1;  // note we flip Y

    raycaster.setFromCamera(pickPosition, this.third.camera);
    // console.log(this.third.scene.children);
    const intersectedObjects = raycaster.intersectObjects(this.third.scene.children);

    if (intersectedObjects.length) {

      this.pickedObject = intersectedObjects[0].object;


      this.movePosition.x = this.pickedObject.position.x;
      this.movePosition.y = this.pickedObject.position.y;

      this.pickedObject = '';
      // console.log('boboMove: ', this.movePosition.x, this.movePosition.y, this.pickedObject);
    }
  }
  }

  onClick(e) {
    if (this.third !== undefined) {
    let pickPosition = { x: 0, y: 0 };

    this.pictPosition = { x: 0, y: 0 };
    let raycaster = new THREE.Raycaster();
    // console.log(e.x, e.y, e.position.x, e.position.y, 'position')
    // pickPosition.x = (e.position.x / (window.screen.width * window.devicePixelRatio)) * 2 - 1;
    // pickPosition.y = (e.position.y / (window.screen.height * window.devicePixelRatio)) * -2 + 1;  // note we flip Y

    let width = this.third.renderer.domElement.clientWidth;
    let height = this.third.renderer.domElement.clientHeight;
    
    pickPosition.x = (e.clientX / (width)) * 2 - 1;
    pickPosition.y = (e.clientY / (height)) * -2 + 1;  // note we flip Y

    raycaster.setFromCamera(pickPosition, this.third.camera);
    // console.log(this.third.scene.children);
    const intersectedObjects = raycaster.intersectObjects(this.third.scene.children);

    if (intersectedObjects.length) {

      this.pickedObject = intersectedObjects[0].object;
      let v = 0;

      this.pictPosition.x = this.pickedObject.position.x;
      this.pictPosition.y = this.pickedObject.position.y;
      this.boxImg.forEach( (boxInPic) => {
          // console.log(boxInPic.id)
          if (boxInPic.position.x === this.pictPosition.x && boxInPic.position.y === this.pictPosition.y) {
              this.boxName = boxInPic.name;
              // console.log(this.boxName);
              if (this.boxName === 'this.boxStars') {
                boxInPic.traverse(  (child) => {
                 if ( child instanceof THREE.Mesh ) {
                      this.copyMaterial = child.material.color.clone();
                      // child.material.color.setHex(0xb1effe, 0)

                     }
                 });

                // this.input.mouse.requestPointerLock();
              } else {
                this.movePosition = '';
                this.pictPosition = '';
              }
              this.indexs = v;
              // console.log(this.indexs)
          }
          v += 1;
      });
      this.movePosition = undefined;
      this.pickedObject = '';
      // console.log('bobo: ', this.indexs);

    }
  }
  }

  checkWin() {
      this.boxImg.forEach( (boxInPic) => {

            if (boxInPic.name === 'this.boxStars') {
                // console.log(boxInPic.name)
                this.arrayBoxX.push(boxInPic.position.x);
                this.arrayBoxY.push(boxInPic.position.y);
                this.countStar = this.countStar + 1;
                  // console.log(this.countStar);
                 if (this.countStar === 3) {
                   this.checkPos(this.arrayBoxX, this.arrayBoxY);
                   this.countStar = 0;
                   this.arrayBoxX = [];
                   this.arrayBoxY = [];
                 }
            }
      });

  }

  checkPos(arrayBoxXs, arrayBoxYs) {

                // console.log(this.checkIfDuplicateExistsX(arrayBoxXs))
                // console.log(this.checkIfDuplicateExistsX(arrayBoxYs))
            if (this.checkIfDuplicateExistsX(arrayBoxXs) === true || this.checkIfDuplicateExistsY(arrayBoxYs)  === true  ) {
              // console.log(arrayBoxXs)
              // console.log(arrayBoxYs)

                 
                //  setTimeout(() => {
                  this.layoutAll.clearStorage();
                  return this.layoutAll.changeScene(this, 'WINPAGE', 'LVLSPAGE', 'LVLSPAGE', 'lvl1');
                // }, 5000);
            }

  }

  checkIfDuplicateExistsX(a) {
     let counts = [];
     let props = 0;
     for(let i =0; i < a.length; i++){
         if (counts[a[i]]){
         counts[a[i]] += 1;
         } else {
         counts[a[i]] = 1;
         }
        }
        for (let prop in counts){
            if (counts[prop] > 2){
                props = +prop;
                // console.log(prop + " counted: " + counts[prop] + " times.")
            }
        }
      // console.log(counts[props], props)
    return counts[props] === this.countStar;
  }

  checkIfDuplicateExistsY(a) {
    let counts = [];
    let props = 0;
    for(let i =0; i < a.length; i++){
        if (counts[a[i]]){
        counts[a[i]] += 1;
        } else {
        counts[a[i]] = 1;
        }
       }
       for (let prop in counts){
           if (counts[prop] > 2){
               props = +prop;
               // console.log(prop + " counted: " + counts[prop] + " times.")
           }
       }
     // console.log(counts[props], props)
   return counts[props] === this.countStar;
  }

}

// export default Lvl1Page;