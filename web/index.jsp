<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 04.03.2019
  Time: 21:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Index.jsp</title>
    <link rel="stylesheet" href="resources/library/css/bootstrap.css"/>

    <style type="text/css">
      .education{
        border: 1px solid black;
      }



    </style>

  </head>
  <body>

  <div class = container>


    <div class = row>
      <div class = "col-md-12 education"> EDUCATION </div>
    </div>

    <div class = row>
      <div class ="col-md-6" >
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">University</h5>
            <p class="card-text">All operation of university </p>
            <a href="http://localhost:8080/university?action=list">UNIVERSITY</a>
          </div>
        </div>
      </div>
      <div class ="col-md-6" >
        <a href="http://localhost:8080/faculty?action=list">FACULTY
        </a>
      </div>
    </div>

    <div class = row>
      <div class ="col-md-6 education" ><a href="http://localhost:8080/student?action=list">STUDENT</a></div>
      <div class ="col-md-6 education" ><a href="http://localhost:8080/subject?action=list">SUBJECT</a></div>
    </div>

  </div>

  </body>
</html>
