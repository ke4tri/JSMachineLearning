let mobilenet;
//let puffin;
let video;

function modelReady() {
  console.log("Model is ready!!!");
 // mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if(error){
    console.error(error);
  }else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    createP(label);
    createP(prob);
  }
}

//This would draw the image inside of the canvas if we were using a static image andnot
//VIDEO
// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  createCanvas(640, 480);
  //Instead of using createImg (for just image), switch to createCapture
  //puffin = createImg('images/puffin.jpg', imageReady);
  video = createCapture(VIDEO);
  video.hide();
 // puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
  image(video, 0, 0);
}