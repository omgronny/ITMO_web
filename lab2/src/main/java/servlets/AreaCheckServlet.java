package servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;

@WebServlet(value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        execute(request, response);

    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        execute(request, response);

    }

    private void execute(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        long start = System.currentTimeMillis();

        double par_y;
        double par_x;
        boolean isClick;

        if (request.getParameter("par_y_click") != null && !request.getParameter("par_y_click").equals("")) {
            par_y = Double.parseDouble(request.getParameter("par_y_click"));
            par_x = Double.parseDouble(request.getParameter("par_x_click"));
            isClick = true;
        } else {
            par_y = Double.parseDouble(request.getParameter("par_y"));
            par_x = Double.parseDouble(request.getParameter("par_x"));
            isClick = false;
        }

        String [] rs = request.getParameterValues("par_r[]");

        HttpSession session = request.getSession();
        ArrayList<String> arxNonBeaut = new ArrayList<>();              // все + все некрасивые
        ArrayList<String> aryNonBeaut = new ArrayList<>();
        ArrayList<String> arr = new ArrayList<>();
        ArrayList<String> arres = new ArrayList<>();
        ArrayList<String> times = new ArrayList<>();

        ArrayList<String> arxBeaut = new ArrayList<>();             // все + все красивые
        ArrayList<String> aryBeaut = new ArrayList<>();

        for (String strR : rs) {

            double r = Double.parseDouble(strR);

            double x_beaut = par_x;
            double y_beaut = par_y;

            if (isClick) {
                x_beaut = ( (double) Math.round( ( (par_x - 225) / 180*r ) *10 ) ) / 10;
                y_beaut = ( (double) Math.round( ( (par_y - 200) / ((-1)*180)*r )*10) ) / 10;
            }

            arxNonBeaut.add(String.valueOf(par_x));
            aryNonBeaut.add(String.valueOf(par_y));
            arxBeaut.add(String.valueOf(x_beaut));
            aryBeaut.add(String.valueOf(y_beaut));
            arr.add(strR);
            arres.add(validator(x_beaut, y_beaut, r));

            long finish = System.currentTimeMillis();
            long elapsed = finish - start;
            times.add((elapsed + 1) + " ms");


        }

        if (session.getAttribute("arX") != null) {

            arxBeaut.addAll((ArrayList<String>) session.getAttribute("arX"));
            aryBeaut.addAll((ArrayList<String>) session.getAttribute("arY"));

            arxNonBeaut.addAll((ArrayList<String>) session.getAttribute("arXnonKras"));
            aryNonBeaut.addAll((ArrayList<String>) session.getAttribute("arYnonKras"));

            arr.addAll((ArrayList<String>) session.getAttribute("arR"));
            arres.addAll((ArrayList<String>) session.getAttribute("arRes"));

            times.addAll((ArrayList<String>) session.getAttribute("times"));

        }

        session.setAttribute("arX", arxBeaut);
        session.setAttribute("arY", aryBeaut);

        session.setAttribute("arXnonKras", arxNonBeaut);
        session.setAttribute("arYnonKras", aryNonBeaut);

        session.setAttribute("arR", arr);
        session.setAttribute("arRes", arres);

        session.setAttribute("times", times);

        request.setAttribute("xs", arxBeaut);
        request.setAttribute("ys", aryBeaut);
        request.setAttribute("rs", arr);
        request.setAttribute("corrects", arres);
        request.setAttribute("times", times);

        ServletContext servletContext = getServletContext();
        RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher("/result.jsp");
        requestDispatcher.forward(request, response);
        //response.sendRedirect("/result.jsp");

    }

    private String validator(double x, double y, double r) {

        boolean result = false;

        if (x >= 0 && y > 0) {
            result = x < r && y < r;
        } else if (x >= 0 && y <= 0) {
            result = y > 2 * x - r;
        } else if (x <= 0 && y <= 0) {
            result = Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2);
        }

        return (result ? "Point hit the area" : "Point did not hit the area");

    }

}
