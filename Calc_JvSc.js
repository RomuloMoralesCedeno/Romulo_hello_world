

document.getElementById("wkNext").onclick = function() {updNextid()};

function updNextid() {
var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += " "+ userName;
var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");
var span1 = document.getElementById("operand1");
var span2 = document.getElementById("operand2");
span1.innerHTML = num1;
span2.innerHTML = num2;
var sum =parseFloat(num1) + parseFloat(num2) ;
var difference = parseFloat(num1) - parseFloat(num2);
var product = parseFloat(num1) * parseFloat(num2);
var quotient = parseFloat(num1) / parseFloat(num2);
var modResult = parseFloat(num1) % parseFloat(num2);
if (num1>0 && num2>0){
    document.getElementById("addition").innerHTML = 
"The sum of " + num1 + " and " + num2 + " is " + sum;
document.getElementById("subtraction").innerHTML = 
"The subtraction of " + num1 + " and " + num2 + " is " + difference;
document.getElementById("multiplication").innerHTML = 
"The multiplication of " + num1 + " and " + num2 + " is " + product;
document.getElementById("division").innerHTML = 
"The division of " + num1 + " and " + num2 + " is " + quotient;
document.getElementById("modulus").innerHTML = 
"The modulus of " + num1 + " and " + num2 + " is " + modResult;
if(num1 % 2 == 0)
{
document.getElementById("opeOneTyp").innerHTML = 
"The operand one  " + num1 + " is even " ;
}
else{
 document.getElementById("opeOneTyp").innerHTML = 
"The operand one  " + num1 + " is odd " ;
}
if(num2 % 2 == 0)
{
document.getElementById("opeTwoTyp").innerHTML = 
"The operand two  " + num2 + " is even " ;
}
else{
 document.getElementById("opeTwoTyp").innerHTML = 
"The operand two  " + num2 + " is odd " ;
}

}
else{
  var wk_ok= window.alert("There are an error in operands")
}
}
