/**
 * Created by User on 16.03.2019.
 */


$(document).ready(function () {

    $('#errorHappend').hide();
    $('#updateSuccess').hide();
    $('#insertSuccess').hide();
    $('#subjectNameValidation').hide();
    $('#subjectCreditsValidation').hide();
    $('#subjectSemestarValidation').hide();
    $('#insert').hide();

    var id = $('#id').val();
    if (id) {
        $.ajax({

            url: "/rest/subject/" + id,
            type: "GET",
            dataType:"json",
            headers: {'token': 'magicNumber123'},
            contentType: "application/json",
            success: function(result,status,xhr){
                console.log("success", result, "status : " , status, "xhr : ", xhr.status );


                $("#id").val(result.id);
                $("#name").val(result.name);
                $("#credits").val(result.credits);
                $("#semestar").val(result.semestar);



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

function subjectValidation (){

    $("#subjectNameValidation").hide();
    $('#subjectCreditsValidation').hide();
    $('#subjectSemestarValidation').hide();
}

function saveSubject(){

    console.log('from save');

    var subject = {};

    var id = $('#id').val();
    var name =  $('#name').val();
    var credits = $('#credits').val();
    var semestar = $('#semestar').val();

    subject['id'] = parseInt(id);
    subject['name'] = name;
    subject['credits'] = credits;
    subject['semestar']=semestar;

    if(id === null ||id===undefined ||id==="" ){

        if(name===null || name==="" || name===undefined) {

            $('#subjectNameValidation').show();
            return;

        } else if(credits===null || credits==="" || credits===undefined) {

            $('#subjectCreditsValidation').show();
            return;

        } else if(semestar===null || semestar==="" || semestar===undefined) {

            $('#subjectSemestarValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/subject/insert",
            type: "POST",
            data: JSON.stringify(subject),
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

            $('#subjectNameValidation').show();
            return;

        } else if(credits===null || credits==="" || credits===undefined) {

            $('#subjectCreditsValidation').show();
            return;

        } else if(semestar===null || semestar==="" || semestar===undefined) {

            $('#subjectSemestarValidation').show();
            return;
        }

        $.ajax({

            url: "/rest/subject/update",
            type: "PUT",
            dataType:"json",
            headers: {'token': 'magicNumber123'},
            data: JSON.stringify(subject),
            contentType: "application/json",
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
