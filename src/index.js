import * as PIXI from 'pixi.js';
import {Tank} from './game';

const tankImageSrc = require('./assets/tank.png');
const ammoImageSrc = require('./assets/carrot.png');

const sceneSize = {
  width: 20,
  height: 20
} 

// Creation app, adding view to dom
const app = new PIXI.Application(sceneSize.width * 40, sceneSize.height * 40, {backgroundColor : 0x123456});
const {stage} = app;
document.body.appendChild(app.view);

// create a new Sprite from an image path
const tankFixture = PIXI.Sprite.fromImage(tankImageSrc);
const ammoTexture = PIXI.Sprite.fromImage(ammoImageSrc);

const bullets = [];

// set tank size
tankFixture.height = 68;
tankFixture.width = 50;
// center the sprite's anchor point
tankFixture.anchor.set(0.5);

// move the sprite to the center of the screen
tankFixture.x = app.screen.width / 2;
tankFixture.y = app.screen.height / 2;

// add tank to stage
stage.addChild(tankFixture);
stage.interactive = true;


function shoot(rotation, startPosition) {
  const {x,y} = startPosition;

  ammoTexture.position.x = x;
  ammoTexture.position.y = y;
  ammoTexture.rotation = rotation;
  
  stage.addChild(ammoTexture);
  bullets.push(ammoTexture);
}

// function animate() {
//   requestAnimationFrame(animate);
// }

// add listeners to stage;
stage.on("mousedown", (event) => {
	console.log('​event', event)
  
  // shoot(tankFixture.rotation, {
  //   x: tankFixture.position.x+Math.cos(tankFixture.rotation)*20,
  //   y: tankFixture.position.y+Math.sin(tankFixture.rotation)*20
  // });
})

const myTank = new Tank('green', 30, 100);
myTank.setCoordinate({x: 3, y:3})
