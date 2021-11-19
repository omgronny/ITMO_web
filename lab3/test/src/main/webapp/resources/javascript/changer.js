function f() {

    let r_value = document.getElementById("newEmployeeForm:r").value;

    let canvas = document.getElementById('circle');
    let obCanvas = canvas.getContext('2d');

    obCanvas.clearRect(0, 0, canvas.width, canvas.height);

    ctx = canvas.getContext("2d");

    canvas.width = 450; // x
    canvas.height = 400; // y

    ctx.beginPath();                                    // circle in second
    ctx.arc(225, 200, 180 * r_value / 5, Math.PI, 3 * Math.PI / 2, false);
    ctx.lineTo(225, 200);
    ctx.lineTo(225 - 180 * r_value / 5, 200);
    ctx.closePath();
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();                                    // triangle in first
    ctx.moveTo(225, 200);
    ctx.lineTo(225 + 180 * r_value / 5, 20 + 180);
    ctx.lineTo(225, 200 - 180 * r_value / 5);
    ctx.lineTo(225, 200);
    ctx.closePath();
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2.0;

    if (r_value == 5) {

        ctx.beginPath();                                   // rectangle in third
        ctx.rect(45, 200, 180, 90);
        ctx.closePath();
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();

    } else if (r_value == 4) {

        ctx.beginPath();                                   // rectangle in third
        ctx.rect(81, 200, 144, 72);             // 144
        ctx.closePath();
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();


    } else if (r_value == 3) {

        ctx.beginPath();                                   // rectangle in third
        ctx.rect(117, 200, 108, 54);                        //
        ctx.closePath();
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();


    } else if (r_value == 2) {

        ctx.beginPath();                                   // rectangle in third
        ctx.rect(153, 200, 72, 36);             // 144
        ctx.closePath();
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();


    } else {

        ctx.beginPath();                                   // rectangle in third
        ctx.rect(189, 200, 36, 18);             // 144
        ctx.closePath();
        ctx.strokeStyle = "orange";
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();

    }

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

            let color = setColor(x,y,r);
            art(x1, y1, color);

        }
    }

    let submitForm = document.forms[1];

    submitForm.elements[1].value = 0;
    submitForm.elements[2].value = 0;

}

