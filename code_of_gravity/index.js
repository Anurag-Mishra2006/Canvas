//  Initial setup
const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//  variables
const mouse={
    x : innerWidth/2 ,
    y : innerHeight/2
}

const gravity  = 1;
const friction = 0.99;

const colors = [
    "#2185C5",
    "#7ECEFD",
    "#FFF6E5" ,
    "#FF7F66"
];

// Event Listeners
addEventListener("mousemove" ,function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;

})

addEventListener("resize" , ()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

//  Utility Functions
function randomIntFromRange(min , max){
    return Math.floor(Math.random()*(max - min +1)+min)
}

function randomColor(colors){
    // console.log(colors.length);
    return colors[Math.floor(Math.random() * colors.length)];
}

// Objects
function Ball(x , y ,dx, dy ,radius,color){
    this.x =x ;
    this.y = y ; 
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.color = color;
    this.update = function(){
        if(this.y + this.radius + this.dy > canvas.height){
            this.dy = -this.dy * friction;

        }
        else{
            this.dy +=gravity;
        }
        if(this.x + this.radius + this.dx>  canvas.width 
            || this.x - this.radius  <=0){
            this.dx = -this.dx;
        }

        // console.log(this.dy);
        this.x +=this.dx;
        this.y += this.dy;
        this.draw()
    }

    this.draw = function(){
        c.beginPath();
        c.arc(this.x , this.y , this.radius , 0, Math.PI * 2 , false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath()
    }
}
//  Implementation 
let ball ;
const ballArray = [];
function init(){
    let radius = 30;
    for(let i =0 ; i<2  ; i++){
        let x = randomIntFromRange(radius, canvas.width-radius);
        let y = randomIntFromRange(0,canvas.height - radius);
        // let color =randomColor(colors);
        // let color = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
        let dx = randomIntFromRange(-2,2);
        let color = 'red';
        dy = 2;
        ballArray.push(new Ball(x, y,dx , dy, radius,color))
        console.log(ballArray);
    }
    
    // console.log(ball);
}

// Animation loop
function animate(){
    requestAnimationFrame(animate);
    // .clearRect is to clear the web page
    c.clearRect(0,0,canvas.width,canvas.height);
     
    // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
    for(let i = 0 ;  i<ballArray.length;i++){
        ballArray[i].update();
    }
}

init();
animate();