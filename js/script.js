var ex = document.getElementById('canvas1');
var ctx = ex.getContext('2d');
var ctx2 = ex.getContext('2d');
var ctx3 = ex.getContext('2d');
var ctx4 = ex.getContext('2d');
var ctx5 = ex.getContext('2d');
var ctx6 = ex.getContext('2d');
var ctx7 = ex.getContext('2d');

// chão //
ctx6.beginPath();
ctx6.moveTo(400,617);
ctx6.lineTo(0,617);
ctx6.lineTo(400,0);
ctx6.lineTo(600,300);
ctx6.lineTo(800,0);
ctx6.lineTo(1200,617);
ctx6.lineTo(400,617);
ctx6.fillStyle="grey";
ctx6.fill();
ctx6.stroke();


// Sol //
ctx.beginPath();
ctx.arc(400,255,250,0,2 * Math.PI);
ctx.fillStyle="yellow";
ctx.lineWidth=10;
ctx.strokeStyle="yellow";
ctx.fill();
ctx.stroke();

//cabeça//

ctx5.beginPath();
ctx5.arc(500,140,30,0,2 * Math.PI);
ctx5.fillStyle="black";
ctx5.strokeStyle="black";
ctx5.fill();
ctx5.stroke();

// linha da perna //

ctx3.beginPath();
ctx3.moveTo(500,287);
ctx3.lineTo(500,350);
ctx3.lineWidth=5;
ctx3.strokeStyle="black";
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(490,287);
ctx3.lineTo(490,350);
ctx3.strokeStyle="black";
ctx3.stroke();

// Corpo //

ctx4.beginPath();
ctx4.moveTo(450,290);
ctx4.lineTo(550,290);
ctx4.lineTo(500,150);
ctx4.lineTo(450,290);
ctx4.fillStyle="black";
ctx4.strokeStyle="black"
ctx4.fill();
ctx4.stroke();

// Montanha //


ctx2.beginPath();
ctx2.moveTo(400,617);
ctx2.lineTo(400,350);
ctx2.lineTo(630,350);
ctx2.lineTo(900,100);
ctx2.lineTo(1000,100);
ctx2.lineTo(1200,0);
ctx2.lineTo(1200,617);
ctx2.lineTo(400,617);
ctx2.fillStyle="black";
ctx2.strokeStyle="black";
ctx2.fill();
ctx2.stroke();
ctx2.beginPath();

// Bordas do Canvas //

ctx7.beginPath();
ctx7.moveTo(0,617);
ctx7.lineTo(0,0);
ctx7.lineTo(1210,0);
ctx7.lineTo(1210,617);
ctx7.lineTo(0,617);
ctx7.lineWidth=16;
ctx7.stroke();