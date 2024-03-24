
// // for Concatation code 
const a = document.getElementById("alert").onclick
function myFunction() {
   let a ="Have a nice day";
   let b = "Bilal Ayyub😊";
   let c = a+b;
   console.log(c);
   let d = document.getElementById("orginal-content");
   d.innerHTML = " let a = Have a nice day let b = Bilal Ayyub😊 ";
   let e = document.getElementById("output-result"); 
   e.innerHTML = a+""+b;
}

// // // for full Name number code 
const b = document.getElementById("alertNum").onclick
function alertNum() {
    let firstName = prompt("Enter Your First Name:");
    let lastName = prompt("Enter Your last Name:");
    let fullName = firstName + "" + lastName;
    let a = document.getElementById("orginal-content");
    a.innerHTML = "fullName =" + firstName + ""+ "lastName =" + lastName;
    let e = document.getElementById("output-result"); 
    e.innerHTML =  "fullName =" + fullName ;
}
// // // for Comparison Operator Code 
const variable = document.getElementById("showVariable").onclick
function showVariable() {
    let num1 = prompt("Enter Your Number:")
    let num2= prompt("Enter Your last Number:")
    if(num1==num2){
        console.log("true");
        let a = document.getElementById("orginal-content");
        a.innerHTML = "num1 ==  num2";
        let e = document.getElementById("output-result"); 
        e.innerHTML =  "Condition is true 😊" ;
        e.style.color = "green";
    }
    else{
        console.log("False");
        let a = document.getElementById("orginal-content");
        a.innerHTML = "num1 !==  num2";
        let e = document.getElementById("output-result"); 
        e.innerHTML =  "Condition is false 😒" ;
        e.style.color = "red";
    }
  

}


// // // for camelCase  Example Code 
const camel = document.getElementById("camelCase").onclick
function camelCase() {
   let marks = prompt("Enter your marks:");
   if(marks>=40){
    console.log("pass");
    let e = document.getElementById("output-result"); 
    e.innerHTML =  "You passed in Exmas😊" ;
    e.style.color = "green";
    if(marks>=70){
        console.log("pass");
        let e = document.getElementById("output-result"); 
        e.innerHTML =  "You got B  grade in Exmas😊" ;
        e.style.color = "lightred";
    }
    if(marks>90){
        console.log("pass");
        let e = document.getElementById("output-result"); 
        e.innerHTML =  "You got A+ grade in Exmas😊" ;
        e.style.color = "green";
    }

   }
   else{
    console.log("Fail");
    e.innerHTML =  "You passed fail 😒" ;
    e.style.color = "red";
   }

}
// // // for testing set code 
const sum = document.getElementById("sumNum").onclick
function sumNum() {
    let age =  prompt("Enter your age:");
    let weight = prompt("Emter your weight:") ;
    if(age<=13 || weight>=20){
        let e = document.getElementById("output-result");
        e.innerHTML = "Your are a baby 😂"
    }
    if(age>=14 || weight>=20){
        let e = document.getElementById("output-result")
        e.innerHTML = "Your are a teenager and healthy 😊"
    }
    else {
        let e = document.getElementById("output-result")
        e.innerHTML = "Your are old and healthy 😊 "
    }

}
//  for if nested code 
const substract = document.getElementById("sumSubtract").onclick
function sumSubtract() {
    let userName = prompt("Enter your username:") ;
    if(userName = "Bilal Ayyub")
    {
        let e = document.getElementById("output-result");
        e.innerHTML = "Your Username is correct 😊";
       
    }
    else(userName != "Bilal Ayyub")
    {
        let e = document.getElementById("output-result");
        e.innerHTML = "Your Username is incorrect 😢";
    }
   

}
// // // for multiply two Numbers code 
const mul = document.getElementById("sumMul").onclick
function sumMul() {
    let userName = prompt("Enter your username:");
    let passWord = prompt("Enter your password:");
    if(passWord=userName){ 
    let e = document.getElementById("output-result");
    e.innerHTML = "try username Bilal Ayyub and 9000-0912 as a password";
    }
   
}


// // for clear statements code
const clrs = document.getElementById("clr").onclick
function clr() {
    let d = document.getElementById("orginal-content");
    d.innerHTML = "";
}
// // for clear result
const results = document.getElementById("result").onclick
function res() {
    let d = document.getElementById("output-result");
    d.innerHTML = "";
}
