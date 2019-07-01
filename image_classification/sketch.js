let mobilenet;
//let puffin;
let video;
let label = '';

function modelReady() {
  console.log("Model is ready!!!");
 // mobilenet.predict(puffin, gotResults);
 mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if(error){
    console.error(error);
  }else {
    console.log(results);
    label = results[0].className;
    // let prob = results[0].probability;
    // fill(0);
    // textSize(64);
    // text(label, 10, height - 100);
    // createP(label);
    // createP(prob);
   // mobilenet.predict(gotResults);
  }
}

//This would draw the image inside of the canvas if we were using a static image andnot
//VIDEO
// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  createCanvas(640, 550);
  //Instead of using createImg (for just image), switch to createCapture
  //puffin = createImg('images/puffin.jpg', imageReady);
  video = createCapture(VIDEO);
  video.hide();
 // puffin.hide();
  background(0);
  //Adding the param video will allow the pridictor to use all the video 
  //And not just a single image
 // mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}