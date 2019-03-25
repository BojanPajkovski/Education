<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 19.03.2019
  Time: 08:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Subject-details.jsp</title>

  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/subject/Subject-details.js" type="text/javascript"> </script>
  <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

<h1 id="errorHappend">Error happend</h1>

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
    <input type="text" name="name" placeholder="name" id ="name" onkeyup="subjectValidation()"/>
    <span id = "subjectNameValidation" class="text-warning"> *Name is required </span>
  </div>

  <div class="form-group">
    <label for="credits"> Credits</label>
    <input type="number" name="credits" placeholder="credits" id = "credits" onkeyup="subjectValidation()" />
    <span id = "subjectCreditsValidation" class="text-warning"> *Credits are required </span>
  </div>

  <div class="form-group">
    <label for="semestar"> Semestar</label>
    <input type="text" name="semestar" id="semestar" placeholder="semestar" onkeyup="subjectValidation()" />
    <span id = "subjectSemestarValidation" class="text-warning"> *Semestar is required </span>
  </div>

  <button id = "restSave" onclick="saveSubject()" class="btn btn-primary btn-sm"> SAVE</button>
</div>

<div id = "updateSuccess">

  <h2> YOU HAVE SUCCESSFULLY UPDATED THE SUBJECT</h2>

  <button class="btn btn-success" onclick='window.location ="/subject?action=list"' >GO TO SUBJECTS</button>

</div>

<div id = "insertSuccess">

  <h2> YOU HAVE SUCCESSFULLY INSERTED A SUBJECT</h2>

  <button class="btn btn-success" onclick='window.location ="/subject?action=list"' >GO TO SUBJECTS</button>

</div>

</body>
</html>
