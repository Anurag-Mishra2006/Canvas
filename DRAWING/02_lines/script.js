var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
 
c.beginPath();
// c.moveTo(x , y);
c.moveTo(50 , 300);
c.lineTo(300 , 100);
c.lineTo(100 , 500);
c.lineTo(400 , -500);
c.strokeStyle= "red";
c.stroke();
