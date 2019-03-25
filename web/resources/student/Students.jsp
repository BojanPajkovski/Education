<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 20.03.2019
  Time: 08:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Students.jsp</title>
  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/student/Students.js" type="text/javascript"> </script>
  <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

<div id = "errorHappend">

  <h3> AN ERROR HAPPEND </h3>

</div>

<div id = "tabela" class = "container">

  <h2>Student's subjects Table</h2>
  <table class="table">
    <thead>
    <tr>
      <th>Subjects</th>
      <th>Credits</th>
      <th>Message</th>
    </tr>
    </thead>
    <tbody id="tabela-body">

    </tbody>
  </table>

  <div id = backToStudents>

    <button  class="btn btn-success" onclick='window.location ="/student?action=list"' >BACK TO STUDENTS</button>
  </div>

</div>



<div id="container" class="container">
  <h2>Students Table</h2>
  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody id="table-body">

    </tbody>
  </table>

  <div class="form-group">
    <button class="btn btn-primary btn-sm" onclick="addStudent()">ADD STUDENT</button>
  </div>

  <div class="form-group">
    <input id="searchText" type="text" onkeyup="filterValidation()">
    <span id = "filterValidation" class="text-warning"> *You must enter text to do filter</span>
    <button class="btn btn-primary btn-sm" onclick="filterByName()">Filter Students</button>

  </div>

  <div id="specific" class="form-group">

    <input type="number" name="specificAge" id="specificAge" placeholder="specificAge" onkeyup="specificAgeValidation()" />
    <span id = "specificAgeValidation" class="text-warning"> *You must enter the specific age</span>
    <button  id= "specificAgeStudent" class="btn btn-primary btn-sm" onclick="getSpecificAgeStudent()">Get Students with the specific age</button>

  </div>


  <div class="form-group">
    <button  id= "displayAllButton" class="btn btn-primary btn-sm" onclick="displayAll()">All Students</button>
  </div>


</div>




</div>

<div id = "deleteSuccess">

  <h2> YOU HAVE SUCCESSFULLY DELETED THE STUDENT</h2>

  <button class="btn btn-success" onclick='window.location ="/student?action=list"' >GO TO STUDENTS</button>

</div>

<div id ="filterResult">

  <h2> We diidnt find any match... Please try again</h2>
  <button  class="btn btn-success" onclick='window.location ="/student?action=list"' >BACK TO STUDENTS</button>

</div>

</body>
</html>
