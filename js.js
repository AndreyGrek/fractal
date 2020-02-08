let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;

const aX = 200;
const aY = 50;
const bX = 50;
const bY = 350;
const cX = 350;
const cY = 350;

let initialX = aX;
let initialY = aY;

ctx.fillRect(initialX, initialY, 1, 1);

let countDots = 0;

function textCount(){
  document.querySelector("#count").innerHTML = `Точек: ${countDots}`;
}

function circle(x, y){
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI, true);
  ctx.fill();
}
circle(aX, aY);
circle(bX, bY);
circle(cX, cY);

function dot(x, y){
  ctx.fillRect(x, y, 1, 1);
}

function move(){
  return Math.floor(Math.random() * 4)
}

function game(){
  let shot = move();

  if(shot === 0){
    initialX = Math.floor((initialX + aX) / 2);
    initialY = Math.floor((initialY + aY) / 2);
    dot(initialX, initialY);
    countDots += 1;
    textCount();
  } if(shot === 1){
    initialX = Math.floor((initialX + bX) / 2);
    initialY = Math.floor((initialY + bY) / 2);
    dot(initialX, initialY);
    countDots += 1;
    textCount();
  } if(shot === 2){
    initialX = Math.floor((initialX + cX) / 2);
    initialY = Math.floor((initialY + cY) / 2);
    dot(initialX, initialY);
    countDots += 1;
    textCount();
  }
}

function wrap(){
  game();
}

setInterval(wrap, 1);
