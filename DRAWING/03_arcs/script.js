var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.arc(300 , 300 ,30 , 0,Math.PI*2,false);// this is the outline of the circle
// c.arc(x: number, y:number, radius: number, startAngle: number, endAngle: number, counterclockwise:false/true)
// c.strokeStyle = "blue";
c.stroke();

//  creating multiple circle using for loop
let max = 900;
let min = 100;
let radius = 30;
for(let i =0 ;i<50;i++){
    let x = Math.random( )*(max-min)+min;//by this we can set the range of randomness
    let red = Math.random()*(255);
    let green = Math.random()*(255);
    let blue = Math.random()*(255);
     

    let y = Math.random( )*window.innerHeight;// by this we cover whole window page
    c.beginPath();
    c.arc(x ,y,radius , 0,Math.PI*2,false);// this is the outline of the circle
    c.strokeStyle = `rgb(${red},${green},${blue})`;
    c.stroke(); 
}