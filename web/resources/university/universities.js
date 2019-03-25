
var universities = [];

$(document).ready(function () {

    $('#deleteSuccess').hide();
    $('#errorHappend').hide();
    $("#filterValidation").hide();
    $("#filterResult").hide();
    $("#filterLengthValidation").hide();
    $("#tabela").hide();

        $.ajax({

            url: "/rest/university/all",
            type: "GET",
            dataType:"json",
            headers: {'token': 'magicNumber123'},
            contentType: "application/json",
            success: function(universitiesResponse,status,xhr){
                console.log("success", universitiesResponse, "status : " , status, "xhr : ", xhr.status );
                universities = universitiesResponse;
                renderTable(universities);

                $('#deleteSuccess').hide()
                $('#displayAllButton').hide();


            },

            error: function(xhr,status,error){
                console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            }
        });



})

function getUniversityStudents(){

    $.ajax({

        url: "/rest/university/students",
        type: "GET",
        dataType:"json",
        headers: {'token': 'magicNumber123'},
        contentType: "application/json",
        success: function(universityStudentsResponse,status,xhr){
            console.log("success", universityStudentsResponse, "status : " , status, "xhr : ", xhr.status );
            universities = universityStudentsResponse;
            renderTableStudents(universities);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
        }
    });

}

function editUniversity (id) {

    window.location = '/university?action=edit&id=' + id;


}

function deleteUniversity(id){

    console.log('are you sure' , id);

    $.ajax({
        url:"/rest/university/delete/" + id,
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

function addUniversity(){

    window.location = '/university?action=insert';
}

function filterValidation(){

    $("#filterValidation").hide();
}

function filterLengthValidation(){

    $("#filterLengthValidation").hide();
}



function filterByName(){
    var name = $("#searchText").val();

    if(name === null || name===undefined || name === ""){

        $("#filterValidation").show();

        return;
    }

   if(name.length < 3){

       $("#filterLengthValidation").show();

       return;
   }


    var filtered = []
    for (var i = 0; i < universities.length ; i++){
        if(universities[i].name == name){
            filtered.push(universities[i]);
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

function renderTableStudents(universityStudentsResponse){
    $.each(universityStudentsResponse,
        function(id,university){
            var tr = $("<tr></tr>");
            var tdname = $("<td></td>");
            tdname.append(university.universityName)
            var tddesc = $("<td></td>");
            tddesc.append(university.description)
            var tdStudents = $("<td></td>");
            tdStudents.append(university.numberOfStudents)



            tr.append(tdname);
            tr.append(tddesc);
            tr.append(tdStudents);
            $("#tabela-body").append(tr);
            $("#tabela").show();
            $("#backToStudents").show();
            $("#container").hide();

        })

}

function renderTable(universitiesResponse) {

    $.each(universitiesResponse,
        function(idx,university){
            var tr = $("<tr></tr>");
            var tdname = $("<td></td>");
            tdname.append(university.name)
            var tddesc = $("<td></td>");
            tddesc.append(university.description)
            var tdloca = $("<td></td>");
            tdloca.append(university.location)
            var tdaction = $("<td></td>");

            var editButton = $("<button class='btn-primary btn-sm'>Edit</button>");
            editButton.click(function(){
                editUniversity(university.id)
            });

            var deleteButton = $("<button class='btn-danger btn-sm'>Delete</button>");
            deleteButton.click(function (){
                deleteUniversity(university.id)

            })
            tdaction.append(editButton).append(deleteButton);
            tr.append(tdname);
            tr.append(tddesc);
            tr.append(tdloca);
            tr.append(tdaction);
            $("#table-body").append(tr);

        })
}

function displayAll() {
    $("#table-body").children("tr").remove();
    renderTable(universities);
    $('#displayAllButton').hide();

}
