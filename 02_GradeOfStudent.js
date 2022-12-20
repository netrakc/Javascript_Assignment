// Write a function using switch case to find the grade of a student based on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

class StudentMarks {
    msgToUser = prompt("Enter your any Message : ");

    constructor(msgToUser){
        this.msgToUser = msgToUser;
    }

    userInputMarks = () => {
        userMarks = parseInt(prompt("Enter your marks : "));
    }
    
    checkGrade = () =>{
    
        switch (userInputMarks){
    
            case (this.userInputMarks > 90 && this.userInputMarks < 100):
                console.log("S Grade");
                break;
            case (this.userInputMarks > 80 && this.userInputMarks < 90):
                console.log("A Grade");
                break;
            case (this.userInputMarks > 70 && this.userInputMarks < 80):
                console.log("B Grade");
                break;
            case (this.userInputMarks > 60 && this.userInputMarks < 70):
                console.log("C Grade");
                break;
            case (this.userInputMarks > 50 && this.userInputMarks < 60):
                console.log("D Grade");
                break;
            case (this.userInputMarks > 40 && this.userInputMarks < 50):
                console.log("E Grade");
                break;
            default:
                console.log("Your Marks is Invalid.....!");
        }
    }
}

classMarks = StudentMarks();
console.log(classMarks.checkGrade());