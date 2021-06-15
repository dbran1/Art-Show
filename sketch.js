let sNum = 0;
let p1s = false;
let p1p = false;
let p1g = false;
let p2p = false;
let p2s = false;
let p2g = false;
let p1score = 0;
let p2score = 0;
let p;
//Mostly images and objects
function setup() {
  createCanvas(400, 400);
  arrows = loadImage("arrows.png");
  punch = loadImage("punch.jpeg");
  shield = loadImage("shield.png");
  grab = loadImage("grab.jpeg");
  p = new Player1(arrows, punch, shield, grab);
  p2 = new Player2(arrows, punch, shield, grab);
  r = new Result(" ","P1 Wins!","P2 Wins!","Tie!");
}
//Keys that allow you to pick
function keyPressed() {
  if (key == "z") {
    p1p = true;
    p.update(1);
    p.throw = true;
  }
  if (key == "x") {
    p1s = true;
    p.update(2);
    p.throw = true;
  }
  if (key == "c") {
    p1g = true;
    p.update(3);
    p.throw = true;
  }
  if (key == "p") {
    p2p = true;
    p2.update(1);
    p2.throw = true;
  }
  if (key == "i") {
    p2s = true;
    p2.update(2);
    p2.throw = true;
  }
  if (key == "o") {
    p2g = true;
    p2.update(3);
    p2.throw = true;
  }
  if (!p.throw) {
    p.update(0);
    p.show();
  }
  if (!p2.throw) {
    p2.update(0);
    p2.show();
  }
}
//Scene selection
function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum % 4 === 0) {
    start();
  } else if (sNum % 4 === 1) {
    game();
  } else if (sNum % 4 === 2) {
    pause();
  } else if (sNum % 4 === 3) {
    controls();
  }
}

function start() {
  textSize(50);
  fill("red");
  background("white");
  background(arrows);
  text("P", 230, 50);
  fill("green");
  text("G", 30, 235);
  fill("blue");
  text("B", 300, 330);
  fill("black");
  textSize(25);
  text("Click anywhere to play!", 90, 200);
}
function game() {
  background("white");
  image(punch, 20, 20, 75, 75);
  image(punch, 300, 20, 75, 75);
  image(shield, 20, 175, 75, 75);
  image(shield, 300, 175, 75, 75);
  image(grab, 20, 325, 75, 75);
  image(grab, 300, 325, 75, 75);
  fill("white");
  ellipse(130, 200, 50, 50);
  ellipse(200, 200, 75, 75);
  ellipse(270, 200, 50, 50);
  //All outcomes
 if (p1p == true && p2p == true) {
    fill("black");
    r.show();
    r.update(3);
    p.show();
    p2.show();
  }
  else if (p1p == true && p2s == true) {
    fill("black");
    r.show();
    r.update(2);
    p.show();
    p2.show();
  }
 else if (p1p == true && p2g == true) {
    fill("black");
    r.show();
    r.update(1)
    p.show();
    p2.show();
  }
  else if (p1s == true && p2p == true) {
    fill("black");
    r.show();
    r.update(1);
    p.show();
    p2.show();
  }
 else if (p1s == true && p2s == true) {
    fill("black");
    r.show();
    r.update(3);
    p.show();
    p2.show();
  }
 else if (p1s == true && p2g == true) {
    fill("black");
    r.show();
    r.update(2);
    p.show();
    p2.show();
  }
  else if (p1g == true && p2p == true){
    fill("black")
      r.show();
      r.update(2);
    p.show();
    p2.show();
  }
 else if (p1g == true && p2s == true){
    fill("black")
    r.show();
    r.update(1);
    p.show();
    p2.show();
  }
  else if (p1g == true && p2g == true){
    fill("black")
    r.show();
    r.update(3);
    p.show();
    p2.show();
  }
}
function pause() {
  background("green");
  fill("red");
  text("Game Paused", 100, 50);
  fill("black");
  rect(100, 150, 50, 150);
  rect(200, 150, 50, 150);
}
function controls() {
  background("yellow");
  textSize(20);
  text("P1: Z = Punch X = Block C = Grab", 20, 200);
  text("P2: P = Punch I = Block O = Grab", 20, 300);
  text("You must restart the game to play again.", 20, 350);
}
