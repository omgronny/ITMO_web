<%@ page contentType="text/html;charset=utf-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="points.GraphPoint" %>

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

        .timer {
            text-align: center;
        }

    </style>
</head>

<body style = "background-color: #384349;">

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<table>
    <caption class="head">
        Roman Glinskikh <numbers>P3212</numbers>. Variant <numbers>12024</numbers>
    </caption>

    <tr><th id="elem" width="70%">Input field</th><th id="graph" width="30%">Coordinate System</th></tr>
    <tr><td>
        <form name="testForm" id="testForm" action="ControllerServlet" method="POST" class="parametersForm">

            <input type="hidden" id="x_click" name="par_x_click" size="40">
            <input type="hidden" id="y_click" name="par_y_click" size="40">

            <p><b>Your name:</b><br>
                <input style="margin: 10px;" type="text" id="name" name="name" size="40">
            </p>
            </p><p><b>Y Coordinate:</b><br>
            <input type="text" style="margin: 10px;" id="y" name="par_y" class="only_number" size="40">
            <p id="vald_y"></p>
            </p><p><b>X Coordinate:</b><br>
            <select style="margin: 10px;" name="par_x" id="x">
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
            <p><b>Parameter R:</b>
            <div>
                <input type="checkbox" style="margin: 12px;" name="par_r[]" value="1" id="1" size="40">
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


        <script src="javascript/validator.js"></script>

    </td><td class="element">

        <canvas id="circle"></canvas>

        <script src="javascript/artist.js"></script>

        <script src="javascript/clicker.js"></script>

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
        ArrayList<String> times = (ArrayList<String>) sess.getAttribute("times");

        for (int i = 0; i < rs.size(); ++i) {

            res += ("<tr class = timer><td>" + times.get(i) + "</td><td>" + xs.get(i) + " </td> <td>"
                    + ys.get(i) + "</td> <td>" + rs.get(i) + "</td> <td>"
                    + corrects.get(i) + "</td></tr>");

        }

    } catch (NullPointerException ignore) { }

%>

<table>

    <tr><th colspan="4" width="70%">Result</th><th></th></tr>
    <tr class="timer"><td>Time of running</td><td> X </td><td>Y</td><td>R</td><td>Result</td></tr>
    <%= res %>

</table>

</body>

</html>