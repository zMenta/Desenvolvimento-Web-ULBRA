function calcEnergy(){

var price = document.getElementById("calcPrice").value
var usage = document.getElementById("calcUsage").value
var result

result = price*usage

if(result >= 100 & result < 200){
    result = result*1.25
}else if(result > 200){
    result = result*1.5
}

document.getElementById("calcResult").innerHTML = result

}
