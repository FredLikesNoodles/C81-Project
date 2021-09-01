var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();




color="blue"
width = 3;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();


color="black"
width = 3;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();


color="yellow"
width = 3;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(300, 260, 40, 0, 2*Math.PI);
ctx.stroke();

color="green"
width = 3;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(410, 260, 40, 0, 2*Math.PI);
ctx.stroke();

color="red"
width = 3;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();