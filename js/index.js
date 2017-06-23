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


// new addtions 
var curNumBuf;
var curOpBuf;
var calcBuf =[];
var strungCB;


function idMe(e) {
    var target = (e.target) ? e.target : e.srcElement;
   
    
    test();
   curNum = bufferStrung;
   curNumBuf= numNum(curNumBuf, target.innerHTML);
   
   prtCur(curNumBuf);




}
 function numNum(cnb,string){
         if(cnb==void 0){
                 cnb= string;

         }else if( cnb != void 0){
                 cnb= cnb.concat(string);
         }
         return cnb;
 }

 function prtCur(string){
         var cnb='';
         strungCB = calcBuf.join('');
         if(curNumBuf!= void 0){
                 cnb = curNumBuf;

         }
         document.getElementById("screen").innerHTML=string + "<div id='calc_screen'>" + strungCB + cnb + "</div>";
         
 }
function setOp(last,string){
        if(!isNaN(last)){
                return string;
        }else{
                return false;
        }
}



function equalsBut(){
        if(calcBuffer.length===1){
        calcBuffer.push(currentOp);
        calcBuffer.push(holdingNum);
        holdingNum= void 0;

        totalString=calcBuffer.join('');
        console.log(totalString.toString());
        total = eval(totalString);
        document.getElementById("screen").innerHTML=total;
        calcBuffer =[];
        bufferStrung =void 0;
        
        
        calcBuffer.push(total);
        console.log("= button was spushed calcBuffer length ===1");
        test();

}
        if(calcBuffer.length>=2){
        calcBuffer.push(curNum);                
        totalString=calcBuffer.join('');
        
        total = eval(totalString);
        console.log(totalString.toString()+ " = " + total);
        document.getElementById("screen").innerHTML=total;
        holdingNum = curNum;
                calcBuffer= void 0;
        calcBuffer =[];
        calcBuffer.push(total);
        console.log("= button was spushed cbl greater than 1");
        test();
        
}
   curNum=holdingNum;
        
}

// hold num1 and num2  and have a function for each operator to do the work
/*function addBut(){
        if(holdingNum!= void 0){
                holdingNum = void 0;
        }
        if(curNum!==void 0){
        calcBuffer.push(curNum);
        calcBuffer.push('+');
       
        document.getElementById("screen").innerHTML="+";
        clearBuffer();
        console.log("add button was spushed");
        test();
        currentOp = "+";
}
 if(curNum===void 0 && isNaN(calcBuffer[calcBuffer.length-1])){ // so we can change operator

calcBuffer.splice(-1,1);
calcBuffer.push('+');
console.log("operator was changed to +");
currentOp = "+";
}
}
*/
function operBut(e){
        var target = (e.target) ? e.target : e.srcElement;
        if(curNumBuf != void 0){
                calcBuf.push(curNumBuf);
                curNumBuf=void 0;
                calcBuf.push(target.innerHTML);
                prtCur(target.innerHTML);

        }
}


    




function divBut(){
        if(curNum!==void 0){
        calcBuffer.push(curNum);
        calcBuffer.push('/');
       
        document.getElementById("screen").innerHTML="/";
        clearBuffer();
        console.log("div button was spushed");
        test();
        currentOp = "/";
}
if(curNum===void 0 && calcBuffer.length>0){ // so we can change operator

calcBuffer.splice(-1,1);
calcBuffer.push('/');
console.log("operator was changed to /");
currentOp = "/";

}
}
function minusBut(){
        if(holdingNum){
                holdingNum=void 0;
                calcBuffer.push('-');
        }
       else if(curNum!==void 0){
        calcBuffer.push(curNum);
        calcBuffer.push('-');
       
        document.getElementById("screen").innerHTML="-";
        clearBuffer();
        console.log("minus button was spushed");
        test();
        currentOp = "-";
}
 else if(curNum===void 0 && calcBuffer.length>0){ // so we can change operator

calcBuffer.splice(-1,1);
calcBuffer.push('-');
console.log("operator was changed to -");
currentOp = "-";

}
}
function multiBut(){
        if(curNum!==void 0){
        calcBuffer.push(curNum);
        calcBuffer.push('*');
       
        document.getElementById("screen").innerHTML="*";
        clearBuffer();
        console.log("times button was spushed");
        test();
        currentOp = "*";
}
 if(curNum===void 0 && calcBuffer.length>0){ // so we can change operator

calcBuffer.splice(-1,1);
calcBuffer.push('*');
console.log("operator was changed to *");
currentOp = "*";

}
}
function clearBuffer(){
        curNum= undefined;
        buffer = [];
        bufferStrung= undefined;
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