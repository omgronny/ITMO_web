function validator() {

    const par_y = document.getElementById("y");
    const par_x = document.getElementById("x");
    const par_r = document.getElementById("r");

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

    if (par_x.value === "") {
        elem.innerHTML = '<not_valid>Enter the X, please</not_valid>';
        valid = false;
        return false;
    }

    if (isNaN(par_x.value)) {
        elem.innerHTML = '<not_valid>X must be a number</not_valid>';
        valid = false;
        return false;
    }

    if ((par_x.value >= 3) || (par_x.value <= -3)) {
        elem.innerHTML = '<not_valid> X must be in (-3;3)</not_valid>';
        valid = false;
        return false;
    }

    if (!validation_r(par_r, true, false)) {
        return false;
    }


    // if (valid) {
    //
    //     let x = par_x.value;
    //     let y = par_y.value;
    //
    //     let xnonKras = x*36 + 225;
    //     let ynonKras = y*(-36) + 200;
    //
    //     let color = setColor(x, y, par_r.value);
    //     art(xnonKras, ynonKras, color);
    //
    //     let but = document.getElementById("subbutton");
    //     but.click();
    //
    // }

    return true;


}

