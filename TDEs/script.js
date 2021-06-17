function bmi_calculate(){
    weight = document.getElementById("bmi_weight").value
    height = document.getElementById("bmi_height").value / 100 // Diving it by zero so I don't need to ask the height in meters, but instead with cm
    bmi = (weight/(height*height)).toFixed(2)

    document.getElementById("bmi_ideal").innerHTML = ""
    document.getElementById("bmi_below").innerHTML = ""
    document.getElementById("bmi_above").innerHTML = ""
    document.getElementById("bmi_obese").innerHTML = ""

    if(bmi < 18.5){
        document.getElementById("bmi_below").innerHTML = bmi
    }else if(bmi < 25){
        document.getElementById("bmi_ideal").innerHTML = bmi
    }else if(bmi < 30){
        document.getElementById("bmi_above").innerHTML = bmi
    }else{
        document.getElementById("bmi_obese").innerHTML = bmi
    }

    // \_(ツ)_/¯
    // switch(bmi){
    //     case (bmi < 18.5):
    //         document.getElementById("bmi_below").innerHTML = bmi;
    //         break;
    //     case (bmi < 25):
    //         document.getElementById("bmi_ideal").innerHTML = bmi;
    //         break;
    //     case (bmi < 30):
    //         document.getElementById("bmi_above").innerHTML = bmi;
    //         break;
    //     case (bmi > 30):
    //         document.getElementById("bmi_obese").innerHTML = bmi;
    //         break;
            
    // }

}