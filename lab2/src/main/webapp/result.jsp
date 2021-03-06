<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="points.ValidPoint" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%

    ArrayList<ValidPoint> validPoints = (ArrayList<ValidPoint>) session.getAttribute("points");


%>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web Lab 1</title>
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
            text-align: center;
        }

        not_valid {
            text-align: center;
            font-size: 150%;
            color: red;
        }

        now_time {
            text-align: center;
            font-size: 100%;
            color: orange;
        }

        numbers {
            color: orange;
        }


    </style>
</head>

<body style = "background-color: #384349;">

<table>

    <caption style="color: #ebedee;  background-color: #384349; padding: 40px; font-family: fantasy; font-size: 300%;">
        Roman Glinskikh <numbers>P3212</numbers>. Variant <numbers>12024</numbers>
    </caption>

    <tr><th colspan="4" width="70%">Result</th><th><a style="color: black" href="test.jsp">One more attempt</a> </th></tr>
    <tr><td>Time of running </td><td> X </td><td>Y</td><td>R</td><td>Result</td></tr>

    <% for (ValidPoint validPoint : validPoints) { %>
    <tr>
        <td> <%= validPoint.getTime() %> </td>
        <td> <%= validPoint.getX() %></td>
        <td> <%= validPoint.getY() %> </td>
        <td> <%= validPoint.getR() %> </td>
        <td> <%= validPoint.getResult() %> </td></tr>
    <% } %>

</table>

</body>
</html>


