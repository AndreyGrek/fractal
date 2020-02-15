function $(el){
  return document.querySelector(el)
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;

//work place________________________________


function createCircleManager(){
  const circle = {a: {x: 300, y: 100}}

  return {
    printX: function(){
      return circle.x
    },
    printY: function(){
      return circle.y
    },
    print: function(){
      return circle
    },
    addX: function(x){
      circle.x = x
    },
    addY: function(y){
      circle.y = y
    }
  }
}

const manager = createCircleManager()

$("#x").addEventListener("input", function(){
  manager.addX(parseInt(this.value));
  console.log(manager.print());
})

$("#y").addEventListener("input", function(){
  manager.addY(parseInt(this.value))
})



//work place________________________________

let mainDots = {
  a: {x: 300, y: 100}, 
  b: {x: 100, y: 500}, 
  c: {x: 500, y: 500}, 
  d: {x: 300, y: 350}, 
}

let initialX = mainDots.a.x;
let initialY = mainDots.a.y;

ctx.fillRect(initialX, initialY, 1, 1);

let countDots = 0;

function textCount(){
  $("#count").innerHTML = `Точек: ${countDots}`;
}

function circle(x, y){
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI, true);
  ctx.fill();
}
circle(mainDots.a.x, mainDots.a.y);
circle(mainDots.b.x, mainDots.b.y);
circle(mainDots.c.x, mainDots.c.y);
circle(mainDots.d.x, mainDots.d.y);

function dot(x, y){
  ctx.fillRect(x, y, 1, 1);
}

function game(){
  let shot = Math.floor(Math.random() * 4);

  function Other(){
    dot(initialX, initialY);
    countDots += 1;
    textCount();
  }

  if(shot == 0){
    initialX = Math.floor((initialX + mainDots.a.x) / 2);
    initialY = Math.floor((initialY + mainDots.a.y) / 2);
    Other()
  } else if(shot == 1){
    initialX = Math.floor((initialX + mainDots.b.x) / 2);
    initialY = Math.floor((initialY + mainDots.b.y) / 2);
    Other()
  } else if(shot == 2){
    initialX = Math.floor((initialX + mainDots.c.x) / 2);
    initialY = Math.floor((initialY + mainDots.c.y) / 2);
    Other()
  } else if(shot == 3){
    initialX = Math.floor((initialX + mainDots.d.x) / 2);
    initialY = Math.floor((initialY + mainDots.d.y) / 2);
    Other()
  } 
}

let startToggle;


$("#start").addEventListener("click", function() {
  startToggle = setInterval(() => game(), 1);
  // for(let i = 0; i < 1000; i++){
  //   startToggle = setInterval(() => game(), 1);
  // }
  this.classList.add("off");
  $("#stop").classList.remove("off");


});
$("#stop").addEventListener("click", function() {
  clearInterval(startToggle, 1);
  this.classList.add("off");
  $("#start").classList.remove("off");
});

  

