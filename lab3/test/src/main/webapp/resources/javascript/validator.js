function validator() {

    const par_y = document.getElementById("newEmployeeForm:y");
    const par_x = document.getElementById("newEmployeeForm:x");
    const par_r = document.getElementById("newEmployeeForm:r");

    let valid = true;

    if (par_y.value === "") {
        elem.innerHTML = '<not_valid>Enter the Y, please</not_valid>';
        valid = false;
        return false;
    }

    if (isNaN(par_y.value)) {
        elem.innerHTML = '<not_valid>Y must be a number</not_valid>';
        valid = false;
        return false;
    }

    if ((par_y.value >= 3) || (par_y.value <= -3)) {
        elem.innerHTML = '<not_valid> Y must be in (-3;3)</not_valid>';
        valid = false;
        return false;
    }

    if ((par_x.value > 5) || (par_x.value < -5)) {
        elem.innerHTML = '<not_valid> X must be in [-5;5]</not_valid>';
        valid = false;
        return false;
    }

    if (valid) {

        let x = par_x.value;
        let y = par_y.value;

        let xnonKras = x*36 + 225;
        let ynonKras = y*(-36) + 200;

        let color = setColor(x, y, par_r.value);
        art(xnonKras, ynonKras, color);

        let but = document.getElementById("newEmployeeForm:subbutton");
        but.click();

    }

    return false;


}

