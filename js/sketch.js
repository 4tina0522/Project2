let canvas;
let table;
let selectMenu;
let date;

let dateArray = [];
let titleArray = [];
let colorArray = [];
let voiceArray = [];
let objectArray = [];
let activityArray = [];
let commentsArray = [];

function preload(){
  table = loadTable('csv/personalData.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(0);
  imageMode(CENTER);
  textAlign(CENTER);

  selectMenu = createSelect();

  for(let i = 0; i < table.getRowCount(); i++){

    date = table.getString(i, 'date');
    selectMenu.option(date);

    dateArray.push(table.getString(i, 'date'));

    titleArray.push(table.getString(i, 'title'));

    colorArray.push(table.getString(i, 'color'));

    voiceArray.push(table.getString(i, 'voice'));

    objectArray.push(table.getString(i, 'object'));

    activityArray.push(table.getString(i, 'activity'));

    commentsArray.push(table.getString(i, 'comments'));
  }
    selectMenu.changed(dateInteraction);
}

function dateInteraction(){
  background(0);
  fill(255);
  for(let i = 0; i < table.getRowCount(); i++){
    if(selectMenu.value() == dateArray[i]){
      text(dateArray[i], windowWidth/2, 50);
      text(titleArray[i], windowWidth/2, 70);
      text(colorArray[i], windowWidth/2, 90);
      text(voiceArray[i], windowWidth/2, 110);
      text(objectArray[i], windowWidth/2, 130);
      text(activityArray[i], windowWidth/2, 150);
      text(commentsArray[i], windowWidth/2, 170);
    }
}
}


function draw(){
}
