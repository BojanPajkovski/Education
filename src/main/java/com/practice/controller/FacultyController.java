package com.practice.controller;

import com.practice.dao.FacultyDAOIMPL;
import com.practice.model.Faculty;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 04.03.2019.
 */
@Path("/faculty")
public class FacultyController {

    private FacultyDAOIMPL facultyDAOIMPL = new FacultyDAOIMPL();

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        List<Faculty> faculties =facultyDAOIMPL.getAll();
        return Response.status(200).entity(faculties).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public  Response getOne(@PathParam("id") Long facultyId) {
        Faculty faculty = facultyDAOIMPL.getById(facultyId);
        return Response.status(200).entity(faculty).build();
    }

    @PUT
    @Path("/update")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update (Faculty faculty){

        facultyDAOIMPL.update(faculty);

        return Response.status(204).build();
    }

    @POST
    @Path("/insert")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response insertFaculty (Faculty faculty){

        facultyDAOIMPL.insert(faculty);

        return Response.status(201).build();
    }

    @DELETE
    @Path ("/delete/{id}")
    public Response deleteFaculty(@PathParam("id") Long facultyId){

        facultyDAOIMPL.delete(facultyId);

        return Response.status(204).build();
    }
}
