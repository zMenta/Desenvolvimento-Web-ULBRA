$(document).ready(function(){

    $(".button").click(function(){
        
        let cep = $(".cep").val()

       let url = "https://viacep.com.br/ws/"+cep+"/json/"

       $.get(url,function(data){
            $("#answer").html(
                
                "Cidade: "+data.localidade+"<br>"+
                "UF: "+data.uf


                )
       });

    });
    
});