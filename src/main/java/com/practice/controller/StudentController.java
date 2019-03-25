package com.practice.controller;


import com.practice.dao.FacultyDAOIMPL;
import com.practice.dao.StudentDAOIMPL;
import com.practice.dto.StudentSubjectDTO;
import com.practice.model.Student;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/student")
public class StudentController {

    private StudentDAOIMPL studentDAOIMPL = new StudentDAOIMPL();

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        List<Student> students =studentDAOIMPL.getAll();
        return Response.status(200).entity(students).build();
    }

    @GET
    @Path("/ordered")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getOrdered() {
        List<Student> students =studentDAOIMPL.getStudentsByAge();
        return Response.status(200).entity(students).build();
    }

    @GET
    @Path("/credits/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getBySubjectAndCredits(@PathParam("id") Long studentId) {
       StudentSubjectDTO student = studentDAOIMPL.getSubjectsForStudent(studentId);
        return Response.status(200).entity(student).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public  Response getOne(@PathParam("id") Long studentId) {
        Student student = studentDAOIMPL.getById(studentId);
        return Response.status(200).entity(student).build();
    }

    @PUT
    @Path("/update")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update (Student student){

        studentDAOIMPL.update(student);

        return Response.status(204).build();
    }

    @POST
    @Path("/insert")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response insertStudent (Student student){

        studentDAOIMPL.insert(student);

        return Response.status(201).build();
    }

    @DELETE
    @Path ("/delete/{id}")
    public Response deleteFaculty(@PathParam("id") Long facultyId){

        studentDAOIMPL.delete(facultyId);

        return Response.status(204).build();
    }
}
