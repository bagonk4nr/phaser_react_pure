/*eslint-disable no-unused-expressions*/
/*eslint-disable no-undef*/

class LayoutSettings {

  constructor(parent) {
    this.posScreen= [];
    this.posX;
    this.posY;
    this.rowCol;
    this.colRow = [];
    this.scene = parent;
  }

  loadImgBg() {
    return this.scene.third.load.preload('background', '/assets/img/bg/bgsettings.png');
  }

  loadBackBtn() {
    return this.scene.load.image('backbutton', '/assets/img/bg/back.png');
  }

  buttonBack() {
    return this.scene.add.sprite((window.screen.width * window.devicePixelRatio) - 80, (window.screen.height * window.devicePixelRatio ) - 115, 'backbutton').setInteractive({ useHandCursor: true  });
  }

  screen() {
    return this.posScreen;
  }

  centerOfScreen(data) {

    this.rowCol = this.numrow(data);
    // console.log(this.rowCol);
    this.posX = 0;
    this.posY = window.innerHeight / 18;

    for (let b = 0; b < data; b++) {

      for (let i = 0; i < this.rowCol.row; i++) {

        if (Number.isInteger(b / this.rowCol.col) === true) {

          this.posY += 110;
          this.posX = window.innerWidth / 7;
        }


        for (let a = 0; a < this.rowCol.col; a++) {


          if (Number.isInteger(a / this.rowCol.col) === true) this.posX += 150;
          // console.log('x : ' + this.posX);
          this.posScreen[b] = '{"x":' + this.posX + ', "y":' + this.posY + '}';

        }

      }

    }
    // console.log(JSON.parse(JSON.stringify(this.posScreen)));


  }

  numrow(number) {
    let baris = 0;
    let a = 1;
    let column = 0;
    for (a = 1; a <= number; a++) {

      if (Math.floor(number / a) >= a) {

        baris = a;
        column = (number / a);

      } continue;

    }

    this.colRow['row'] = baris;
    this.colRow['col'] = column;

    return this.colRow;
  }

}

export default LayoutSettings;