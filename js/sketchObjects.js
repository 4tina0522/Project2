let canvas;
let table;

let date;
let title;
let color;
let voice;
let object;
let activity;
let comments;

let s = 'During the 14 days, I used the sleeping monitor to collect my sleeping data and there are something interesting happening in my dream.';

let dreamData = [];

function preload(){
  table = loadTable('csv/personalData.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(244, 230, 186);
for (var x = 0; x < width; x += width / 50) {
  for (var y = 0; y < height; y += height / 30) {
    stroke(125, 165, 188);
    strokeWeight(1);
    line(x, 0, x, height);
    line(0, y, width, y);
  }
}
  imageMode(CENTER);
  textAlign(CENTER);

  for(let i = 0; i < table.getRowCount(); i++){

    date = table.getString(i, 'date');


    title = table.getString(i, 'title');

    color = table.getString(i, 'color');

    voice = table.getString(i, 'voice');

    object = table.getString(i, 'object');

    activity = table.getString(i, 'activity');

    comments = table.getString(i, 'comments');

    dreamData.push(new DreamData(date, title, color, voice, object, activity, comments));
  }
  for (let i = 0; i < dreamData.length; i++){
    dreamData[i].show();
  }
  //top banner rectangle
  //big rectangle
  fill(122,201,67);
  rect(306, 87, 835, 135);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(287, 70, 835, 130);

  //small rectangle
  noStroke();
  fill(0, 169, 157);
  rect(432, 63, 300, 50);
  stroke(0);
  strokeWeight(1.5);
  fill(255, 161, 204);
  rect(432, 50, 289, 50);

  //smily face
  fill(241, 90, 36);
  rect(287, 70, 145, 130);
  fill(249, 180, 88);
  circle(360, 135, 120);

  //title text
  noStroke();
  fill(255);
  textSize(30);
  text('My Sleeping Note', 570, 85);

  //paragraph text
  noStroke()
  textAlign(LEFT);
  fill(0);
  textSize(14);
  text(s, 454, 140, 530, 200);

  //Date text
  noStroke();
  fill(0);
  textSize(18);
  text('2021.02.25 ~ 2021.03.10', 750, 94);

  //Data box
	noStroke();
	fill(255, 123, 172);
	rect(725, 259, 415, 340);
	stroke(0);
  strokeWeight(1.5);
	fill(255);
	rect(719, 259, 400, 326);

  //illustration
	noStroke();
	fill(0, 113, 188);
	rect(310, 273, 326, 326);
	stroke(0);
  strokeWeight(1.5);
	fill(255);
	rect(294, 259, 326, 326);

}


class DreamData{
  constructor(date, title, color, voice, object, activity, comments){
    this.date = date;
    this.title = title;
    this.color = color;
    this.voice = voice;
    this.object = object;
    this.activity = activity;
    this.comments = comments;

    this.button = createButton(this.date)
    for(let i = -1; i < dreamData.length; i++){
      this.button.position(1150, i*25+160);
    }
    this.button.style('z-index', '1');
  }

  show(){
    this.button.mousePressed(() => this.update())
  }

  update(){
    background(244, 230, 186);
	for (var x = 0; x < width; x += width / 50) {
		for (var y = 0; y < height; y += height / 30) {
			stroke(125, 165, 188);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
  //top banner rectangle
  //big rectangle
  fill(122,201,67);
  rect(306, 87, 835, 135);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(287, 70, 835, 130);

  //small rectangle
  noStroke();
  fill(0, 169, 157);
  rect(432, 63, 300, 50);
  stroke(0);
  strokeWeight(1.5);
  fill(255, 161, 204);
  rect(432, 50, 289, 50);

  //smily face
  fill(241, 90, 36);
  rect(287, 70, 145, 130);
  fill(249, 180, 88);
  circle(360, 135, 120);

  //title text
  noStroke();
  fill(255);
  textSize(30);
  text('My Sleeping Note', 455, 85);

  //Date text
  noStroke();
  fill(0);
  textSize(18);
  text('2021.02.25 ~ 2021.03.10', 750, 94);

  //paragraph text
  noStroke()
  textAlign(LEFT);
  fill(0);
  textSize(14);
  text(s, 454, 140, 530, 200);

  //illustration
	noStroke();
	fill(0, 113, 188);
	rect(310, 273, 326, 326);
	stroke(0);
  strokeWeight(1.5);
	fill(255);
	rect(294, 259, 326, 326);

  //Data box
  noStroke();
  fill(255, 123, 172);
  rect(725, 259, 415, 340);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(719, 259, 400, 326);

  print("update");


  //
  // //this is where you create your interface and swap out
  // //the data for each dream entry.
    // fill(0);
    // noStroke();
    // textSize(21);
    // textAlign(CENTER, CENTER);
    // text('tile: ' + this.title, windowWidth/2, 50 );
    // text('color: ' + this.color, windowWidth/2, 100)
    // text('voice: ' + this.voice, windowWidth/2, 150);
    // text('object: ' + this.object, windowWidth/2, 200);
    // text('activity: ' + this.activity, windowWidth/2, 250);
    // text('comments: ' + this.comments, windowWidth/2, 300);

  }
}





