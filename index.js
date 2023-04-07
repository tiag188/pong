let xBoll = 400;
let yBoll = 200;
let diameter = 22;
let bgSize = 800;

let bg  = {
  w: 800,
  h: 400
}

let boll = {
  position: {
    x: xBoll,
    y: yBoll,
    d: diameter,
    raio: diameter / 2,
  },
  speed: {
    y: 6,
    x: 6,
  }
}

const bollMoveX = () => {
  boll.position.x += boll.speed.x;
}

const bollMoveY = () => {
  boll.position.y += boll.speed.y;
}

function setup() {
  createCanvas(bg.w, bg.h);
}

function draw() {
  background(0);
  showBoll();
  bollMoveX();
  bollMoveY();
  checkcollisionBoardBoll();
}

function showBoll() {
   circle(boll.position.x, boll.position.y, boll.position.d);
}

function checkcollisionBoardBoll(){
    if(boll.position.x + boll.position.raio > bg.w || boll.position.x - boll.position.raio < 0) {
    boll.speed.x *= -1;
  }
  
  if(boll.position.y + boll.position.raio > bg.h || boll.position.y - boll.position.raio < 0 ){
    boll.speed.y *= -1;
  }
}


