//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i <=100; i++) {
        console.log(i);
    }
}
fiveToOneHundred();

function multiplesOfThree(){
    for(let i = 3; i <=100; i = i + 3){
        console.log(i);
    }
}
multiplesOfThree();

function multiplesOfThreeOrFive(){
    for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 || i % 5 === 0){
       console.log(i);
    } 
}
}
multiplesOfThreeOrFive();

function untilNum(num){
    for(let i = 1;i <= num; i++){
        console.log(i);
    }
}
untilNum(20);

function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(2, 4));

function add(num1,num2){
    if(num1 === num2 ){
        let sum = num1 + num2;
        return sum * 3
    }else{
        return num1 + num2;
    }
   
    
    
}
console.log(add(5,5))


function isNegative(num){
    if (num < 0 ){
        return true;
    }else{
        return false;
    }
}

console.log(isNegative(3))


