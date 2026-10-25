const checkOddEven = (num) => {
    if(num%2===0){
        return "Even";

    }else{
        return "odd";
    }
    // Write your code here

};
let number = 15;
console.log(number +" is "+ checkOddEven (number) + " Number ");

module.exports = checkOddEven;