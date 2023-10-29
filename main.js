  Notification.requestPermission().then(permission => {
   console.log(permission)
   })



 /*function notify()
 {
   Notification.requestPermission().then(perm => {
        if(perm === 'granted') {
      new Notification("WELCOME TO FILTER WEB APP WEBSITE HOPE YOUR DAYS GOES GOOD")
         }
       })
 }*/
noseX = 0;
noseY = 0;


function preload(){
clown_nose = loadImage('https://i.postimg.cc/wMRtDG1q/pngimg-com-moustache-PNG40.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);


     
}



function gotPoses(results)
{
  if(results.length > 0){
    console.log(results);
   localStorage.setItem('NoseX' , results[0].pose.nose.x - 15);
   localStorage.setItem('NoseY',results[0].pose.nose.y);
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
  }
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw(){
  image(video , 0 , 0 , 300 , 300);
 image(clown_nose,localStorage.getItem('NoseX'),localStorage.getItem('NoseY'),30,30);

}              

function take_snapshot(){
    Notification.requestPermission().then(perm => {
       if(perm === 'granted') {
     new Notification("THANK YOU FOR USING OUR APP")
         }
       })

    save('DontClickImage.png');
}
