export class Tank {
  constructor(color,fuel, ammo) {
    this.color = color;
    this.fuel  = fuel;
    this.ammo  = ammo;
    this.coordinateX  = 0;
    this.coordinateY  = 0;
    this.strength = 100;
  }

  go(direction) {
    if (this.fuel === 0) return;

    const {x, y} = direction;
    this.coordinateX = x;
    this.coordinateY = y;
    this.fuel -= 1;
  }
  
  fire() {
    if(this.ammo === 0) return;

    this.ammo -= 1;
  }
  
  setCoordinate(position) {
    const {x, y} = position;
    this.coordinateX = x;
    this.coordinateY = y;
  }
}

export class Ceil {
  constructor() {
    this.type = {
      road: '',
      offroad: '',
      notaccessible: '',
      'хPosition': '',
      'yPosition': ''
    }
  }
}

