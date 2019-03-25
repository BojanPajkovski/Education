<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 04.03.2019
  Time: 21:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title> Faculties.jsp</title>

    <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
    <script src="resources/faculty/faculties.js" type="text/javascript"> </script>
    <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

<div id = "errorHappend">

    <h3> AN ERROR HAPPEND </h3>

</div>

<div id="container" class="container">
    <h2>Faculties Table</h2>
    <table class="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Technical</th>
        </tr>
        </thead>
        <tbody id="table-body">

        </tbody>
    </table>

    <div class="form-group">
        <button class="btn btn-primary btn-sm" onclick="addFaculty()">Add Faculty</button>
    </div>

    <div class="form-group">
        <input id="searchText" type="text" onkeyup="filterValidation()">
        <span id = "filterValidation" class="text-warning"> *You must enter text to do filter</span>
        <button class="btn btn-primary btn-sm" onclick="filterByFacultyName()">Filter Faculties</button>
    </div>


    <button  id= "displayAllButton" class="btn btn-primary btn-sm" onclick="displayAllFaculties()">All Faculties</button>

</div>

<div id = "deleteSuccess">

    <h3> YOU HAVE SUCCESSFULLY DELETED THE FACULTY</h3>

    <button class="btn btn-success" onclick='window.location ="/faculty?action=list"' >GO TO FACULTIES</button>

</div>


</body>
</html>
