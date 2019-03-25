package com.practice.dto;

/**
 * Created by User on 21.03.2019.
 */
public class UniversityStudents {

    private String universityName;
    private String description;
    private int numberOfStudents;

    public UniversityStudents(String universityName, String description, int numberOfStudents) {
        this.universityName = universityName;
        this.description = description;
        this.numberOfStudents = numberOfStudents;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getNumberOfStudents() {
        return numberOfStudents;
    }

    public void setNumberOfStudents(int numberOfStudents) {
        this.numberOfStudents = numberOfStudents;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UniversityStudents)) return false;

        UniversityStudents that = (UniversityStudents) o;

        if (numberOfStudents != that.numberOfStudents) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;
        if (universityName != null ? !universityName.equals(that.universityName) : that.universityName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = universityName != null ? universityName.hashCode() : 0;
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + numberOfStudents;
        return result;
    }
}
