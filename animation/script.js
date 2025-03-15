// sir's 
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function Circle(x , y , radius,dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius; 
    this.dx = dx;
    this.dy = dy;

    
    let red = Math.random()*(255);
    let green = Math.random()*(255);
    let blue = Math.random()*(255);

    this.draw = function(){
        //  these is only outlines
        c.beginPath();
        c.arc(this.x,this.y,this.radius, 0,Math.PI*2,false);// this is the outline of the circle
        c.strokeStyle = `rgb(${red},${green},${blue})`;
        c.fill(); 

        // now filling the circle
         // Set the fill color
         c.beginPath();
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // Draw the circle
         c.fillStyle = `rgb(${red}, ${green}, ${blue})`;  // Set fill color based on RGB
         c.fill();
    }

    this.update = function(){
        if(this.x+this.radius >= innerWidth || this.x-this.radius <0)this.dx = -this.dx;
        if(this.y+this.radius >= innerWidth || this.y-this.radius <0)this.dy = -this.dy;
        this.x +=this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}
// let circle = new Circle(x, y , radius);
// circle.draw();

// let circle  = new Circle(x , y,radius,dx , dy);
const circleArray = [];
for(let i =0 ;i<20;i++){
    let radius = 30;
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerWidth;
    let dx = (Math.random()-0.5)*10;
    let dy =(Math.random()- 0.5 )*10;
    circleArray.push(new Circle(x , y,radius,dx , dy));


}
function animate(){
    requestAnimationFrame(animate);// looping infintely
    // console.log("heello");
    c.clearRect(0,0,innerWidth,innerHeight); // to clear the canvas
for(let i =0 ;i<circleArray.length;i++){
    circleArray[i].update();
}
    
}
animate();