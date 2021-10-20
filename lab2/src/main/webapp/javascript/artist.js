/*
            Нужно еще сохранять в сессии точки и при открытии в цикле отрисовывать их
             */

var canvas = document.getElementById("circle"),
    ctx = canvas.getContext("2d");

canvas.width = 450; // x
canvas.height = 400; // y

ctx.lineWidth = 2.0;

ctx.beginPath();                                   // rectangle in first
ctx.rect(225, 20, 180, 180);
ctx.closePath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();                                    // circle in third
ctx.arc(225, 200, 180, Math.PI/2, Math.PI, false);
ctx.lineTo(225, 200);
ctx.lineTo(225, 380);
ctx.closePath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();                                    // triangle in fourth
ctx.moveTo(225, 380);
ctx.lineTo(315, 200);
ctx.lineTo(225, 200);
ctx.lineTo(225, 380);
ctx.closePath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();                                    // y coord
ctx.moveTo(225, 10);
ctx.lineTo(225, 400);

ctx.moveTo(0, 200);
ctx.lineTo(440, 200);                               // x coord

ctx.moveTo(220, 20);
ctx.lineTo(230, 20);

ctx.moveTo(220, 100);
ctx.lineTo(230, 100);

ctx.moveTo(315, 195);
ctx.lineTo(315, 205);

ctx.moveTo(405, 195);
ctx.lineTo(405, 205);

ctx.moveTo(220, 380);
ctx.lineTo(230, 380);

ctx.moveTo(45, 195);
ctx.lineTo(45, 205);

ctx.closePath();

ctx.strokeStyle = "white";
ctx.stroke();
