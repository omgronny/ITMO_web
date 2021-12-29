jQuery('.element').click(function(e) { // форма тоже создает точку

        let r = document.getElementById("r");

        if (!validation_r(r, true, true)) {
                return false;
        }

        r = r.value;

        let target = this.getBoundingClientRect();

        //let xnonKras = e.clientX - target.left;
        let xnonKras = e.clientX - target.left;
        let ynonKras = e.clientY - target.top;

        //alert(document.documentElement.clientWidth);

        if (document.documentElement.clientWidth <= 828) {
                xnonKras = xnonKras - 200;
        }

        // sessionStorage.setItem("points" + sessionStorage.length.toString(), xnonKras.toString());
        // sessionStorage.setItem("points" + sessionStorage.length.toString(), ynonKras.toString());

        let x = (Math.round(((xnonKras - 225)/180*r)*100)/100);
        let y = ((Math.round((ynonKras - 200)/180*r*(-1)*100)/100));

        sessionStorage.setItem("point " + xnonKras.toString(), ynonKras.toString() + " " + r);

        let color = setColor(x,y,r);

        document.getElementById("x").value = x;
        document.getElementById("y").value = y;

        let but = document.getElementById("subbutton");
        but.click();
        art(xnonKras, ynonKras, color);

        // submitForm.elements[0].value = 0;
        // submitForm.elements[1].value = 0;

});

