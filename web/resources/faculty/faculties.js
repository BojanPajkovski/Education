
var faculties = [];

$(document).ready(function () {

    $('#deleteSuccess').hide();
    $('#errorHappend').hide();
    $('#filterValidation').hide();

    $.ajax({

        url: "/rest/faculty/all",
        type: "GET",
        dataType:"json",
        contentType: "application/json",
        headers: {'token': 'magicNumber123'},
        success: function(facultiesAjax,status,xhr){
            console.log("success", facultiesAjax, "status : " , status, "xhr : ", xhr.status );
            faculties = facultiesAjax;
            renderTable(faculties);

            $('#deleteSuccess').hide()
            $('#displayAllButton').hide();


        },

        error: function(xhr,status,error){
            console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            $('#errorHappend').show();
        }
    });



})

function renderTable(facultiesAjax) {

    $.each(facultiesAjax,
        function(id,faculty){
            var tr = $("<tr></tr>");
            var tdname = $("<td></td>");
            tdname.append(faculty.name)
            var tddesc = $("<td></td>");
            tddesc.append(faculty.description)
            var tdloca = $("<td></td>");
            tdloca.append(faculty.location)
            var tdTecnical = $("<td></td>");
            tdTecnical.append(faculty.tecnical)
            var tdaction = $("<td></td>");

            var editButton = $("<button class='btn-primary btn-sm'>Edit</button>");
            editButton.click(function(){
                editFaculty(faculty.id)
            });

            var deleteButton = $("<button class='btn-danger btn-sm'>Delete</button>");
            deleteButton.click(function (){
                deleteFaculty(faculty.id)

            })
            tdaction.append(editButton).append(deleteButton);
            tr.append(tdname);
            tr.append(tddesc);
            tr.append(tdloca);
            tr.append(tdTecnical);
            tr.append(tdaction);
            $("#table-body").append(tr);

        })
}


function editFaculty (id) {

    window.location = '/faculty?action=edit&id=' + id;

}

function deleteFaculty(id){

    console.log('Delete Faculty' , id);

    $.ajax({
        url:"/rest/faculty/delete/" + id,
        type: "DELETE",
        dataType:"json",
        contentType: "application/json",
        headers: {'token': 'magicNumber123'},
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

function addFaculty(){

    window.location = '/faculty?action=insert';
}

function filterValidation(){

    $("#filterValidation").hide();
}

function filterByFacultyName(){
    var name = $("#searchText").val();

    if(name === null || name===undefined || name === ""){

        $("#filterValidation").show();

        return;
    }

    var filtered = []
    for (var i = 0; i < faculties.length ; i++){
        if(faculties[i].name == name){
            filtered.push(faculties[i]);
        }
    }
    console.log('filtered ', filtered);
    $( "#table-body" ).children("tr").remove();
    renderTable(filtered);
    $('#displayAllButton').show();

}


function displayAllFaculties() {
    $("#table-body").children("tr").remove();
    renderTable(faculties);
    $('#displayAllButton').hide();

}
