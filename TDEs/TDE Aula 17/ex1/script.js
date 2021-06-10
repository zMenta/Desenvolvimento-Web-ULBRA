/* Elabore uma página que contenha os scripts usando as funções prompt e alert que :
Leia um valor e imprima os resultados: “É maior que 10” ou “Não é maior que 10” ou ainda “É igual a 10”
Some dois valores lidos e imprima o resultado
Leia 2 valores e a operação a ser realizada (+, -, * ou /) e imprima o resultado (use um switch)
Leia um nome e um valor n e imprima o nome n vezes usando o laço for
Leia um nome, endereço e e-mail, armazene em um array, depois imprima na tela;
Faça o mesmo procedimento com um objeto
*/

// First Topic
var num = prompt("Type an whole number: ")

if(num > 10){
    alert(num +" is bigger than 10")
}else if(num < 10){
    alert(num +" is lesser than 10")
}else{
    alert("It's the number 10!")
}

//Second Topic
num = +prompt("Type the 1th number: ")
var num2 = +prompt("Type the 2th number: ")

alert("The sum of the numbers typed is "+(num + num2))

//Third Topic
num = +prompt("Type the 1th number: ")
num2 = +prompt("Type the 2th number: ")
var choice = prompt("What do you want to do: + , - , * , / ")

switch(choice){
    case "+":
        alert(num + num2)
        break;

    case "-":
        alert(num - num2)
        break;
    
    case "*":
        alert(num * num2)
        break;

    case "/":
        alert(num / num2)
        break;

    default:
        alert("Invalid input.")
}

//Fourth Topic
var name = prompt("Please write an name: ")
num = +prompt("How many times you want to repeat: ")

for(var i = 0; i != num; i++){
    alert((i + 1) + "th "+ name)
}

//Fifth Topic
var info = []

info["name"] = prompt("Please write a name: ")
info["email"] = prompt("Email:")
info["address"] = prompt("Address: ")

alert(info["name"])
alert(info["email"])
alert(info["address"])

//Sixth Topic
var info2 = {}

info2["name"] = prompt("Please write a name: ")
info2["email"] = prompt("Email:")
info2["address"] = prompt("Address: ")

alert(info2["name"])
alert(info2["email"])
alert(info2["address"])
