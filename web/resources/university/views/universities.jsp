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
    <title>Universities.jsp</title>

  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/university/universities.js" type="text/javascript"> </script>
  <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

<div id = "errorHappend">

  <h3> AN ERROR HAPPEND </h3>

</div>

<div id="tabela" class="container">
  <h2>University Students Table</h2>
  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Number of Students</th>

    </tr>
    </thead>
    <tbody id="tabela-body">

    </tbody>
  </table>

  <div id = backToUniversities>

    <button  class="btn btn-success" onclick='window.location ="/university?action=list"' >BACK TO UNIVERSITIES</button>
  </div>

  </div>





<div id="container" class="container">
  <h2>Universities Table</h2>
  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Location</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody id="table-body">

    </tbody>
  </table>

  <div class="form-group">
    <button class="btn btn-primary btn-sm" onclick="addUniversity()">Add University</button>
  </div>

  <%--<div class="form-group">
    <button class="btn btn-primary btn-sm" onclick="orderByStudents()">Order by Students</button>
  </div>--%>

  <div class="form-group">
    <button  id= "universityStudents" class="btn btn-primary btn-sm" onclick="getUniversityStudents()">Get university students</button>
  </div>


  <div class="form-group">
    <input id="searchText" type="text" onkeyup="filterValidation();filterLengthValidation()">
    <span id = "filterValidation" class="text-warning"> *You must enter text to do filter</span>
    <span id = "filterLengthValidation" class="text-warning"> *You must enter at least three characters to do filter</span>
    <button class="btn btn-primary btn-sm" onclick="filterByName()">Filter Universities</button>

  </div>

  <div class="form-group">
  <button  id= "displayAllButton" class="btn btn-primary btn-sm" onclick="displayAll()">All Universities</button>

</div>

</div>



<div id = "deleteSuccess">

  <h2> YOU HAVE SUCCESSFULLY DELETED THE UNIVERSITY</h2>

  <button class="btn btn-success" onclick='window.location ="/university?action=list"' >GO TO UNIVERSITIES</button>

</div>

<div id ="filterResult">

  <h2> We diidnt find any match... Please try again</h2>
  <button class="btn btn-success" onclick='window.location ="/university?action=list"' >BACK TO UNIVERSITIES</button>

</div>




</body>
</html>
