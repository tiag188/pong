let xBoll = 400;
let yBoll = 200;
let diameter = 22;
let bgSize = 800;
let bollSpeed = 4;



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
    y: bollSpeed,
    x: bollSpeed,
  }
}

let racket = {
  player: {
    position: {
        x: 5,
        y: 150
    },
    size: {
        w: 10,
        h: 90
    }
  },
  cpu: {
    position: {
        x: 785,
        y: 150
    },
    size: {
        w: 10,
        h: 90
    }
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

function showRackets() {
    rect(racket.player.position.x, racket.player.position.y, racket.player.size.w, racket.player.size.h);
    rect(racket.cpu.position.x, racket.cpu.position.y, racket.cpu.size.w, racket.cpu.size.h);
}

function draw() {
  background(0);
  showBoll();
  bollMoveX();
  bollMoveY();
  checkcollisionBoardBoll();
  showRackets();
  moveRacketPlayer();
  checkCollisionRacketInBoll()
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

function moveRacketPlayer() {
    if (keyIsDown(UP_ARROW)) {
        racket.player.position.y -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        racket.player.position.y += 10;
    }
}

function moveRacketCPU() {
    if (keyIsDown(UP_ARROW)) {
        racket.player.position.y -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        racket.player.position.y += 10;
    }
}

function checkCollisionRacketInBoll() {
    if (boll.position.x - boll.position.raio < racket.player.position.x + racket.player.size.w
       && boll.position.y - boll.position.raio < racket.player.position.y + racket.player.size.h
       && boll.position.y + boll.position.raio > racket.player.position.y) {
        boll.speed.x *= -1;
    }
}
