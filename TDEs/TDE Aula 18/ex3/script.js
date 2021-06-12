function highNumber(){
    
let typed = document.getElementById("typedNumbers").value
let numbers = typed.split(",")
let high = +numbers[0]

// Ariel Teachings 
// console.log(numbers.reduce((prev,current)=>Number(prev)+Number(current),0))

for(let num of numbers){

    if(+num > high){
        high = num
    }

}

document.getElementById("answer").innerHTML = high

}
