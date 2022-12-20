// Write a javascript function to check whether a Triangle is equilateral,
// Isosceles or Scalene.
class checkTriangleSide{
    
    constructor(xPara, yPara, zPara){
        this.xPara = xPara;
        this.yPara = yPara;
        this.zPara = zPara;
    }

    userInput = () => {
        xPara = parseInt(prompt("Enter the side of x : "));
        yPara = parseInt(prompt("Enter the side of y : "));
        zPara = parseInt(prompt("Enter the side of z : "));
    }
    
    checkTriangle = (xPara,yPara,zPara) => {
        if(xPara == yPara && yPara == zPara){
            console.log("Equilateral Triangle.");
        }else if(xPara == yPara || yPara == zPara || zPara == xPara){
            console.log("Isosceles Triangle.");
        }else{
            console.log("Scalene Triangle.");
        }
    }
}

s1 = new checkTriangleSide();
s1.checkTriangle(5,5,5);
