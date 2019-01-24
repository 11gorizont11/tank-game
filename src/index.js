import * as PIXI from 'pixi.js';
import {Tank} from './game';

const tankImageSrc = require('./assets/tank.png');

const sceneSize = {
  width: 20,
  height: 20
} 

const app = new PIXI.Application(sceneSize.width * 40, sceneSize.height * 40, {backgroundColor : 0x123456});
document.body.appendChild(app.view);

// create a new Sprite from an image path
const tank = PIXI.Sprite.fromImage(tankImageSrc);

// center the sprite's anchor point
tank.anchor.set(0.5);

// move the sprite to the center of the screen
tank.height = 68;
tank.width = 50;
tank.x = app.screen.width / 2;
tank.y = app.screen.height / 2;

app.stage.addChild(tank);

// Listen for animate update
// app.ticker.add(function(delta) {
//     // just for fun, let's rotate mr rabbit a little
//     // delta is 1 if running at 100% performance
//     // creates frame-independent transformation
//     tank.rotation += 0.1 * delta;
// });


const myTank = new Tank('green', 30, 100);
myTank.setCoordinate({x: 3, y:3})
console.log('​myTank', myTank);