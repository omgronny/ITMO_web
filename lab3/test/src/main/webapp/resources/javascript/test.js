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
    if (x >= 0 && y >= 0) {
        correct =  x + y <= r;
    } else if (x < 0 && y >= 0) {
        correct =  x*x + y*y <= r*r;
    } else if (x < 0 && y < 0) {
        correct =  (-1)*x <= r && (-1)*y <= r/2;
    }
    return correct;
}