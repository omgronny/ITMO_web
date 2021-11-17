function validator() {

    const par_y = document.getElementById("newEmployeeForm:y");

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

    if (valid) {
        let but = document.getElementById("newEmployeeForm:subbutton");
        but.click();
    }
    return false;


}