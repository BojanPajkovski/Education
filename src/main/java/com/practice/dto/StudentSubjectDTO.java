package com.practice.dto;

import com.practice.model.Subject;

import java.util.List;

/**
 * Created by User on 20.03.2019.
 */
public class StudentSubjectDTO {

    private List<Subject> subjectList;
    private String studentName;
    private String subjectName;
    private float credits;
    private String message;

    public StudentSubjectDTO(List<Subject> subjectList, float credits, String message) {
        this.subjectList = subjectList;
        this.credits = credits;
        this.message = message;
    }

    public StudentSubjectDTO(List<Subject> subjectList,  String studentName , String subjectName,float credits,String message) {

        this.subjectList = subjectList;
        this.subjectName = subjectName;
        this.studentName = studentName;
        this.credits = credits;
        this.message = message;
    }

    public List<Subject> getSubjectList() {
        return subjectList;
    }

    public void setSubjectList(List<Subject> subjectList) {
        this.subjectList = subjectList;
    }
    public String getMessage() {return message;}

    public void setMessage(String message) {this.message = message;}

    public float getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }
}

