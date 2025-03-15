var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


// 
var mouse = {
    x:undefined ,
    y:undefined
}
const maxRadius = 40;
const minRadius =1;

const colorArray = [
    "#ffaa33",
    "#99ffaaa",
    "#00ff00",
    "#4411aa",
    "#ff1100"
]
window.addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);

}) 
// 
function Circle(x , y , radius,dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius; 
    this.dx = dx;
    this.dy = dy;
    this.color =  colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw = function(){
         // Set the fill color
         c.beginPath();
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // Draw the circle
         c.fillStyle = this.color;
         c.stroke();
         c.fill();
    }

    this.update = function(){
        if(this.x+this.radius >  innerWidth || this.x-this.radius <0)this.dx = -this.dx;
        if(this.y+this.radius > innerHeight|| this.y-this.radius <0)this.dy = -this.dy;
        this.x +=this.dx;
        this.y += this.dy;

        // interactivity//

        // by this if case all the ball raise to radius of 50 when mouse hover over them
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y <50 && mouse.y-this.y>-50 ){
            if(this.radius<maxRadius){
                this.radius +=1;

            }    
        }
        else if(this.radius >1) {
            this.radius -= 1;
        }
        
        this.draw();
    }
}
 
const circleArray = [];
for(let i =0 ;i<1000;i++){
    let radius = Math.random()*15+1;
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerWidth;
    let dx = (Math.random()-0.5)*8;
    let dy =(Math.random()- 0.5 )*8;
    circleArray.push(new Circle(x , y,radius,dx , dy));


}
function animate(){
    requestAnimationFrame(animate); 
    c.clearRect(0,0,innerWidth,innerHeight); // to clear the canvas
for(let i =0 ;i<circleArray.length;i++){
    circleArray[i].update();
}
    
}
animate();