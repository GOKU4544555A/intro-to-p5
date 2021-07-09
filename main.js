function take_snapshot(){
save("subcribe to probot goku plays on you tube.jpeg")
}
function draw(){
image(video,0,0,640,480)
tint(filterColour)
circle(30, 30, 40); 
fill(255, 0, 0);
circle(600, 30, 40);
fill(255, 0, 0);
circle(30, 400, 40);
fill(255, 0, 0);
circle(600, 400, 40);
}
function preload(){
 
}
function setup(){
canvas=createCanvas(640,480)
canvas.position(110,250)
video=createCapture(VIDEO)
video.hide()
filterColour=""
}
function apply_filter(){
filterColour=document.getElementById("colour").value
}