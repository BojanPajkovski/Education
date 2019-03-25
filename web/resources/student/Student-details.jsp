<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 07.03.2019
  Time: 12:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Student-details JSP</title>

  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/student/Student-details.js" type="text/javascript"> </script>
  <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

<h1 id="loadingMsg">Loading ...</h1>
<h1 id="errorHappend">Error happend</h1>

<div id="editForm"  class="container">

  <div id = "insert" class="form-group">
    <h3 >Insert form</h3>
  </div>

  <div id = "edit" class="form-group">
    <h3 >Edit form</h3>
  </div>


  <input type="number" name="id" placeholder="id" id ="id" value="${id}"hidden="true" />



  <div class="form-group">
    <label for="name"> Name</label>
    <input type="text" name="name" placeholder="name" id ="name" onkeyup="studentValidation()"/>
    <span id = "studentNameValidation" class="text-warning"> *Name is required field </span>
  </div>

  <div class="form-group">
    <label for="surname"> Surname</label>
    <input type="text" name="surname" placeholder="surname" id = "surname" onkeyup="studentValidation()" />
    <span id = "studentSurnameValidation" class="text-warning"> *Surname is required field </span>
  </div>

  <div class="form-group">
    <label for="age"> Age</label>
    <input type="number" name="age" id="age" placeholder="age" onkeyup="studentValidation()" />
    <span id = "studentAgeValidation" class="text-warning"> *Age is required field </span>
  </div>

  <button id = "restSave" onclick="saveStudent()" class="btn btn-primary btn-sm"> SAVE</button>
</div>

<div id = "updateSuccess">

  <h2> YOU HAVE SUCCESSFULLY UPDATED THE STUDENT</h2>

  <button class="btn btn-success" onclick='window.location ="/student?action=list"' >GO TO STUDENTS</button>

</div>

<div id = "insertSuccess">

  <h2> YOU HAVE SUCCESSFULLY INSERTED A STUDENT</h2>

  <button class="btn btn-success" onclick='window.location ="/student?action=list"' >GO TO STUDENTS</button>

</div>

</body>
</html>
