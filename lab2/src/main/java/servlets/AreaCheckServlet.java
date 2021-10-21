package servlets;

import points.GraphPoint;
import points.ValidPoint;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;

@WebServlet(value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

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

        double par_y_click = 0.0;
        double par_x_click = 0.0;

        par_y = Double.parseDouble(request.getParameter("par_y"));
        par_x = Double.parseDouble(request.getParameter("par_x"));
        isClick = false;

        if (request.getParameter("par_y_click") != null && !request.getParameter("par_y_click").equals("")) {
            par_y_click = Double.parseDouble(request.getParameter("par_y_click"));
            par_x_click = Double.parseDouble(request.getParameter("par_x_click"));
            isClick = true;
        }

        String [] rs = request.getParameterValues("par_r[]");

        HttpSession session = request.getSession();
        ArrayList<ValidPoint> thisPoints = new ArrayList<>();
        ArrayList<GraphPoint> thisGraphPoints = new ArrayList<>();

        for (String strR : rs) {

            double r = Double.parseDouble(strR);

            double x_beaut = par_x;
            double y_beaut = par_y;

            long finish = System.currentTimeMillis();
            long elapsed = finish - start;

            ValidPoint point = new ValidPoint(x_beaut, y_beaut, r, validator(x_beaut, y_beaut, r), elapsed+1);
            thisPoints.add(point);

            if (isClick) {
                GraphPoint graphPoint = new GraphPoint(par_x_click, par_y_click, r);
                thisGraphPoints.add(graphPoint);
            }

        }

        if (session.getAttribute("points") != null) {

            ArrayList<ValidPoint> validPoints = (ArrayList<ValidPoint>) session.getAttribute("points");
            thisPoints.addAll(validPoints);

        }

        if (isClick && session.getAttribute("clicks") != null) {

            ArrayList<GraphPoint> graphPoints = (ArrayList<GraphPoint>) session.getAttribute("clicks");
            thisGraphPoints.addAll(graphPoints);

        }

        session.setAttribute("points", thisPoints);

        if (isClick) {
            session.setAttribute("clicks", thisGraphPoints);
        }

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
