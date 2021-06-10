function calcNumbers(){
   
    var num1 = +document.getElementById("num1").value
    var num2 = +document.getElementById("num2").value
    var calcOperation = document.getElementById("calcOperation").value
    var result

    switch(calcOperation){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        
    }

    document.getElementById("calcResult").innerHTML = result

}