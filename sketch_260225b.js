function setup() {
  createCanvas (500, 500);
  background(200);
}


function draw() {
  noStroke();



  fill(150);//ears
  ellipse (width/2 - 50, height/3, 50, 150);
  ellipse (width/2 + 50, height/3, 50, 150);

  fill(255, 204, 250); //pink ear
  ellipse (width/2 - 50, height/3, 10, 100);
  ellipse (width/2 + 50, height/3, 10, 100);

  fill(150);//circle head
  circle(width/2, height/2, 200);

  fill(255);//eyepatch + frown
  stroke(0);
  strokeWeight(5);
  line(120, 80, 340, 300);

  noFill();
  arc(250, 305, 60, 60, 1, PI);


  fill(180);//eyes
  circle(width/2 - 50, height/2 + 10, 50);
  fill(0);
  circle(width/2 + 50, height/2 + 10, 50);
}
