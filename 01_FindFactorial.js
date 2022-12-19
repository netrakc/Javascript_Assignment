const readline = readline('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
readline.quesFactNum('Enter any number to find the factorial : ', factNum =>{
    console.log(`Your Entered Number is ${factNum}`);
    readline.close();
})

findFactorialNum = (factNum) => {
    try{
        if (factNum < 0){
            console.log("Factoria of the negative number does not exist.");
        }else if(factNum == 0){
            console.log(`Factorial of the ${factNum} is 1`);
        }else if(factNum > 0){
            let fact = 1;
            for(var i = 1; i <= fact; fact++){
                fact *= i;
            }
            console.log(`The factorial of the ${factNum} is `,fact);
        }
    }catch(error){
        console.log("The number does not exit.");
    }
}
console.log("The factorial of the given number is : ",findFactorialNum(factNum));





