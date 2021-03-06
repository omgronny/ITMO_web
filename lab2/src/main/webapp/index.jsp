<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web Lab 2</title>
    <style>

        table {
            border: 1px solid grey;
            width: 100%;
        }

        th {
            font-size: 200%;
            background-color: #32b494;
            border: 1px solid grey;
        }

        td {
            background-color: #384349;
            color: #ebedee;
            border: 1px solid grey;
        }

        img {
            width: 100%;
        }

        .head {
            color: #ebedee;
            background-color: #384349;
            padding: 40px;
            font-size: 300%;
            font-family: fantasy;
        }

        table input {
            margin: 5px;
        }

        caption pars {
            color: orange;
        }

        not_valid {
            text-align: center;
            font-size: 150%;
            color: red;
        }

        #x1,#x2,#x3,#x4,#x5,#x6,#x7,#x8,#x9 {
            background-color: orange
        }

        numbers {
            color: orange;
        }

        #circle {
            border: 1px solid red;
        }

    </style>
</head>

<body style = "background-color: #384349;">

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<table>
    <caption class="head">
        Глинских Роман <numbers>P3212</numbers>. Вариант <numbers>12024</numbers>
    </caption>

    <tr><th id="elem" width="70%">Поле ввода</th><th id="graph" width="30%">График</th></tr>
    <tr><td>
        <form name="testForm" id="testForm" action="AreaCheckServlet" method="POST" class="parametersForm">

            <input type="hidden" id="x_click" name="par_x_click" size="40">
            <input type="hidden" id="y_click" name="par_y_click" size="40">

            <p><b>Ваше имя:</b><br>
                <input style="margin: 10px;" type="text" id="name" name="name" size="40">
            </p>
            </p><p><b>Координата У:</b><br>
            <input type="text" id="y" name="par_y" class="only_number" size="40">
            <p id="vald_y"></p>
            </p><p><b>Координата Х:</b><br>
            <select name="par_x" id="x">
                <option>-2</option>
                <option>-1.5</option>
                <option>-1</option>
                <option>-0.5</option>
                <option>0</option>
                <option>0.5</option>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
            </select>
            <p><b>Параметр R:</b>
            <div>
            <input type="checkbox" name="par_r[]" value="1" id="1" size="40">
            <label for="1">1</label>
            <input type="checkbox" name="par_r[]" value="2" id="2" size="40">
            <label for="2">2</label>
            <input type="checkbox" name="par_r[]" value="3" id="3" size="40">
            <label for="3">3</label>
            <input type="checkbox" name="par_r[]" value="4" id="4" size="40">
            <label for="4">4</label>
            <input type="checkbox" name="par_r[]" value="5" id="5" size="40">
            <label for="5">5</label>
            </div>

            <p><input style="background-color: orange" type="submit"></p>

        </form>


        <script>
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
        </script>

    </td><td class="element">

        <canvas id="circle"></canvas>

        <script>
            /*
            Нужно еще сохранять в сессии точки и при открытии в цикле отрисовывать их
             */

            <%
                String ress = "";
                session = request.getSession();
                if (session.getAttribute("arXnonKras") != null) {
                    ArrayList<String> arx = (ArrayList<String>) session.getAttribute("arXnonKras");
                    ArrayList<String> ary = (ArrayList<String>) session.getAttribute("arYnonKras");
                    for (int i = 0; i < arx.size(); ++i) {
                        ress += " ctx.beginPath(); \n ctx.arc(" + arx.get(i) + "," + ary.get(i) + ", 5, 0, 2*Math.PI, false);" +
                        "ctx.closePath();\n" +
"            ctx.strokeStyle = '#32b494';\n" +
"            ctx.fillStyle = '#32b494';\n" +
"            ctx.fill();\n" +
"            ctx.stroke();";
                    }
                }

            %>

            var canvas = document.getElementById("circle"),
                ctx = canvas.getContext("2d");

            canvas.width = 450; // x
            canvas.height = 400; // y

            ctx.lineWidth = 2.0;

            ctx.beginPath();                                   // rectangle in first
            ctx.rect(225, 20, 180, 180);
            ctx.closePath();
            ctx.strokeStyle = "orange";
            ctx.fillStyle = "orange";
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();                                    // circle in third
            ctx.arc(225, 200, 180, Math.PI/2, Math.PI, false);
            ctx.lineTo(225, 200);
            ctx.lineTo(225, 380);
            ctx.closePath();
            ctx.strokeStyle = "orange";
            ctx.fillStyle = "orange";
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();                                    // triangle in fourth
            ctx.moveTo(225, 380);
            ctx.lineTo(315, 200);
            ctx.lineTo(225, 200);
            ctx.lineTo(225, 380);
            ctx.closePath();
            ctx.strokeStyle = "orange";
            ctx.fillStyle = "orange";
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();                                    // y coord
            ctx.moveTo(225, 10);
            ctx.lineTo(225, 400);

            ctx.moveTo(0, 200);
            ctx.lineTo(440, 200);                               // x coord

            ctx.moveTo(220, 20);
            ctx.lineTo(230, 20);

            ctx.moveTo(220, 100);
            ctx.lineTo(230, 100);

            ctx.moveTo(315, 195);
            ctx.lineTo(315, 205);

            ctx.moveTo(405, 195);
            ctx.lineTo(405, 205);

            ctx.moveTo(220, 380);
            ctx.lineTo(230, 380);

            ctx.moveTo(45, 195);
            ctx.lineTo(45, 205);

            ctx.closePath();
            ctx.strokeStyle = "white";
            ctx.stroke();

            ctx.lineWidth = 1.0;

            <%= ress %>

        </script>

        <script>

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
                    elem.innerHTML = '<not_valid>Введите параметр r</not_valid>';
                    return false;
                }


                var target = this.getBoundingClientRect();

                var x = (Math.round(((e.clientX - target.left - 225)/180*r_value)*10)/10);
                var y = ((Math.round((e.clientY - target.top - 200)/180*r_value*(-1)*10)/10));

                var xnonKras = e.clientX - target.left;
                var ynonKras = e.clientY - target.top;

                let submitForm = document.forms[0];

                submitForm.elements[0].value = xnonKras;
                submitForm.elements[1].value = ynonKras;

                submitForm.submit();



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
        </script>

    </td></tr>

</table>

<%
    String res = "";

    try {

        HttpSession sess = request.getSession();
        ArrayList<String> xs = (ArrayList<String>) sess.getAttribute("arX");
        ArrayList<String> ys = (ArrayList<String>) sess.getAttribute("arY");
        ArrayList<String> rs = (ArrayList<String>) sess.getAttribute("arR");
        ArrayList<String> corrects = (ArrayList<String>) sess.getAttribute("arRes");

        for (int i = 0; i < rs.size(); ++i) {

            res += ("<tr><td>Время работы скрипта</td><td>" + xs.get(i) + " </td> <td>"
                    + ys.get(i) + "</td> <td>" + rs.get(i) + "</td> <td>"
                    + corrects.get(i) + "</td></tr>");

        }

    } catch (NullPointerException ignore) { res = "<script> alert(); </script>"; }

%>

<table>

    <tr><th colspan="4" width="70%">Результат</th><th></th></tr>
    <tr><td>Время работы скрипта</td><td> X </td><td>Y</td><td>R</td><td>Результат</td></tr>
    <%= res %>

</table>

</body>

</html>