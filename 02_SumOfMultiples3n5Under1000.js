// Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000.

let num = parseInt(input("Enter the limit of number : "));

class SumOfMultipleThreeAndFive {

    constructor(){

    }

    for(let a = 1; a <= num.length; a++){
        try{
            if (a % 3 == 0 && a % 5 == 0){
                sum = sum + a;
            }
        }catch(error){
            console.log("Number Not Found.....!");
        }

    } 
}