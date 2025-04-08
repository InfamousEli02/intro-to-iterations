for (let number = 0; number < 12; number += 2 ){
    console.log(number);
    console.log("loop running");
}

//Break exercise
let pets = ["Stitch", "Koromaru", "Toothless", "Garfield" ];
for (let i = 0; i < 5; i++){
    if(i === 3){
        break;
    } else{
    console.log(pets[i]);
    }
}