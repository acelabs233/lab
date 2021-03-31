  
var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var ls = [];

for(let i = 0; i < 300; i++){
    ls.push([Math.random() * innerWidth, Math.random() * innerHeight, (Math.random()-0.5) * 10, (Math.random()-0.5) * 10])
}

var radius = 20;
function animate(i){
    c.beginPath();
    c.arc(ls[i][0], ls[i][1],radius, 0, Math.PI*2, false);
    c.strokeStyle = "blue"
    c.fillStyle = "gold";
    c.fill()
    c.stroke();

    if(ls[i][0]+radius > innerWidth || ls[i][0]-radius < 0){
        ls[i][2] = -ls[i][2];
    }
    ls[i][0]+=ls[i][2]

    if(ls[i][1]+radius > innerHeight || ls[i][1]-radius < 0){
        ls[i][3] = -ls[i][3];
    }
    ls[i][1]+=ls[i][3]
}

function run(){
    requestAnimationFrame(run);
    c.clearRect(0,0, innerWidth, innerHeight);
    for(let i =0; i < ls.length; i++){
        animate(i);
    }
}

run();