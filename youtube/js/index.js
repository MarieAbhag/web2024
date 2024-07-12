// let age = 10;
// console.log (`you are ${age} years old`);
// let gpa = 2.1;
// console.log(typeof gpa);


// let fullName = "Bro Code";
// let age = 24;
// let student = false;


// document.getElementById("p1").textContent =` your Name is ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student; 


// let students = 30;
// students -=   1

// console.log(students);

// let userName;
// userName = window.prompt("what is your favourite color?");



// const decreaseBtn =document.getElementById("decreaseBtn");
// const resetBtn =document.getElementById("resetBtn");
// const increaseBtn =document.getElementById("increaseBtn");
// const countLable = document.getElementById("countLable");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLable.textContent=count;

// }

// resetBtn.onclick = function(){
//     count=0;
//     countLable.textContent = count;
// }

// decreaseBtn.onclick = function (){
//     count--;
//     countLable.textContent = count;

// }



// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payBalBtn = document.getElementById("payBalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult =document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function(){

//     if (myCheckBox.checked) {
//         subResult.textContent = "you are subscribed"
//     } else {
//         subResult.textContent = "you are not subscribed";
//     }


    
//     if (visaBtn.checked) {
//         paymentResult.textContent = "you choosed Visa"
        
//     } else if (masterCardBtn.checked) {
//         paymentResult.textContent = "you choosed mastercard"

//     } else if (payBalBtn.checked) {
//         paymentResult.textContent = "you choosed paybal"

//     }else{
//         paymentResult.textContent = "you must choose payment"
//     }  


    
// }


// let time = 16;

// let message =time  >= 14 ? "good afternoon":"good morning";
// console.log(message);


// let day = 5 ;
// switch(day){
//     case 1 :
//         console.log ("it is saturday"); 
//     break;
//     case 2 :
//         console.log("it is sunday")
//     break;

//     default:
//         console.log(`${day} is not correct`);
// }

// let testScore = 80;
// let letterGrade;

// switch(true){
//     case  testScore >= 90:
//     letterGrade = "A";
//     break;
//     case testScore >= 82:
//     letterGrade = "B"
//     break;

//     default:
//     letterGrade = "you didnot get anything";
// }

// console.log(letterGrade)




// const fullName = "Bro code";

// let firstName = fullName.slice(0,3);
// console.log(firstName);




const fullName = "Broseph Code";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "));
console.log(firstName);
console.log(lastName);



























