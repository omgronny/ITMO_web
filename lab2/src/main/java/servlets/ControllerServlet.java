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


    private void execute(HttpServletRequest request, HttpServletResponse response) {

        response.setContentType("text/html");

        String receiver = request.getParameterMap().isEmpty() ? "/test.jsp" : "/AreaCheckServlet";
        getServletContext().getRequestDispatcher(receiver).forward(request, response);

    }

}
