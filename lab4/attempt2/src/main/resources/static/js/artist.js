function artGraph() {

    var canvas = document.getElementById("circle"),
        ctx = canvas.getContext("2d");

//var r_value = document.getElementById("r").value;

    canvas.width = 450; // x
    canvas.height = 400; // y

    ctx.lineWidth = 2.0;

    ctx.beginPath();                                   // rectangle in second
    ctx.rect(45, 110, 180, 90);
    ctx.closePath();
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();                                    // circle in third
    ctx.arc(225, 200, 180, Math.PI / 2, Math.PI, false);
    ctx.lineTo(225, 200);
    ctx.lineTo(225, 380);
    ctx.closePath();
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();                                    // triangle in fourth
    ctx.moveTo(225, 200);
    ctx.lineTo(225 + 180, 200);
    ctx.lineTo(225, 290);
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

    ctx.moveTo(220, 110);
    ctx.lineTo(230, 110);

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

// canvas = document.getElementById('circle');
// var obCanvas = canvas.getContext('2d');

    let i = 0;
// while (i < sessionStorage.length) {
//
//     let r = r_value;
//
//     let reIsPoint = /^point.*$/;
//     let reGetNumber = /\d+/;
//
//     if (reIsPoint.test(sessionStorage.key(Number(i)))) {
//
//         let x1 = sessionStorage.key(Number(i)).match(reGetNumber)[0];
//         let y1 = Number(sessionStorage.getItem(sessionStorage.key(Number(i))));
//
//         i = Number(Number(i) + 1);
//
//         //alert(x1 + " " + y1);
//
//         let x = (Math.round(((x1 - 225) / 180 * 5) * 100) / 100);
//         let y = ((Math.round((y1 - 200) / 180 * 5 * (-1) * 100) / 100));
//
//         let color = setColor(x,y,r);
//         art(x1,y1,color);
//
//     }
//
// }


}

artGraph();