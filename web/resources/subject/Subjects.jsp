<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 08.03.2019
  Time: 15:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Subjects.jsp</title>

  <script src="resources/library/jquery-3.3.1.min.js" type="text/javascript"></script>
  <script src="resources/subject/Subjects.js" type="text/javascript"> </script>
  <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>
</head>
<body>

<h1 id="loadingMsg">Loading ...</h1>
<h1 id="errorHappend">Error happend</h1>



<div id="container" class="container">
  <h2>Subjects Table</h2>
  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Credits</th>
      <th>Semestar</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody id="table-body">

    </tbody>
  </table>

  <div class="form-group">
    <button class="btn btn-primary btn-sm" onclick="addSubject()">Add Subject</button>
  </div>

  <div class="form-group">
    <input id="searchText" type="text" onkeyup="filterValidation()">
    <span id = "filterValidation"  class="text-warning"> *You must enter text to do filter</span>
    <button class="btn btn-primary btn-sm" onclick="filterSubjectByName()">Filter Subjects</button>
  </div>

  <div class="form-group">
    <button class="btn btn-primary btn-sm" onclick="orderBySemestar()">Order Subjects by Semestar</button>
  </div>

  <div class="form-group">
    <button class="btn btn-primary btn-sm" onclick="orderByCredits()">Order Subjects by Credits</button>
  </div>


  <button  id= "displayAllButton" class="btn btn-primary btn-sm" onclick='window.location ="/subject?action=list"'>All Subjects</button>

</div>

<div id = "deleteSuccess">

  <h2> YOU HAVE SUCCESSFULLY DELETED THE SUBJECT</h2>

  <button class="btn btn-success" onclick='window.location ="/subject?action=list"' >GO TO SUBJECTS</button>

</div>


</body>
</html>
