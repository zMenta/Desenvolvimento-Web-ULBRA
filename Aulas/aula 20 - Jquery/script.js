$(document).ready(function(){
    
    let hid = false
    
    $(".button").click(function(){
        
        if(hid == true){
            $("p").show()
        };
        
        if(hid == false){
            $("p").hide()
            hid = true
        };    
    });
});