var canvas = document.getElementById("circle"),
    ctx = canvas.getContext("2d");

var r_value = document.getElementById("newEmployeeForm:r").value;

canvas.width = 450; // x
canvas.height = 400; // y

ctx.lineWidth = 2.0;

ctx.beginPath();                                   // rectangle in third
ctx.rect(45, 200, 180, 90);
ctx.closePath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();                                    // circle in second
ctx.arc(225, 200, 180, Math.PI, 3*Math.PI/2, false);
ctx.lineTo(225, 200);
ctx.lineTo(45, 200);
ctx.closePath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

ctx.beginPath();                                    // triangle in first
ctx.moveTo(225, 200);
ctx.lineTo(225 + 180, 20 + 180);
ctx.lineTo(225, 20);
ctx.lineTo(225, 200);
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

canvas = document.getElementById('circle');
var obCanvas = canvas.getContext('2d');

let i = 0;
while (i < sessionStorage.length) {

    let r = r_value;

    let reIsPoint = /^point.*$/;
    let reGetNumber = /\d+/;

    if (reIsPoint.test(sessionStorage.key(Number(i)))) {

        let x1 = sessionStorage.key(Number(i)).match(reGetNumber)[0];
        let y1 = Number(sessionStorage.getItem(sessionStorage.key(Number(i))));


        i = Number(Number(i) + 1);

        //alert(x1 + " " + y1);

        let x = (Math.round(((x1 - 225) / 180 * 5) * 100) / 100);
        let y = ((Math.round((y1 - 200) / 180 * 5 * (-1) * 100) / 100));

        let correct = false;
        if (x >= 0 && y >= 0) {
            correct = x + y <= r;
        } else if (x < 0 && y >= 0) {
            correct = x * x + y * y <= r * r;
        } else if (x < 0 && y < 0) {
            correct = (-1) * x <= r && (-1) * y <= r / 2;
        }

        let color = '#32b494';
        if (!correct) {
            color = '#ff0000';
        }

        obCanvas.beginPath();
        obCanvas.arc(x1, y1, 5, 0, 2 * Math.PI, false);

        obCanvas.fillStyle = color;
        obCanvas.fill();
        obCanvas.lineWidth = 1;
        obCanvas.strokeStyle = color;
        obCanvas.stroke();

    }

}