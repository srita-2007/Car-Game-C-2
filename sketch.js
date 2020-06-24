var canvas, backgroundImage;
var gameState, playerCount;
var database;
var form, player;

gameState= 0;
function setup() {
  canvas = createCanvas(500,500);
  database = firebase.database();
  form = new Form();
}

function draw() {
  background("white");
  form.display();
}