package com.practice.dao;

import com.practice.connection.DbConection_Singleton_Pattern;
import com.practice.dto.UniversityStudents;
import com.practice.model.University;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 08.11.2018.
 */
public class UniversityDAOIMPL {

    public void delete(int id) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;


        try {


            stmt = conn.createStatement();
            String sqlQuery = "DELETE from university  where university.id = ";
            sqlQuery += id;
            stmt.execute(sqlQuery);

        } catch (Exception ex) {
            ex.printStackTrace();
        }


    }

    public void insert(University university) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        PreparedStatement stmt = null;
        ResultSet rst = null;


        try {


            String sqlQuery = "INSERT INTO university (name , description,location) VALUES(?,?,?);";


            stmt = conn.prepareStatement(sqlQuery);
            stmt.setString(1, university.getName());
            stmt.setString(2, university.getDescription());
            stmt.setString(3, university.getLocation());


            stmt.executeUpdate();

        } catch (Exception ex) {
            ex.printStackTrace();
        }


    }

    public void update(University university) {


        Connection conn = DbConection_Singleton_Pattern.getConnection();
        // Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rst = null;

        /*String dbUrl ="jdbc:mysql://localhost:3006/education?useSSL=false";
        String user = "root";
        String pass ="root";*/

        try {

            //conn = DriverManager.getConnection(dbUrl,user,pass);

            String sqlQuery = "UPDATE university SET  name = ?,description = ?,location =? WHERE id = ? ";

            //UPDATE Users SET password=?, fullname=?, email=? WHERE username=?";

            stmt = conn.prepareStatement(sqlQuery);

            stmt.setString(1, university.getName());
            stmt.setString(2, university.getDescription());
            stmt.setString(3, university.getLocation());
            stmt.setInt(4, university.getId());

            stmt.execute();

        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }

    public University getById(int id) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;


        try {


            stmt = conn.createStatement();

            String sqlQuery = "SELECt * from university as u where u.id = ";
            sqlQuery += id;
            rst = stmt.executeQuery(sqlQuery);

            while (rst.next()) {

                int universityID = rst.getInt("id");
                String universityName = rst.getString("name");
                String universityDesc = rst.getString("description");
                String universityLocation = rst.getString("location");

                University university = new University(universityID,universityName, universityDesc, universityLocation);

                return university;

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    public List<University> getAll() {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;

        List<University> universities = null;


        try {



            stmt = conn.createStatement();
            String sqlQuery = "SELECt * from university";

            rst = stmt.executeQuery(sqlQuery);

            universities = new ArrayList<University>();


            while (rst.next()) {

                int universityID = rst.getInt("id");
                String universityDesc = rst.getString("description");
                String universityName = rst.getString("name");
                String universityLocation = rst.getString("location");

                University university = new University(universityID,universityName, universityDesc, universityLocation);

                universities.add(university);


            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return universities;


    }

    public List<UniversityStudents> getUniversityStudents() {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;

        List<UniversityStudents> universities = null;


        try {



            stmt = conn.createStatement();
            String sqlQuery = "SELECT count(u.id) as numberOfStudents, u.*  FROM student as s inner join faculty as f on f.id = s.faculty \n" +
                    "inner join university as u on u.id = f.universityId group by u.id DESC";

            rst = stmt.executeQuery(sqlQuery);

            universities = new ArrayList<UniversityStudents>();


            while (rst.next()) {


                String universityName = rst.getString("name");
                String universityDesc = rst.getString("description");
                int numberOfStudents = rst.getInt("numberOfStudents");

                UniversityStudents university = new UniversityStudents(universityName,universityDesc, numberOfStudents);

                universities.add(university);


            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return universities;


    }


}