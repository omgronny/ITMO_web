$('.element').click(function(e) {
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
                    elem.innerHTML = '<not_valid>Enter the R, please</not_valid>';
                    return false;
                }

                var target = this.getBoundingClientRect();

                var x = (Math.round(((e.clientX - target.left - 225)/180*r_value)*100)/100);
                var y = ((Math.round((e.clientY - target.top - 200)/180*r_value*(-1)*100)/100));

                // xToNonKras = x * 180 / r + 225
                // yToNonKras = x * 180 / r + 220

                var xnonKras = e.clientX - target.left;
                var ynonKras = e.clientY - target.top;

                let submitForm = document.forms[0];

                submitForm.elements[0].value = xnonKras;
                submitForm.elements[1].value = ynonKras;
                submitForm.elements[3].value = y;

                select = document.getElementById('x');
                var opt = document.createElement('option');
                opt.value = x;
                opt.innerHTML = x;
                select.appendChild(opt);

                submitForm.elements[4].value = x;

                // заслать xNonKras

                submitForm.submit();

                submitForm.elements[4].remove(9);

                // remove

                var canvas = document.getElementById('circle');
                var obCanvas = canvas.getContext('2d');

                obCanvas.beginPath();
                obCanvas.arc(e.clientX - target.left, e.clientY - target.top, 5, 0, 2*Math.PI, false);
                obCanvas.fillStyle = '#32b494';
                obCanvas.fill();
                obCanvas.lineWidth = 1;
                obCanvas.strokeStyle = '#32b494';
                obCanvas.stroke();

            });