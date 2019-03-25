<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 12.03.2019
  Time: 18:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<html>
<head>
    <title>Faculty-Details</title>
  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/faculty/faculty-details.js" type="text/javascript"> </script>
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
    <input type="text" name="name" placeholder="name" id ="name" onkeyup="facultyValidation()"/>
    <span id = "facultyNameValidation" class="text-warning"> *Name is required </span>
  </div>

  <div class="form-group">
    <label for="description"> Description</label>
    <input type="text" name="description" placeholder="description" id = "description" onkeyup="facultyValidation()" />
    <span id = "facultyDescriptionValidation" class="text-warning"> *Description is required </span>
  </div>

  <div class="form-group">
    <label for="location"> Location</label>
    <input type="text" name="location" id="location" placeholder="location" onkeyup="facultyValidation()" />
    <span id = "facultyLocationValidation" class="text-warning"> *Location is required </span>
  </div>

  <div class="form-group">
    <label for="technical"> Technical</label>
    <input type="checkbox" name="technical" id="technical" placeholder="technical" />
  </div>

  <button id = "restSave" onclick="saveFaculty()" class="btn btn-primary btn-sm"> SAVE</button>
</div>

<div id = "updateSuccess">

  <h2> YOU HAVE SUCCESSFULLY UPDATED THE FACULTY</h2>

  <button class="btn btn-success" onclick='window.location ="/faculty?action=list"' >GO TO FACULTIES</button>

</div>

<div id = "insertSuccess">

  <h2> YOU HAVE SUCCESSFULLY INSERTED A FACULTY</h2>

  <button class="btn btn-success" onclick='window.location ="/faculty?action=list"' >GO TO FACULTIES</button>

</div>
</body>
</html>
