var canvas = document.querySelector("canvas")

scale = 0.97
canvas.width = window.innerWidth * scale;
canvas.height = window.innerHeight * scale;

var c = canvas.getContext('2d');

for(let i=0;i<200;i++){
    var x = Math.random() * window.innerHeight*scale;
    var y = Math.random() * window.innerWidth*scale;
    c.beginPath();
    c.arc(x,y,30,0, Math.PI*2, false)
    c.strokeStyle = "blue"
    c.fillStyle = "#FF0000"
    c.fill()
    c.stroke();
}