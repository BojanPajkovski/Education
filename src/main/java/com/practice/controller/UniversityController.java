package com.practice.controller;

import com.practice.dao.UniversityDAOIMPL;
import com.practice.dto.UniversityStudents;
import com.practice.model.University;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/university")
public class UniversityController {

    private UniversityDAOIMPL universityDAOIMPL = new UniversityDAOIMPL();

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        List<University> universities =universityDAOIMPL.getAll();
        return Response.status(200).entity(universities).build();
    }

    @GET
    @Path("/students")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUniversityStudents() {
        List<UniversityStudents> universities =universityDAOIMPL.getUniversityStudents();
        return Response.status(200).entity(universities).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public  Response getOne(@PathParam("id") int universityId) {
        University university = universityDAOIMPL.getById(universityId);
        return Response.status(200).entity(university).build();
    }

    @PUT
    @Path("/update")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update (University university){

        universityDAOIMPL.update(university);

        return Response.status(204).build();
    }

    @POST
    @Path("/insert")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response insertFaculty (University university){

        universityDAOIMPL.insert(university);

        return Response.status(201).build();
    }

    @DELETE
    @Path ("/delete/{id}")
    public Response deleteFaculty(@PathParam("id") int universityId){

        universityDAOIMPL.delete(universityId);

        return Response.status(204).build();
    }

}
