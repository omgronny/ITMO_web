jQuery('.element').click(function(e) {

        let r = document.getElementById("newEmployeeForm:r").value;

        let target = this.getBoundingClientRect();

        let x = (Math.round(((e.clientX - target.left - 225)/180*5)*100)/100);
        let y = ((Math.round((e.clientY - target.top - 200)/180*5*(-1)*100)/100));

        let correct = corrector(x, y, r);

        let color = '#32b494';
        if (!correct) {
                color = '#ff0000';
        }

        let xnonKras = e.clientX - target.left;
        let ynonKras = e.clientY - target.top;

        // sessionStorage.setItem("points" + sessionStorage.length.toString(), xnonKras.toString());
        // sessionStorage.setItem("points" + sessionStorage.length.toString(), ynonKras.toString());
        sessionStorage.setItem("point " + xnonKras.toString(), ynonKras.toString());

        let submitForm = document.forms[1];

        submitForm.elements[1].value = x;
        submitForm.elements[2].value = y;

        let but = document.getElementById("newEmployeeForm:subbutton");
        but.click();

        submitForm.elements[1].value = 0;
        submitForm.elements[2].value = 0;

        let canvas = document.getElementById('circle');
        let obCanvas = canvas.getContext('2d');

        obCanvas.beginPath();
        obCanvas.arc(e.clientX - target.left, e.clientY - target.top, 5, 0, 2*Math.PI, false);
        obCanvas.fillStyle = color;
        obCanvas.fill();
        obCanvas.lineWidth = 1;
        obCanvas.strokeStyle = color;
        obCanvas.stroke();


});
