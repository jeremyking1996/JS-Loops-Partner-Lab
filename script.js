
//Part One

// //for (let celsius=0;celsius<=100;celsius++){
//     console.log(celsius);
// }
//     for (let fahrenheit=32; fahrenheit <=212; fahrenheit ++)  {      
//     console.log(fahrenheit); 

// //}


let celsius=0

while (celsius<=100) {
    fahrenheit = ((celsius*9/5) +32);
    console.log(fahrenheit)
    celsius++
}

let userNumber= prompt ("Enter a number:");
console.log (userNumber);

let sum=0;
for (let i = 1 ; i <= userNumber; i++){
sum+=i;

}
console.log(sum);

//+ for userNumber  + for );



//Part Two

// Problem 1:

console.log ("Meter         Yards" )

for (let m=10; m<=300; m+=10){
    let y = (m*1.0936);
    console.log (m + "           "+ y);
}

// Problem 2:

