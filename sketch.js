let circleX = 868;
let circleY = 300;
let R = 0;
let G = 100;
let B = 200;
let allarm = "KEEP THE CIRCLE INSIDE THE CANVAS";
let Alpha = 255;
let Alpha2 = 0;
let Frase =
  " PRESS A,W,S,D TO ADJUST THE COMPOSITION, DRAG THE MOUSE AND CHOOSE YOUR FAVOURITE COLOUR";
let Frase2 = " PRESS X ON THE KEYBOARD TO START ";

function setup() {
  createCanvas(1000, 800);

  angleMode(DEGREES);
  textAlign(CENTER);
}

function keyPressed() {
  if (key === "d") {
    circleX = circleX + 10;
  }
  if (key === "a") {
    circleX = circleX - 10;
  }
  if (key === "w") {
    circleY = circleY - 10;
  }
  if (key === "s") {
    circleY = circleY + 10;
  }
  if (key === "x") {
    Alpha = 0;
  }
}
x;
function mouseDragged() {
  R = R + 2;
  G = G + 2;
  B = B + 2;
  if (R > 255) {
    R = 0;
  }
  if (G > 255) {
    G = 0;
  }
  if (B > 255) {
    B = 0;
  }
}

function draw() {
  background(90, 90, 204);

  // cerchio
  noStroke();
  fill(R, G, 200);
  circle(200, 200, 250);
  fill(126, 180, 255);
  circle(circleX, circleY, 100);

  //ellissi
  push();
  fill(237, 244, 108);
  translate(500, 100);
  rotate(-30);
  ellipse(0, 0, 300, 100);
  pop();

  push();
  fill(237, 244, 108);
  translate(435, 265);
  rotate(-45);
  ellipse(0, 0, 200, 75);
  pop();

  push();
  fill(237, 244, 108);
  translate(330, 400);
  rotate(150);
  ellipse(0, 0, 70, 45);
  pop();

  //quadrati
  push();
  fill(255, 46, 46);
  translate(750, 620);
  rotate(150);
  rect(0, 0, 100);
  pop();

  push();
  fill(255, 46, 46);
  translate(850, 645);
  rotate(150);
  rect(0, 0, 75);
  pop();

  push();
  fill(255, 46, 46);
  translate(918, 665);
  rotate(150);
  rect(0, 0, 50);
  pop();

  //abstract
  fill(0);
  beginShape();
  curveVertex(77, 605);
  curveVertex(77, 605);
  curveVertex(173, 699);
  curveVertex(224, 629);
  curveVertex(377, 697);
  curveVertex(482, 681);
  curveVertex(457, 513);
  curveVertex(589, 495);
  curveVertex(561, 390);
  curveVertex(698, 316);
  curveVertex(755, 417);
  curveVertex(801, 317);
  curveVertex(878, 340);
  curveVertex(854, 250);
  curveVertex(902, 187);
  curveVertex(827, 174);
  curveVertex(804, 68);
  curveVertex(746, 140);
  curveVertex(675, 83);
  curveVertex(667, 168);
  curveVertex(566, 168);
  curveVertex(654, 253);
  curveVertex(487, 290);
  curveVertex(533, 388);
  curveVertex(458, 406);
  curveVertex(466, 489);
  curveVertex(412, 473);
  curveVertex(300, 607);
  curveVertex(259, 546);
  curveVertex(223, 605);
  curveVertex(172, 547);
  curveVertex(133, 612);
  curveVertex(77, 605);
  curveVertex(77, 605);
  endShape();

  // linea abstract
  fill(255, 168, 43);
  beginShape();
  curveVertex(99, 732);
  curveVertex(99, 732);
  curveVertex(255, 755);
  curveVertex(422, 657);
  curveVertex(603, 556);
  curveVertex(760, 497);
  curveVertex(714, 481);
  curveVertex(601, 523);
  curveVertex(466, 598);
  curveVertex(409, 596);
  curveVertex(350, 674);
  curveVertex(208, 743);
  curveVertex(99, 732);
  curveVertex(99, 732);
  endShape();
  // TESTO iniziale
  fill(0, 0, 255, Alpha);
  rect(0, 0, 1000, 800);
  textSize(50);
  fill(255, 255, 255, Alpha);
  textFont("Archivo");
  text(Frase, 100, 100, 800, 600);

  textSize(30);
  fill(255, 255, 255, Alpha);
  textFont("Archivo");
  text(Frase2, 100, 700, 800, 600);

  if (circleX > 950) {
    Alpha2 = 255;
  }
  if (circleX < 50) {
    Alpha2 = 255;
  }
  if (circleY > 750) {
    Alpha2 = 255;
  }
  if (circleY < 50) {
    Alpha2 = 255;
  }

  //TESTO errore
  fill(0, 0, 255, Alpha2);
  rect(0, 0, 1000, 800);

  textSize(50);
  fill(255, 255, 255, Alpha2);
  textFont("Archivo");
  text(allarm, 100, 100, 800, 600);

  textSize(30);
  fill(255, 255, 255, Alpha2);
  textFont("Archivo");
  text("PLEASE,REFRESH THE PAGE ;(", 100, 700, 800, 600);
}

