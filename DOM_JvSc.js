
var mylist = document.getElementById("your");
var newline = document.createElement("li");
var newtext = document.createTextNode('last Chocolate ');
newline.appendChild(newtext);
mylist.appendChild(newline);
var newline2 = document.createElement('li');
var newtext2 = document.createTextNode("lemon");
var mylistItems =mylist.children;
newline2.appendChild(newtext2);
mylist.insertBefore(newline2,mylistItems[0]);


var newH1 = document.createElement("h1");
newH1.innerText="New text in page";
var newText = document.createTextNode("Hi, I'm new here romulo");
var day = document.getElementById("day");
day.innerHTML="Good";
var paragraph = document.getElementById("myParagraph");
paragraph.onclick = changeGreeting;
var myIm = document.getElementById("myImage").onmouseover = imageChange;
function imageChange() {
    var source = document.getElementById("myImage").getAttribute("src");
    document.getElementById("myImage").setAttribute("src", "tripa.jpg");
    document.body.style.backgroundColor = "yellow";
}
function myLinkChange() {
    document.getElementById("myLink").setAttribute("href", "http://www.microsoft.com");
}
function changeGreeting(){
    paragraph.innerHTML = "Good Night!";
}