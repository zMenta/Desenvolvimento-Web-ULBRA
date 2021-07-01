$(document).ready(function(){

    








    // Error msg if the newsletter input is empty.
    $("#bt_newsletter").click(function(){

        let content = $("#f_newsletter").val();
        console.log("Button Pressed");

        if(content == ""){
            $("#warning").fadeIn(200).html("Error: The field is empty!")
            $("#warning").delay(4000).fadeOut(300)
        };

    });

});