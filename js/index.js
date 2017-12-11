

var curButt = "";
var tempNum = "";


var oldNum = "";
var newNum = "";

var op = "newProb";
var newOp = "";



function idMe(e) {
  var target = (e.target) ? e.target : e.srcElement;
  curButt =  target.innerHTML;
  newNum=newNum.concat(curButt);
  display();


  
  document.getElementById("screen").innerHTML= "<div id='calc_screen'>" + newNum + "</div>";
}
// take number press and add to current number until a operator button is pressed.
function display(){
  document.getElementById("old").innerHTML= oldNum;
  document.getElementById("op").innerHTML= op;
  document.getElementById("new").innerHTML= newNum;
}

function opSet(check){
     if(check ==="newProb"){
       
       
       oldNum = newNum;
       newNum="";
     }
     else{
       oldNum = opSort(oldNum,op,newNum);
       // remove next line once equals button works

        

     }
}
function opSort(oldN,op,newN){
var o = Number(oldN);
var n = Number(newN);
var op= op;
var mathed;
switch(op){
  case '+':
  mathed= o+n;

  break;
  case "-":
  mathed = o-n;
  break;
  case "*":
  mathed = o*n;
  break;
  case "/":
  mathed = o/n;
  break;
}
oldNum=mathed;
document.getElementById("screen").innerHTML= "<div id='calc_screen'>" + oldNum + "</div>";
return mathed;
}
function equalsBut(){
  opSort(oldNum,op,newNum)

}
function operBut(e){
        var target = (e.target) ? e.target : e.srcElement;
       op = target.innerHTML;
       display();
       document.getElementById("screen").innerHTML= "<div id='calc_screen'>" + op + "</div>";
       opSet(op);
       newNum="";

        }