
var subjects = [];

$(document).ready(function () {

    $('#loadingMsg').show();
    $('#container').hide();
    $('#deleteSuccess').hide();
    $('#errorHappend').hide();
    $('#filterValidation').hide();




    $.ajax({

        url: "/rest/subject/all",
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(subjectsResponse,status,xhr){
            console.log("success", subjectsResponse, "status : " , status, "xhr : ", xhr.status );
            subjects = subjectsResponse;
            renderTable(subjects);
            $('#container').show();
            $('#loadingMsg').hide();
            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
        }
    });



})


function renderTable(subjectsResponse) {

    $.each(subjectsResponse,
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
            $("#table-body").append(tr);

        })

}

function editSubject (id) {

    window.location = '/subject?action=edit&id=' + id;

}

function orderBySemestar(){

    $.ajax({

        url: "/rest/subject/ordered",
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(subjectResponse,status,xhr){
            console.log("success", subjectResponse, "status : " , status, "xhr : ", xhr.status );
            subjects = subjectResponse;
            $("#table-body").children("tr").remove();
            renderTable(subjects);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            $('#errorHappend').show();
        }
    });


}

function orderByCredits(){

    $.ajax({

        url: "/rest/subject/credits",
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(subjectResponse,status,xhr){
            console.log("success", subjectResponse, "status : " , status, "xhr : ", xhr.status );
            subjects = subjectResponse;
            $("#table-body").children("tr").remove();
            renderTable(subjects);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            $('#errorHappend').show();
        }
    });


}

function deleteSubject(id){

    console.log('From delete subject' , id);

    $.ajax({
        url:"/rest/university/delete/" + id,
        type: "DELETE",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success:function(result,status,xhr){

            $('#loadingMsg').hide();
            $('#deleteSuccess').show();
            $('#container').hide();

        },

        error: function(result,status,xhr){


            $('#errorHappend').show();
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
        }
    })
}

function addSubject(){

    window.location = '/subject?action=insert';
}

function filterValidation(){

    $("#filterValidation").hide();
}

function filterSubjectByName(){
    var name = $("#searchText").val();

    if(name === null || name===undefined || name === ""){

        $("#filterValidation").show();

        return;
    }

    var filtered = []
    for (var i = 0; i < subjects.length ; i++){
        if(subjects[i].name == name){
            filtered.push(subjects[i]);
        }
    }
    console.log('filtered ', filtered);
    $( "#table-body" ).children("tr").remove();
    renderTable(filtered)
    $('#displayAllButton').show();

}


function displayAll() {
    $("#table-body").children("tr").remove();
    renderTable(universities);
    $('#displayAllButton').hide();

}
