jQuery('.element').click(function(e) {                  // форма тоже создает точку

        let r = document.getElementById("newEmployeeForm:r").value;

        let target = this.getBoundingClientRect();

        let xnonKras = e.clientX - target.left;
        let ynonKras = e.clientY - target.top;

        // sessionStorage.setItem("points" + sessionStorage.length.toString(), xnonKras.toString());
        // sessionStorage.setItem("points" + sessionStorage.length.toString(), ynonKras.toString());
        sessionStorage.setItem("point " + xnonKras.toString(), ynonKras.toString());

        let x = (Math.round(((e.clientX - target.left - 225)/180*5)*100)/100);
        let y = ((Math.round((e.clientY - target.top - 200)/180*5*(-1)*100)/100));

        let color = setColor(x,y,r);

        let submitForm = document.forms[1];

        submitForm.elements[1].value = x;
        submitForm.elements[2].value = y;

        let but = document.getElementById("newEmployeeForm:subbutton");
        but.click();
        art(xnonKras, ynonKras, color);

        submitForm.elements[1].value = 0;
        submitForm.elements[2].value = 0;

});

