function setup() {
  createCanvas (500, 500);
  background(50);
}


function draw() {
  noStroke();



  fill(150);//ears
  ellipse (width/2 - 50, height/3, 60, 180);
  ellipse (width/2 + 50, height/3, 60, 180);

  fill(130, 103, 103); //pink ear
  ellipse (width/2 - 50, height/3, 20, 130);
  ellipse (width/2 + 50, height/3, 20, 130);

  fill(150);//circle head
  circle(width/2, height/2, 200);

  fill(255);//eyepatch + frown
  stroke(0);
  strokeWeight(5);
  line(170, 190, 345, 280);

  noFill();
  arc(250, 300, 25, 20, 0, PI);


  fill(255, 56, 56);//eyes
  stroke(133, 13, 13);
  circle(width/2 - 48, height/2 + 8, 30);
  noStroke();
  fill(0);
  circle(width/2 + 48, height/2 + 8, 50);
}
