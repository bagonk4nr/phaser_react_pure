/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class OnOffSound {
  

  constructor (parent) {
    this.scene = parent;

  }

  playOnOff(data) {
    console.log(data, 'playonoff');
    if (data !== null) {
      if (this.scene.layoutAll.soundOnOffVal === 1) {
        if (this.scene.sound.get(data) === null) this.scene.sound.play(data);
        else this.scene.sound.get(data).play(); // this.scene.layoutAll.configSound;
      } else if (this.scene.layoutAll.soundOnOffVal === 0) {
        if (this.scene.sound.get(data) !== null) this.scene.sound.get(data).pause(); 
      }
    }
    
  }

  iconSoundTopBar(x, y, data) {
    if (this.scene.layoutAll.soundOnOffVal === 1 || this.scene.musicOn === 1) {
      this.scene.sound.get(data).play();
      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
      this.scene.iconSoundOn.visible = true;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
      this.scene.iconSoundOff.visible = false;
      this.scene.iconSoundOn.scale = 0.025;
      this.scene.iconSoundOn.clearTint();
      // this.scene.textOff = this.scene.layoutAll.soundTextOff;
      // this.scene.textOff.visible = false;
      // this.scene.textOn = this.scene.layoutAll.soundTextOn;
      // this.scene.textOn.visible = true;
      
      this.scene.iconSoundOn.on('pointerdown', () => { 
        this.scene.musicOn = this.scene.layoutAll.soundOnOffVal;
        this.scene.layoutAll.onSoundOff();
        this.scene.iconSoundOn.clearTint();
      }, this.scene);
      this.scene.iconSoundOn.on('pointerover', () => {this.scene.iconSoundOn.setTint(0xc0c0c0);}, this.scene);
      this.scene.iconSoundOn.on('pointerout', () => {this.scene.iconSoundOn.clearTint();}, this.scene);

    } else if (this.scene.musicOn === 0 || this.scene.layoutAll.soundOnOffVal === 0 ) {
      this.scene.sound.get(data).pause();
      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
      this.scene.iconSoundOn.visible = false;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
      this.scene.iconSoundOff.visible = true;
      this.scene.iconSoundOff.clearTint();
      this.scene.iconSoundOff.scale = 0.025;
      // this.scene.textOn = this.scene.layoutAll.soundTextOn;
      // this.scene.textOn.visible = false;
      // this.scene.textOff = this.scene.layoutAll.soundTextOff;
      // this.scene.textOff.visible = true;
      
      this.scene.iconSoundOff.on('pointerdown', () => { 
        this.scene.musicOn = this.scene.layoutAll.soundOnOffVal;
        this.scene.layoutAll.onSoundOff();
        this.scene.iconSoundOff.clearTint();
        // this.scene.textOff.visible = false;
      }, this.scene);
      this.scene.iconSoundOff.on('pointerover', () => {this.scene.iconSoundOff.setTint(0xc0c0c0);}, this.scene);
      this.scene.iconSoundOff.on('pointerout', () => {this.scene.iconSoundOff.clearTint();}, this.scene);
    }
  }

  iconSoundOffOnTopBar(x, y, data) {
    if (this.scene.musicOn !== undefined) {

      if (this.scene.musicOn === 1) {
        if (this.scene.sound.get(data) === null) this.scene.sound.play(data);
        else this.scene.sound.get(data).play();
        this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
        this.scene.iconSoundOn.visible = true;
        this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
        this.scene.iconSoundOff.visible = false;
        this.scene.iconSoundOn.scale = 0.05;
        this.scene.iconSoundOn.clearTint();
        // this.scene.textOff = this.scene.layoutAll.soundTextOff;
        // this.scene.textOff.visible = false;
        // this.scene.textOn = this.scene.layoutAll.soundTextOn;
        // this.scene.textOn.visible = true;
        
        this.scene.iconSoundOn.on('pointerdown', () => { 
          this.scene.musicOn = this.scene.layoutAll.soundOnOffVal;
          this.scene.layoutAll.onSoundOff();
          this.scene.iconSoundOn.clearTint();
        }, this.scene);
        this.scene.iconSoundOn.on('pointerover', () => {this.scene.iconSoundOn.setTint(0xc0c0c0);}, this.scene);
        this.scene.iconSoundOn.on('pointerout', () => {this.scene.iconSoundOn.clearTint();}, this.scene);

      } else if (this.scene.musicOn === 0) {

        this.scene.sound.get(data).pause();
      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
      this.scene.iconSoundOn.visible = false;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
      this.scene.iconSoundOff.visible = true;
      this.scene.iconSoundOff.clearTint();
      this.scene.iconSoundOff.scale = 0.05;
      // this.scene.textOn = this.scene.layoutAll.soundTextOn;
      // this.scene.textOn.visible = false;
      // this.scene.textOff = this.scene.layoutAll.soundTextOff;
      // this.scene.textOff.visible = true;
      
      this.scene.iconSoundOff.on('pointerdown', () => { 
        this.scene.musicOn = this.scene.layoutAll.soundOnOffVal;
        this.scene.layoutAll.onSoundOff();
        this.scene.iconSoundOff.clearTint();
        // this.scene.textOff.visible = false;
      }, this.scene);
      this.scene.iconSoundOff.on('pointerover', () => {this.scene.iconSoundOff.setTint(0xc0c0c0);}, this.scene);
      this.scene.iconSoundOff.on('pointerout', () => {this.scene.iconSoundOff.clearTint();}, this.scene);
      }
    }
  }

  iconSoundSetting (x, y, data) {
    // console.log(this.scene.layoutAll.soundOnOffVal, ' uyee');
    if (this.scene.layoutAll.soundOnOffVal === 1 || this.scene.musicOn === 1) {

      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
      this.scene.iconSoundOn.visible = true;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
      this.scene.iconSoundOff.visible = false;
      this.scene.iconSoundOn.scale = 0.15;
      this.scene.iconSoundOn.clearTint();
      // this.scene.textOn = this.scene.layoutAll.soundTextOn;
      this.scene.textOn.visible = true;
      // this.scene.textOff = this.scene.layoutAll.soundTextOff;
      this.scene.textOff.visible = false;
      
      this.scene.iconSoundOn.on('pointerdown', () => { 
        this.scene.musicOn = this.scene.layoutAll.soundOnOffVal;
        this.scene.layoutAll.onSoundOff();
        this.scene.iconSoundOn.clearTint();
        this.scene.textOn.visible = false;
      }, this.scene);
      this.scene.iconSoundOn.on('pointerover', () => {this.scene.iconSoundOn.setTint(0xc0c0c0);}, this.scene);
      this.scene.iconSoundOn.on('pointerout', () => {this.scene.iconSoundOn.clearTint();}, this.scene);

    } else if ( this.scene.layoutAll.soundOnOffVal === 0 ) {

      this.scene.sound.get(data).pause();
      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
      this.scene.iconSoundOn.visible = false;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
      this.scene.iconSoundOff.visible = true;
      this.scene.iconSoundOff.clearTint();
      this.scene.iconSoundOff.scale = 0.15;
      // this.scene.textOn = this.scene.layoutAll.soundTextOn;
      
      this.scene.textOn.visible = false;
      // this.scene.textOff = this.scene.layoutAll.soundTextOff;
      this.scene.textOff.visible = true;
      
      this.scene.iconSoundOff.on('pointerdown', () => { 
        this.scene.musicOn = this.scene.layoutAll.soundOnOffVal;
        this.scene.layoutAll.onSoundOff();
        this.scene.iconSoundOff.clearTint();
        this.scene.textOff.visible = false;
      }, this.scene);
      this.scene.iconSoundOff.on('pointerover', () => {this.scene.iconSoundOff.setTint(0xc0c0c0);}, this.scene);
      this.scene.iconSoundOff.on('pointerout', () => {this.scene.iconSoundOff.clearTint();}, this.scene);
    }
  }

  iconSoundOffOn(x, y, data) {
    if (this.scene.musicOn !== undefined && data !== null) {

      if (this.scene.musicOn === 1) {

        // this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y);
        // this.scene.iconSoundOff.visible = false;
        // this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y);
        // this.scene.iconSoundOn.visible = true;
        // this.scene.iconSound.setTint(0xc0c0c0)
        // this.scene.iconSoundOn.scale = 0.55;
        // this.scene.textOn.visible = true;
        // this.scene.textOff.visible = false;
        if (this.scene.sound.get(data) !== null) this.scene.sound.get(data).play();
        this.scene.musicOn = undefined;

      } else if (this.scene.musicOn === 0) {

        // this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
        // this.scene.iconSoundOn.visible = false;
        // this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
        // this.scene.iconSoundOff.visible = true;
        // this.iconSound.clearTint()
        // this.scene.iconSoundOff.scale = 0.55;
        // this.scene.textOff.visible = true;
        this.scene.textOn.visible = false;
        if (this.scene.sound.get(data) !== null) this.scene.sound.get(data).pause();
        this.scene.musicOn = undefined;
      }
    }
  }

  onSoundOff() {
    console.log(this.scene.layoutAll.soundOnOffVal, this.scene.musicOn, ' onsoundoff');
    
    if (this.scene.layoutAll.soundOnOffVal === 0 || this.scene.musicOn === 0) {
        this.scene.layoutAll.soundOnOff = 1;
        this.scene.musicOn = 1;

    } else if(this.scene.layoutAll.soundOnOffVal === 1 || this.scene.musicOn === 1) {
        this.scene.layoutAll.soundOnOff = 0;
        this.scene.musicOn = 0;

    }
  }

}

export default OnOffSound;