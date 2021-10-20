document.testForm.onsubmit = function() {

    const par_y = document.getElementById('y');
    let r = document.getElementsByName("par_r[]");

    var ln = 0;
    for(var i=0; i< r.length; i++) {
        if(r[i].checked) {
            ln++;
        }
    }

    if (ln == 0) {
        elem.innerHTML = '<not_valid>Введите параметр r</not_valid>';           // сделать также для графика
        return false;
    }

    if (par_y.value === "") {
        elem.innerHTML = '<not_valid>Введите параметр y</not_valid>';
        return false;
    }

    if (isNaN(par_y.value)) {
        elem.innerHTML = '<not_valid>Введите числовой параметр y</not_valid>';
        return false;
    }

    if ((par_y.value >= 3) || (par_y.value <= -5)) {
        elem.innerHTML = '<not_valid> Введите Y в интервале (-5;3)</not_valid>';
        return false;
    }

}