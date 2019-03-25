package com.practice.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by User on 16.03.2019.
 */
public class UniversityServlet extends HttpServlet{

    private static final String INSERT_OR_EDIT = "resources/university/views/university-details.jsp";

    private static final String LIST_UNIVERSITIES = "resources/university/views/universities.jsp";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



        String action = request.getParameter("action");

        String forward = "";

        if(action.equalsIgnoreCase("edit")){

            forward = INSERT_OR_EDIT;
            int id = Integer.parseInt(request.getParameter("id"));
            request.setAttribute("id", id);
        }else if(action.equalsIgnoreCase("insert")){
            forward = INSERT_OR_EDIT;
        }
        else if(action.equalsIgnoreCase("list")){
            forward = LIST_UNIVERSITIES;

        }

        request.getRequestDispatcher(forward).forward(request, response);
    }
}
