var canvas = document.getElementById("canvaslol");
var ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2 ;
ctx.rect(150 , 143 , 430 , 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5 ; 
ctx.arc(200 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5 ; 
ctx.arc(250 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5 ; 
ctx.arc(300 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5 ; 
ctx.arc(225 , 250 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5 ; 
ctx.arc(275 , 250 , 40 , 0 , 2*Math.PI);
ctx.stroke();

//project completed. i hope u liked it.