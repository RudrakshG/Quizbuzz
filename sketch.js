//Creating Sprites

var back_img, q4wrong, q4wr_img;
var geniussound;
var player;
var form;
var quesarriver;
var sc25,sc25_img;
var wrongsound;
var let, let_img;
var oneinf, oneinf_img;
var during, question5, question5_image;
var question1, question1_img;
var q1op1, question3c, question3c_img;
var q1op2, q1op3, q1op4;
var c1_img, c1, correct1sound;
var C1_img, info1;
var question3, ques3_img, ques3wr, ques3wr_img;
var ques2wrong, ques2wr_img, ques2c, ques2c_img;
var wrong, wrong_img, q4correct, q4correct_image;
var Question2, Ques2_image, question4, ques4_img;
var ques4wrong,ques4wrong_img;
var Question5c, question5c_image;
var Question5w, question5w_img;
var score = 0;

function preload() {
  //Assigning images and sounds
  back_img = loadImage(" First background.png");
  // during=loadImage("During game background.png");
  oneinf_img = loadImage("information_page.png");
  question1_img = loadImage("Q1.PNG");
  c1_img = loadImage("c1.PNG");
  //C1_img=loadImage("information of first question.PNG");
  wrong_img = loadImage("Wrong.PNG");
  Ques2_image = loadImage("question 2.PNG");
  ques2wr_img = loadImage("Wrong2 inf.PNG");
  ques2c_img = loadImage("op@ques2 correct.PNG");
  ques3_img = loadImage("question 3.PNG");
  question3c_img = loadImage("q3 correct.PNG");
  ques4wrong_img=loadImage("q4 wrong.PNG");
  ques3wr_img = loadImage("q3wr.PNG");
  ques4_img = loadImage("question 4.PNG");
  q4correct_image = loadImage("q4 correct.PNG");
  q4wr_img = loadImage("q4 wrong.PNG");
  question5_image = loadImage("Question no 5.PNG");
  question5c_image = loadImage("correct5.PNG");
  question5w_img = loadImage("question 5wrong.PNG");
  correct1sound = loadSound("Sounds/right sound.mp3");
  quesarriver = loadSound("Sounds/Question arriving.mp3");
  wrongsound=loadSound("Sounds/Wrong sound.mp3");
  sc25_img=loadImage("score=25.PNG");
  geniussound=loadSound("Sounds/Genius.m4a");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
///form=new Form;
//form.display();
  //Create the Bodies Here.
  
//Starting Button
  this.button = createButton("Let's Play");
  this.button.position(width / 2.4  + 30, height / 1.7);
  this.button.style('width', '250px');
        this.button.style('height', '50px');
        this.button.style('background', 'yellow');


}






function draw() {
  rectMode(CENTER);
  background(rgb(198,135,103));
      image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1)
  textSize(30);
  fill(0, 199, 255);



  form=new Form;
form.display();
  text("Score=" + score, displayWidth / 1.2 + 30, displayHeight / 2.9);
  // background(rgb(198,135,103));
  //image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1);
  //Mouse pressed over starting button.
  //this.button.mousePressed(() => {
}