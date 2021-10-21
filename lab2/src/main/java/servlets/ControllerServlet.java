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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;

@WebServlet({"","/"})
public class ControllerServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        execute(request, response);

    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {


        execute(request, response);


    }

    private void execute(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("text/html");

        String receiver = "/test.jsp";

        if (request.getParameter("par_y") != null && request.getParameter("par_x") != null
                && request.getParameterValues("par_r[]") != null && request.getParameterValues("par_r[]").length != 0 && validator(request)) {
            receiver = "/AreaCheckServlet";
        }

        getServletContext().getRequestDispatcher(receiver).forward(request, response);

    }

    private boolean validator(HttpServletRequest request) {

        try {
            Double.parseDouble(request.getParameter("par_y"));
            Double.parseDouble(request.getParameter("par_x"));

            String [] rs = request.getParameterValues("par_r[]");

            for (String strR : rs) {

                double r = Double.parseDouble(strR);

            }

            return true;

        } catch (NumberFormatException e) {
            return false;
        }
    }

}
