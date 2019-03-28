package com.practice.dao;

import com.practice.connection.DbConection_Singleton_Pattern;
import com.practice.dto.StudentSubjectDTO;
import  com.practice.model.Student;
import com.practice.model.Subject;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 29.08.2018.
 */
public class StudentDAOIMPL {

    public void delete(long id) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;


        try {


            stmt = conn.createStatement();
            String sqlQuery = "DELETE from student  where student.id = ";
            sqlQuery += id;
            stmt.execute(sqlQuery);

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }

    }

    public void insert(Student student) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        PreparedStatement stmt = null;
        ResultSet rst = null;


        try {


            String sqlQuery = "INSERT INTO student (name , surname, age, faculty) VALUES(?,?,?,?);";


            stmt = conn.prepareStatement(sqlQuery);
            stmt.setString(1, student.getName());
            stmt.setString(2, student.getSurname());
            stmt.setInt(3, student.getAge());
            stmt.setString(4, student.getFaculty());

            stmt.executeUpdate();

        } catch (Exception ex) {
            ex.printStackTrace();

        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }
    }

    public void update(Student student) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        PreparedStatement stmt = null;
        ResultSet rst = null;


        try {


            String sqlQuery = "UPDATE student SET  name = ?,surname =?, age = ?,faculty = ? WHERE id = ? ";

            //UPDATE Users SET password=?, fullname=?, email=? WHERE username=?";

            stmt = conn.prepareStatement(sqlQuery);
            stmt.setString(1, student.getName());
            stmt.setString(2, student.getSurname());
            stmt.setInt(3, student.getAge());
            stmt.setString(4, student.getFaculty());
            stmt.setLong(5, student.getId());

            // TREBA DA SE STAI I ID ??

            stmt.execute();

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }

    }

    public Student getById(long id) {


        Connection conn = DbConection_Singleton_Pattern.getConnection(); //DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;


        try {


            stmt = conn.createStatement();

            String sqlQuery = "SELECt * from student as s where s.id = ";
            sqlQuery += id;
            rst = stmt.executeQuery(sqlQuery);

            while (rst.next()) {

                Long studentId = rst.getLong("id");
                String studentName = rst.getString("name");
                String studentSurName = rst.getString("surname");
                int studentAge = rst.getInt("age");
                String studentFaculty = rst.getString("faculty");

                Student medo = new Student(studentId, studentName, studentSurName, studentAge, studentFaculty);

                System.out.println(medo.getName());

                return medo;


            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }
        return null;
    }

    public List<Student> getAll() {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;

        List<Student> students = null;


        try {


            stmt = conn.createStatement();
            String sqlQuery = "SELECt * from student";

            rst = stmt.executeQuery(sqlQuery);

            students = new ArrayList<Student>();


            while (rst.next()) {

                Long studentId = rst.getLong("id");
                String studentName = rst.getString("name");
                String studentSurName = rst.getString("surname");
                int studentAge = rst.getInt("age");
                String studentFaculty = rst.getString("faculty");
                Student student = new Student(studentId, studentName, studentSurName, studentAge, studentFaculty);
                students.add(student);


            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }
        return students;

    }

    public List<Student> getStudentsByAge() {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;

        List<Student> students = null;


        try {


            stmt = conn.createStatement();
            String sqlQuery = "SELECt * from student ORDER BY student.age";

            rst = stmt.executeQuery(sqlQuery);

            students = new ArrayList<Student>();


            while (rst.next()) {

                Long studentId = rst.getLong("id");
                String studentName = rst.getString("name");
                String studentSurName = rst.getString("surname");
                int studentAge = rst.getInt("age");
                String studentFaculty = rst.getString("faculty");
                Student student = new Student(studentId, studentName, studentSurName, studentAge, studentFaculty);
                students.add(student);


            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }
        return students;

    }

    public List<Student> searchByNameAndSurname(String name, String surName) {

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;

        List<Student> students = null;


        try {


            stmt = conn.createStatement();
            String sqlQuery = "SELECt * from student WHERE student.name =";
            sqlQuery += "'" + name + "'";
            sqlQuery += " AND student.surname = ";
            sqlQuery += "'" + surName + "'";
            rst = stmt.executeQuery(sqlQuery);

            students = new ArrayList<Student>();


            while (rst.next()) {

                Long studentId = rst.getLong("id");
                String studentName = rst.getString("name");
                String studentSurName = rst.getString("surname");
                int studentAge = rst.getInt("age");
                String studentFaculty = rst.getString("faculty");
                Student student = new Student(studentId, studentName, studentSurName, studentAge, studentFaculty);
                students.add(student);


            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }
        return students;

    }

      public StudentSubjectDTO getSubjectsForStudent( Long id) {

        List<Subject> subjects =getSubjectForStudent(id);
        float totalCredits = getSumOfCreditsPerStudent(id);

        String message = "";
        if(totalCredits > 20){
            message = "Ja ispolnuva kvotata za krediti";
        } else {

            message=" Ne ja ispolnuva kvotata za krediti";
        }

        StudentSubjectDTO studentSubjectDTO = new StudentSubjectDTO(subjects, totalCredits, message);

        return studentSubjectDTO;

      }

    private List<Subject> getSubjectForStudent(Long studentId){

        List<Subject> subjects = new ArrayList<>();

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;

        try {

            stmt = conn.createStatement();

            String sqlQuery = " SELECT su.* FROM education.student as s inner join education.student_subject as ss on ss.student_id =s.id inner join\n" +
                    "education.subject as su on ss.subject_id =su.id where s.id= ";
            sqlQuery += studentId;

            rst = stmt.executeQuery(sqlQuery);


            while (rst.next()) {

                String subjectName = rst.getString("name");
                int subjectCredits = rst.getInt("credits");
                String subjectSemestar = rst.getString("semestar");


                Subject subject = new Subject(subjectName, subjectCredits,subjectSemestar);


                subjects.add(subject);

            }


        } catch (Exception e) {

            e.printStackTrace();
        }  finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }


        return subjects;
    }

    private float getSumOfCreditsPerStudent(Long studentId){

        float credits = 0;

        Connection conn = DbConection_Singleton_Pattern.getConnection();
        Statement stmt = null;
        ResultSet rst = null;
        try {

            stmt = conn.createStatement();

            String sqlQuery = "select SUM(s.credits) as totalCredits from education.student as su inner join education.student_subject as ss on ss.subject_id = su.id  \n" +
                    "inner join education.subject as s on s.id = ss.subject_id where ss.student_id = ";
            sqlQuery += studentId;
            sqlQuery+=" group by ss.student_id ";

            rst = stmt.executeQuery(sqlQuery);


            while (rst.next()) {

                credits = rst.getInt("totalCredits");

            }


        } catch (Exception e) {

            e.printStackTrace();
        }

        finally {

            try { conn.close(); } catch (Exception e) { e.printStackTrace(); }
        }

        return credits;
    }

}
