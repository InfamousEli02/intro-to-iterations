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
//While loop example
// let foodPlaces = ["McDonalds", "BK", "Wendys", "Chick-Fil-A",];

// let i = 0;

// while(i < foodPlaces.length){
//     console.log(`The restaurant is ${foodPlaces[1]}`);
//     1++; // or i = i + 1; 
// }
// console.log("done running loop");

//Looping Triangle exercise
let sum = "";
while(sum.length < 7){
    sum += "#"
    console.log(sum);
}