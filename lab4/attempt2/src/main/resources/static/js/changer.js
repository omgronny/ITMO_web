function f() {

    let r_value = document.getElementById("r");

    //alert(r_value.value);

    if (!validation_r(r_value, false)) {
        return false;
    }

    let canvas = document.getElementById('circle');
    let obCanvas = canvas.getContext('2d');

    obCanvas.clearRect(0, 0, canvas.width, canvas.height);
    obCanvas.stroke();

    //alert("aaa");

    artGraph();

    let newPoints = [];

    let i = 0;
    while (i < sessionStorage.length) {

        let r = r_value.value;

        let reIsPoint = /^point.*$/;
        let reGetNumber = /\d+/;

        if (reIsPoint.test(sessionStorage.key(Number(i)))) {

            let xnonKras = sessionStorage.key(Number(i)).match(reGetNumber)[0];
            let ynonKras = Number(sessionStorage.getItem( sessionStorage.key(Number(i)) ).split(" ")[0]);
            let oldR = Number(sessionStorage.getItem( sessionStorage.key(Number(i))).split(" ")[1] );

            //alert(xnonKras + " " + ynonKras + " " + oldR);

            // let x = x1*(180/r) + 225;
            // let y = y1*((-180)/r) + 200;

            let x = (Math.round(((xnonKras - 225)/180*oldR)*100)/100);
            let y = ((Math.round((ynonKras - 200)/180*oldR*(-1)*100)/100));

            x = x * oldR / r;
            y = y * oldR / r;

            let xNewNonKras = x*(180/r) + 225;
            let yNewNonKras = y*((-180)/r) + 200;

            //sessionStorage.removeItem(sessionStorage.key(Number(i)));

            newPoints.push("point " + xNewNonKras.toString() + " " + yNewNonKras.toString() + " " + r);

            //alert(x + " " + y);
            let color = setColor(x,y,r);
            art(xNewNonKras, yNewNonKras, color);

            i = Number(Number(i) + 1);

        }
    }

    sessionStorage.clear();

    newPoints.forEach(str => {

        let reIsPoint = /^point.*$/;
        let reGetNumber = /\d+/gi;

        let ar = str.split(" ");

        // let x = str.match(reGetNumber)[0];
        // let y = str.match(reGetNumber)[1];

        let x = ar[1];
        let y = ar[2];

        sessionStorage.setItem("point " + x, y + " " + ar[3]);

    });

    // let submitForm = document.forms[0];
    //
    // submitForm.elements[0].value = 0;
    // submitForm.elements[1].value = 0;

}

