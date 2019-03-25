/**
 * Created by User on 16.03.2019.
 */


    $(document).ready(function () {

        $('#updateSuccess').hide();
        $('#insertSuccess').hide();
        $('#universityNameValidation').hide();
        $('#universityDescriptionValidation').hide();
        $('#universityLocationValidation').hide();
        $('#insert').hide();

        var id = $('#id').val();
        if (id) {
            $.ajax({

                url: "/rest/university/" + id,
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



                },

                error: function(xhr,status,error){
                    console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
                }
            });

        }else{

            $('#insert').show();
            $('#edit').hide();


        }

    })

function universityValidation (){

    $("#universityNameValidation").hide();
    $('#universityDescriptionValidation').hide();
    $('#universityLocationValidation').hide();
}

function saveUniversity(){

    console.log('from save');

    var university = {};

    var id = $('#id').val();
    var name =  $('#name').val();
    var description = $('#description').val();
    var location = $('#location').val();

    university['id'] = parseInt(id);
    university['name'] = name;
    university['description'] = description;
    university['location']=location;

    if(id === null ||id===undefined ||id==="" ){

        if(name===null || name==="" || name===undefined) {

            $('#universityNameValidation').show();
            return;

        } else if(description===null || description==="" || description===undefined) {

            $('#universityDescriptionValidation').show();
            return;

        } else if(location===null || location==="" || location===undefined) {

            $('#universityLocationValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/university/insert",
            type: "POST",
            data: JSON.stringify(university),
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

            $('#universityNameValidation').show();
            return;

        } else if(description===null || description==="" || description===undefined) {

            $('#universityDescriptionValidation').show();
            return;

        } else if(location===null || location==="" || location===undefined) {

            $('#universityLocationValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/university/update",
            type: "PUT",
            dataType:"json",
            data: JSON.stringify(university),
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