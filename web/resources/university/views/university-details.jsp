<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 16.03.2019
  Time: 10:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>University-details</title>

  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/university/university-details.js" type="text/javascript"> </script>
  <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

    <div id="editForm"  class="container">
      <input type="number" name="id" placeholder="id" id ="id" value="${id}"hidden="true" />

      <div id = "insert" class="form-group">
        <h3 >Insert form</h3>
      </div>

      <div id = "edit" class="form-group">
        <h3 >Edit form</h3>
      </div>

      <div class="form-group">
        <label for="name"> Name</label>
        <input type="text" name="name" placeholder="name" id ="name" onkeyup="universityValidation()"/>
        <span id = "universityNameValidation" class="text-warning"> *Name is required </span>
      </div>

      <div class="form-group">
        <label for="description"> Description</label>
        <input type="text" name="description" placeholder="description" id = "description" onkeyup="universityValidation()" />
        <span id = "universityDescriptionValidation" class="text-warning"> *Description is required </span>
      </div>

      <div class="form-group">
        <label for="location"> Location</label>
        <input type="text" name="location" id="location" placeholder="location" onkeyup="universityValidation()" />
        <span id = "universityLocationValidation" class="text-warning"> *Location is required </span>
      </div>

      <button id = "restSave" onclick="saveUniversity()" class="btn btn-primary btn-sm"> SAVE</button>
    </div>

    <div id = "updateSuccess">

      <h2> YOU HAVE SUCCESSFULLY UPDATED THE UNIVERSITY</h2>

      <button class="btn btn-success" onclick='window.location ="/university?action=list"' >GO TO UNIVERSITIES</button>

    </div>

    <div id = "insertSuccess">

      <h2> YOU HAVE SUCCESSFULLY INSERTED A UNIVERSITY</h2>

      <button class="btn btn-success" onclick='window.location ="/university?action=list"' >GO TO UNIVERSITIES</button>

    </div>

</body>
</html>
