// my thinking
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


let x = 200;
let y = 200;
let dx = 2;
function animateforward(){
    requestAnimationFrame(animateforward);// looping infintely
    // console.log("heello");
    c.clearRect(0,0,innerWidth,innerHeight); // to clear the canvas
    c.beginPath();
    c.arc(x,y,30, 0,Math.PI*2,false);// this is the outline of the circle
    if(x < window.innerWidth){
        x+=dx;
    }
    c.strokeStyle = `blue`;
    c.stroke(); 
    if(x >= window.innerWidth)animatebackward();
    
}
function animatebackward(){
    requestAnimationFrame(animatebackward);// looping infintely
    c.clearRect(0,0,innerWidth,innerHeight); // to clear the canvas
    c.beginPath();
    c.arc(x,y,30, 0,Math.PI*2,false);// this is the outline of the circle
    if(x > 100){
        x-=dx;
    }
    c.strokeStyle = `blue`;
    c.stroke(); 
    
}
animateforward(); 