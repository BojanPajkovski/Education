package com.practice.servlet;

import com.practice.dao.FacultyDAOIMPL;
import com.practice.model.Faculty;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by User on 04.03.2019.
 */
public class FacultyServlet extends HttpServlet {

    private static final String INSERT_OR_EDIT = "resources/faculty/views/faculty-details.jsp";

    private static final String LIST_FACULTIES = "resources/faculty/views/faculties.jsp";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        String action = request.getParameter("action");

        String forward = "";

        if(action.equalsIgnoreCase("edit")){
            forward = INSERT_OR_EDIT;
            Long id = Long.parseLong(request.getParameter("id"));
            request.setAttribute("id", id);
        }else if(action.equalsIgnoreCase("insert")){
            forward = INSERT_OR_EDIT;
        }
        else if(action.equalsIgnoreCase("list")){
            forward = LIST_FACULTIES;

        }

        request.getRequestDispatcher(forward).forward(request, response);
    }

}
