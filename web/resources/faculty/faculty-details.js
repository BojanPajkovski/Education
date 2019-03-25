/**
 * Created by User on 18.03.2019.
 */
$(document).ready(function () {

    $('#updateSuccess').hide();
    $('#insertSuccess').hide();
    $('#facultyNameValidation').hide();
    $('#facultyDescriptionValidation').hide();
    $('#facultyLocationValidation').hide();
    $('#insert').hide();


    var id = $('#id').val();
    if (id) {
        $.ajax({

            url: "/rest/faculty/" + id,
            type: "GET",
            dataType:"json",
            contentType: "application/json",
            headers: {'token': 'magicNumber123'},
            success: function(result,status,xhr){
                console.log("success", result, "status : " , status, "xhr : ", xhr.status );


                $("#id").val(result.id);
                $("#name").val(result.name);
                $("#description").val(result.description);
                $("#location").val(result.location);
                $("#technical").val(result.tecnical);

                console.log("edit")


            },

            error: function(xhr,status,error){
                console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            }
        });

    } else{

        $('#insert').show();
        $('#edit').hide();


    }

})

function facultyValidation (){

    $("#facultyNameValidation").hide();
    $('#facultyDescriptionValidation').hide();
    $('#facultyLocationValidation').hide();
}

function saveFaculty(){

    console.log('from save faculty');

    var faculty = {};

    var id = $('#id').val();
    var name =  $('#name').val();
    var description = $('#description').val();
    var location = $('#location').val();
    var technical = $('#technical').is(':checked');

    faculty['id'] = parseInt(id);
    faculty['name'] = name;
    faculty['description'] = description;
    faculty['location']=location;
    faculty['tecnical'] = technical;

    if(id === null ||id===undefined ||id==="" ){

        if(name===null || name==="" || name===undefined) {

            $('#facultyNameValidation').show();
            return;

        } else if(description===null || description==="" || description===undefined) {

            $('#facultyDescriptionValidation').show();
            return;

        } else if(location===null || location==="" || location===undefined) {

            $('#facultyLocationValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/faculty/insert",
            type: "POST",
            data: JSON.stringify(faculty),
            contentType: "application/json",
            headers: {'token': 'magicNumber123'},
            success: function(result,status,xhr){

                console.log("success", result, "status : " , status, "xhr : ", xhr.status );
                $('#editForm').hide();
                $('#insertSuccess').show();
            },

            error: function(xhr,status,error){
                $('#errorHappend').show();
                console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            }
        });

    } else{

        if(name===null || name==="" || name===undefined) {

            $('#facultyNameValidation').show();
            return;

        } else if(description===null || description==="" || description===undefined) {

            $('#facultyDescriptionValidation').show();
            return;

        } else if(location===null || location==="" || location===undefined) {

            $('#facultyLocationValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/faculty/update",
            type: "PUT",
            dataType:"json",
            data: JSON.stringify(faculty),
            contentType: "application/json",
            headers: {'token': 'magicNumber123'},
            success: function(result,status,xhr){

                console.log("success", result, "status : " , status, "xhr : ", xhr.status );
                $('#editForm').hide();
                $('#updateSuccess').show();

            },

            error: function(xhr,status,error){
                $('#errorHappend').show();

                console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
            }
        })
    }

}