
var students = [];
var studentSubjects =[];

$(document).ready(function () {

    $('#deleteSuccess').hide();
    $('#errorHappend').hide();
    $("#filterValidation").hide();
    $("#specificAgeValidation").hide();
    $("#filterResult").hide();
    $("#tabela").hide();

    $.ajax({

        url: "/rest/student/all",
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(studentsResponse,status,xhr){
            console.log("success", studentsResponse, "status : " , status, "xhr : ", xhr.status );
            students = studentsResponse;
            renderTable(students);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            $('#errorHappend').show();
        }
    });



})

function editStudent (id) {

    window.location = '/student?action=edit&id=' + id;


}

function deleteStudent(id){

    console.log('are you sure' , id);

    $.ajax({
        url:"/rest/student/delete/" + id,
        type: "DELETE",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success:function(result,status,xhr){

            $('#deleteSuccess').show();
            $('#container').hide();

        },

        error: function(result,status,xhr){

            $('#errorHappend').show();
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
        }
    })
}

function addStudent(){

    window.location = '/student?action=insert';
}

function filterValidation(){

    $("#filterValidation").hide();
}

function specificAgeValidation(){

    $("#specificAgeValidation").hide();
}

function getSpecificAgeStudent(){

    var specificAge = $("#specificAge").val();
    var aged = [];

    for(var i = 0; i<students.length;i++){

        if(students[i].age ==specificAge){

            aged.push(students[i]);
        }

    }

    console.log('aged ', aged);
    $( "#table-body" ).children("tr").remove();
    renderTable(aged);
    $('#displayAllButton').show();
    $('#specific').hide();
}



function filterByName(){
    var name = $("#searchText").val();

    if(name === null || name===undefined || name === ""){

        $("#filterValidation").show();

        return;
    }

    var filtered = []
    for (var i = 0; i < students.length ; i++){
        if(students[i].name == name){
            filtered.push(students[i]);
        }
    }

    if(filtered.length === 0||filtered.length ===null){

        $("#filterResult").show();
        $("#container").hide();

        return;
    }

    console.log('filtered ', filtered);
    $( "#table-body" ).children("tr").remove();
    renderTable(filtered)
    $('#displayAllButton').show();

}

function displaySubjectsForStudent( id ){

    $.ajax({

        url: "/rest/student/credits/" +id,
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(studentSubjectResponse,status,xhr){
            console.log("success", studentSubjectResponse, "status : " , status, "xhr : ", xhr.status );
            studentSubjects = studentSubjectResponse;
            renderDtoTable(studentSubjects);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();
            $('#backToStudents').show();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            $('#errorHappend').show();
        }
    });
}

function renderDtoTable(studentSubjectResponse) {


    $.each(studentSubjectResponse.subjectList,
        function(id,subject){
            var tr = $("<tr></tr>");

            var tdname = $("<td></td>");
            tdname.append(subject.name)

            var tdCredits = $("<td></td>");
            tdCredits.append(subject.credits)

            var tdSemestar = $("<td></td>");
            tdSemestar.append(subject.semestar)

            var tdaction = $("<td></td>");

            var editButton = $("<button class='btn-primary btn-sm'>Edit</button>");
            editButton.click(function(){
                editSubject(subject.id)
            });

            var deleteButton = $("<button class='btn-danger btn-sm'>Delete</button>");
            deleteButton.click(function (){
                deleteSubject(subject.id)

            })
            tdaction.append(editButton).append(deleteButton);
            tr.append(tdname);
            tr.append(tdCredits);
            tr.append(tdSemestar);
            tr.append(tdaction);
            $("#tabela-body").append(tr);
            $("#tabela").show();
            $("#backToStudents").show();
            $("#container").hide();

        });
        var tr = $("<tr></tr>");
        var tdCredits = $("<td></td>");
        tdCredits.append(studentSubjectResponse.credits)
        var tdMessage = $("<td></td>");
        tdMessage.append(studentSubjectResponse.message)
        tr.append(tdMessage);
        tr.append(tdCredits);
        $("#tabela-body").append(tr);

}

function renderTable(studentsResponse) {

    $.each(studentsResponse,
        function(id,student){
            var tr = $("<tr></tr>");
            var tdname = $("<td></td>");
            tdname.append(student.name)
            var tdsurname = $("<td></td>");
            tdsurname.append(student.surname)
            var tdage = $("<td></td>");
            tdage.append(student.age)
            var tdaction = $("<td></td>");

            var editButton = $("<button class='btn-primary btn-sm'>Edit</button>");
            editButton.click(function(){
                editStudent(student.id)
            });

            var deleteButton = $("<button class='btn-danger btn-sm'>Delete</button>");
            deleteButton.click(function (){
                deleteStudent(student.id)

            })

            var subjectsForStudents = $("<button class='btn-primary btn-sm'>Subjects for student</button>");
            subjectsForStudents.click(function (){
                displaySubjectsForStudent(student.id)

            })


            tdaction.append(editButton).append(deleteButton).append(subjectsForStudents);
            tr.append(tdname);
            tr.append(tdsurname);
            tr.append(tdage);
            tr.append(tdaction);
            $("#table-body").append(tr);

        })
}

function displayAll() {
    $("#table-body").children("tr").remove();
    renderTable(students);
    $('#displayAllButton').hide();
    $('#specific').show();

}

function orderStudentsByAge(){

    $.ajax({

        url: "/rest/student/ordered",
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(studentsResponse,status,xhr){
            console.log("success", studentsResponse, "status : " , status, "xhr : ", xhr.status );
            students = studentsResponse;
            $("#table-body").children("tr").remove();
            renderTable(students);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            $('#errorHappend').show();
        }
    });


}

