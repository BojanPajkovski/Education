package com.practice.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by User on 08.03.2019.
 */
public class SubjectServlet extends HttpServlet {

    private static final String INSERT_OR_EDIT_SUBJECT = "resources/subject/Subject-details.jsp";
    private static final String LIST_ALL_SUBJECTS = "resources/subject/Subjects.jsp";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String action = request.getParameter("action");
        String forward = "";

        if(action.equalsIgnoreCase("edit")){

            forward = INSERT_OR_EDIT_SUBJECT;
            Long id = Long.parseLong(request.getParameter("id"));
            request.setAttribute("id", id); // Kako go setira ?
        }

        else if(action.equalsIgnoreCase("insert")){
            forward = INSERT_OR_EDIT_SUBJECT;
        }

        else if(action.equalsIgnoreCase("list")){
            forward = LIST_ALL_SUBJECTS;

        }

        request.getRequestDispatcher(forward).forward(request, response);
    }
}
