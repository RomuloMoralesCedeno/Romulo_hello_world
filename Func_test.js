function readNameFun() {
    var userName = window.prompt("Please enter your name");
    document.getElementById("Name").innerHTML = userName +  ' has ' +  countWords(userName) + ' words ';
}
function countWords(logString) {
    if (typeof logString == 'string'){
        var totalSoFar = 0;
        for (var i = 0; i < logString.length; i++){
            if (logString[i] === " ") { 
                totalSoFar += 1; 
            }
        }
        totalSoFar += 1;
        return totalSoFar;
    }
    else {
     return '0';
    } 
}