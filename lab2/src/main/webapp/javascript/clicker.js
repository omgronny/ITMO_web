$('.element').click(function(e) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'ControllerServlet', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let rs = "";

    let r = document.getElementsByName("par_r[]");

    var ln = 0;
    var r_value = 0;
    for(var i=0; i< r.length; i++) {
        if(r[i].checked) {
            rs += "&par_r%5B%5D=" + encodeURIComponent(r[i].value);
            r_value = r[i].value;
            ln++;
        }
    }

    if (ln == 0) {
        elem.innerHTML = '<not_valid>Введите параметр r</not_valid>';
        return false;
    }

    var target = this.getBoundingClientRect();

    $('#coord-click').html((Math.round(((e.clientX - target.left - 225)/180*r_value)*10)/10) + ", " + ((Math.round((e.clientY - target.top - 200)/180*r_value*(-1)*10)/10)));

    var canvas = document.getElementById('circle');
    var obCanvas = canvas.getContext('2d');

    obCanvas.beginPath();
    obCanvas.arc(e.clientX - target.left, e.clientY - target.top, 5, 0, 2*Math.PI, false);
    obCanvas.fillStyle = '#32b494';
    obCanvas.fill();
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = '#32b494';
    obCanvas.stroke();

    var x = Math.round(((e.clientX - target.left - 225)/180*r_value)*10)/10;
    var y = Math.round((e.clientY - target.top - 200)/180*r_value*(-1)*10)/10;

    xmlhttp.send("par_x=" + encodeURIComponent(x) + "&par_y=" + encodeURIComponent(y) + rs);

    // let response = fetch('ControllerServlet', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: ("par_x=" + encodeURIComponent(x) + "&par_y=" + encodeURIComponent(y) + rs)
    // });

    // let submitForm = document.forms[0];
    //
    // submitForm.elements[1].value = y;
    // округлить х
    // submitForm.elements[2].value = x;
    // submitForm.submit();

    // let submitForm = document.forms[0];
    //
    // submitForm.elements[1].value = y;
    // submitForm.elements[2].innerHTML = submitForm.elements[2].innerHTML + "<option>" + x + "</option>";
    // submitForm.elements[2].value = x;
    // submitForm.submit();
    // submitForm.elements[2].options.remove(9);

});