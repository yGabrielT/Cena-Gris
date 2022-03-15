var ex = document.getElementById('canvas1');
var ctx = ex.getContext('2d');
var ctx2 = ex.getContext('2d');
var ctx3 = ex.getContext('2d');
var ctx4 = ex.getContext('2d');
var ctx5 = ex.getContext('2d');


// Sol //
ctx.beginPath();
ctx.arc(400,255,250,0,2 * Math.PI);
ctx.fillStyle="white";
ctx.lineWidth=5;
ctx.strokeStyle="yellow"
ctx.fill();
ctx.stroke();
//cabeça//
ctx5.beginPath();
ctx5.arc(500,60,40,0,2 * Math.PI);
ctx5.fillStyle="black";
ctx5.strokeStyle="black";
ctx5.fill();
ctx5.stroke();

// linha da perna //

ctx3.beginPath();
ctx3.moveTo(500,287)
ctx3.lineTo(500,350)
ctx3.strokeStyle="black"
ctx3.stroke()

// corpo //

ctx4.beginPath();
ctx4.moveTo(400,290)
ctx4.lineTo(600,290)
ctx4.lineTo(500,100)
ctx4.lineTo(400,290)
ctx4.fillStyle="black";
ctx4.strokeStyle="black"
ctx4.fill();
ctx4.stroke()


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


