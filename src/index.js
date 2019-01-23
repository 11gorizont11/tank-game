import * as PIXI from 'pixi.js';

const tankImageSrc = require('./assets/tank.png');

var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x123456});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var tank = PIXI.Sprite.fromImage(tankImageSrc);

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
