let mobilenet;
let classifier;
let video;
let label = '';
let happyButton;
let sadButton;
let trainButton;

function modelReady() {
  console.log("Model is ready!!!");
 //mobilenet.predict(gotResults);
}

function videoReady() {
  console.log("Video is ready!!!");
}

function gotResults(error, result) {
  if(error){
    console.error(error);
  }else {
    label = result;
    classifier.classify(gotResults);
  }
}

function whileTraining(loss){
  if (loss == null) {
    console.log('Training Complete!');
    classifier.classify(gotResults);
  }else {
    console.log(loss);
  }
}

function setup() {
  createCanvas(640, 550);
  //Instead of using createImg (for just image), switch to createCapture
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet',  modelReady);
  classifier = mobilenet.classification(video, videoReady);

  happyButton = createButton('happy');
  happyButton.mousePressed(function(){
    classifier.addImage('happy');
  });

  sadButton = createButton('sad');
  sadButton.mousePressed(function(){
    classifier.addImage('sad');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function(){
    classifier.train(whileTraining);
  });
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}