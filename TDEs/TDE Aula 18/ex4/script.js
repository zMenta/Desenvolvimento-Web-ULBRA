function checkAge() {
    let ages = document.getElementById("ages").value
    ages = ages.split(",")
    
    let below18 = 0
    let above18 = 0

    // console.log(ages)

    for(let num of ages){

        if(+num > 18){
            above18 += 1
        }else{
            below18 += 1
        }

    }

    document.getElementById("above18").innerHTML = above18
    document.getElementById("below18").innerHTML = below18

}