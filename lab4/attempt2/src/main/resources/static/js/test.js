//document.getElementById("r").value = 3;

window.onbeforeunload = function() {
    sessionStorage.clear();
};

function setColor(x, y, r) {

    let correct = corrector(x, y, r);

    let color = '#32b494';
    if (!correct) {
        color = '#ff0000';
    }

    return color;
}

function art(x, y, color) {

    let canvas = document.getElementById('circle');
    let obCanvas = canvas.getContext('2d');

    obCanvas.beginPath();
    obCanvas.arc(x, y, 5, 0, 2*Math.PI, false);
    obCanvas.fillStyle = color;
    obCanvas.fill();
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = color;
    obCanvas.stroke();

}

function corrector(x, y, r) {
    let correct = false;
    if (x > 0 && y < 0) {
        correct = ( x - r ) / 2 < y;
    } else if (x < 0 &&y > 0) {
        correct = x > r/(-1) && y < r/2;
    } else if (x < 0 &&y < 0) {
        correct = x * x + y * y < r * r;
    }
    return correct;
}

function validation_r(par_r, isHTML, isBig) {

    //alert(par_r.value);

    if (par_r.value === "") {
        if (isHTML) { elem.innerHTML = '<not_valid>Enter the R, please</not_valid>'; }
        return false;
    }

    if (isNaN(par_r.value)) {
        if (isHTML) { elem.innerHTML = '<not_valid>R must be a number</not_valid>'; }
        return false;
    }

    if (!isBig) {
        if ((par_r.value > 3) || (par_r.value < -3)) {
            if (isHTML) {
                elem.innerHTML = '<not_valid> R must be in (-3;3)</not_valid>';
            }
            return false;
        }
    }

    elem.innerHTML = 'Input field';

    return true;

}