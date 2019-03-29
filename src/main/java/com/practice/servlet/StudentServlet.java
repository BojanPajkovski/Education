package com.practice.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by User on 08.03.2019.
 */
public class StudentServlet extends HttpServlet {

    private static final String INSERT_OR_EDIT = "resources/student/Student-details.jsp";

    private static final String LIST_ALL_STUDENTS = "resources/student/Students.jsp";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String forward = "";

        if(request.getParameter("action").equalsIgnoreCase("edit")){

            forward = INSERT_OR_EDIT;
            Long id = Long.parseLong(request.getParameter("id"));
            request.setAttribute("id", id);

        } else if (request.getParameter("action").equalsIgnoreCase("insert")){

            forward =  INSERT_OR_EDIT;
        } else if(request.getParameter("action").equalsIgnoreCase("list")){

            forward =  LIST_ALL_STUDENTS;
        }

        request.getRequestDispatcher(forward).forward(request, response);
    }
}
