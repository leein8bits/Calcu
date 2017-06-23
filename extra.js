//onclick add button value to buffer array
//buffer [] , hold the values and operaters in order
//curentNum hold teh current number
//lastNum hold last number for post equals
//lastOper hold last operation for post equals
// inPut holds the input to display
// outPut holds the computed value for displaying

/*
functions

--canIOper(){
is value at buffer.length-1 a number
return T/F
}
--bufferHas(){ -- use with canIOper 
is buffer.length>0
return T/F
} 

*/
//document.addEventListener("click", fnc);
var opHolder; // holds +-*/ functions name to be called once = is pushed
var buffer= [];
var bufferStrung;
var curNum; 
var calcBuffer=[];
var total;
var currentOp ;
var holdingNum;
var lastCalc = calcBuffer[calcBuffer.length-1];
var digit;
function idMe(e) {
    var target = (e.target) ? e.target : e.srcElement;
    digit =target.innerHTML;
    bufferStrung= digit;
    prt();
    test();

   curNum = bufferStrung;

}

function numNum(){
    
}

function prt(){
    document.getElementById("screen").innerHTML=bufferStrung; // change this to whatever the var that holds the whole equation is
}





/*Number.isNaN = Number.isNaN || function(value) {
    return value !== value;
}
*/
function test(){
        console.log("calcBuffer     "+ calcBuffer);
        console.log("curNum         "+ curNum);
        console.log("buffer         "+ buffer);
        console.log("bufferStrung   "+ bufferStrung);
        console.log("total          "+ total);
        console.log("holdingNum     "+ holdingNum);

}