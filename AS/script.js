$(document).ready(function(){
    $(".content").hide()
    $("#start").show()


    // Start Button
    $("#bt_start").click(function(){

        $(".content").slideUp(350);
        $("#start").delay(250).slideDown(350);

    });


    // Chocolate Tart Button
    $("#bt_tart").click(function(){

        $(".content").slideUp(350);
        $("#c_tart").delay(250).slideDown(350);

    });

    // Pizza button
    $("#bt_pizza").click(function(){

        $(".content").slideUp(350);
        $("#pizza").delay(250).slideDown(350);

    });


    // Error msg if the newsletter input is empty.
    $("#bt_newsletter").click(function(){

        let content = $("#f_newsletter").val();
        console.log("Button Pressed");

        if(content == ""){
            $("#warning").fadeIn(200).html("Error: The field is empty!");
            $("#warning").delay(4000).fadeOut(300);
        }else{
            $("#warning").fadeIn(200).html("Thank you").css("color","green")
            $("#warning").delay(4000).fadeOut(300);
        };


    });

});