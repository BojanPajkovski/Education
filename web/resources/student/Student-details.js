
$(document).ready(function () {

    $('#loadingMsg').hide();
    $('#updateSuccess').hide();
    $('#insertSuccess').hide();
    $('#studentNameValidation').hide();
    $('#studentSurnameValidation').hide();
    $('#studentAgeValidation').hide();
    $('#errorHappend').hide();
    $('#insert').hide();



    var id = $('#id').val();
    if (id) {
        $.ajax({

            url: "/rest/student/" + id,
            type: "GET",
            dataType:"json",
            contentType: "application/json",
            headers: {'token': 'magicNumber123'},
            success: function(result,status,xhr){
                console.log("success", result, "status : " , status, "xhr : ", xhr.status );
                $('#loadingMsg').hide();
                $("#id").val(result.id);
                $("#name").val(result.name);
                $("#surname").val(result.surname);
                $("#age").val(result.age);



            },

            error: function(xhr,status,error){

                console.log("error", "status : " ,status, "errpor" , error, "xhr : " , xhr)
                $('#errorHappend').show();
            }
        });

    }else{

        $('#insert').show();
        $('#edit').hide();


    }

})

function studentValidation (){

    $("#studentNameValidation").hide();
    $('#studentSurnameValidation').hide();
    $('#studentAgeValidation').hide();
}

function saveStudent(){

    console.log('from save Student');

    var student = {};

    var id = $('#id').val();
    var name =  $('#name').val();
    var surname = $('#surname').val();
    var age = $('#age').val();

    student['id'] = parseInt(id);
    student['name'] = name;
    student['surname'] = surname;
    student['age']=age;

    if(id === null ||id===undefined ||id==="" ){

        if(name===null || name==="" || name===undefined) {

            $('#studentNameValidation').show();
            return;

        } else if(surname===null || surname==="" || surname===undefined) {

            $('#studentSurnameValidation').show();
            return;

        } else if(age===null || age==="" || age===undefined) {

            $('#studentAgeValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/student/insert",
            type: "POST",
            data: JSON.stringify(student),
            headers: {'token': 'magicNumber123'},
            contentType: "application/json",
            success: function(result,status,xhr){

                console.log("success", result, "status : " , status, "xhr : ", xhr.status );
                $('#loadingMsg').hide();
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

            $('#studentNameValidation').show();
            return;

        } else if(surname===null || surname==="" || surname===undefined) {

            $('#studentSurnameValidation').show();
            return;

        } else if(age===null || age==="" || age===undefined) {

            $('#studentAgeValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/student/update",
            type: "PUT",
            dataType:"json",
            data: JSON.stringify(student),
            headers: {'token': 'magicNumber123'},
            contentType: "application/json",
            success: function(result,status,xhr){

                console.log("success", result, "status : " , status, "xhr : ", xhr.status );
                $('#edit').show();
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