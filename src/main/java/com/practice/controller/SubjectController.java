package com.practice.controller;

import com.practice.dao.SubjectDAOIMPL;
import com.practice.model.Subject;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/subject")
public class SubjectController {

    private SubjectDAOIMPL subjectDAOIMPL = new SubjectDAOIMPL();

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMsg() {
        List<Subject> subjects = subjectDAOIMPL.getAll();
        return Response.status(200).entity(subjects).build();
    }

    @GET
    @Path("/ordered")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getOrdered() {
        List<Subject> subjects = subjectDAOIMPL.getSubjectsBySemestar();
        return Response.status(200).entity(subjects).build();
    }

    @GET
    @Path("/credits")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getSubjectsByCredits() {
        List<Subject> subjects = subjectDAOIMPL.getSubjectsByCredits();
        return Response.status(200).entity(subjects).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public  Response getOne(@PathParam("id") Long facultyId) {
        Subject subject = subjectDAOIMPL.getById(facultyId);
        return Response.status(200).entity(subject).build();
    }


    @PUT
    @Path("/update")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateSubject (Subject subject){

        subjectDAOIMPL.update(subject);

        return Response.status(204).build();
    }

    @POST
    @Path("/insert")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response insertSubject (Subject subject){

        subjectDAOIMPL.insert(subject);

        return Response.status(201).build();
    }

    @DELETE
    @Path ("/delete/{id}")
    public Response deleteSubject(@PathParam("id") Long subjectId){

        subjectDAOIMPL.delete(subjectId);

        return Response.status(204).build();
    }
}
