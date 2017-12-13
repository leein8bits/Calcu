



var oldNum = "newProb";
var newNum = "";

var op = "+";
var newOp = "";



function idMe(e) {
  var target = (e.target) ? e.target : e.srcElement;

  newNum = newNum.concat(target.innerHTML);
  display();



  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + newNum + "</div>";
}

function display() {
  document.getElementById("old").innerHTML = "oldNum" + oldNum;
  document.getElementById("op").innerHTML = "op" + op;
  document.getElementById("new").innerHTML = "newNum" + newNum;
}

function opSet(check) {
  if (check === "newProb") {
    oldNum = newNum;
    newNum = "";
  }
  else {
    oldNum = opSort(oldNum, op, newNum);
    
  }
}
function opSort(oldN, op, newN) {
  var o = Number(oldN);
  var n = Number(newN);
  var op = op;
  var mathed;
  switch (op) {
    case '+':
      mathed = o + n;
      break;
    case "-":
      mathed = o - n;
      break;
    case "*":
      mathed = o * n;
      break;
    case "/":
      mathed = o / n;
      break;
      
  }

  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + mathed + "</div>";
  newNum = "";
  return mathed;
}
function equalsBut() {
  opSort(oldNum, op, newNum)
   oldNum = "newProb";
  newNum = "";
  op = "+";
  newOp = "";

}
function operBut(e) {
  var target = (e.target) ? e.target : e.srcElement;
  op = target.innerHTML;
  opSet(oldNum);
  display();
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + op + "</div>";

  newNum = "";

}
function allClear() {
  oldNum = "newProb";
  newNum = "";
  op = "+";
  newOp = "";
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>0</div>";
  display();
}
function percent(){
  var n = newNum*.1;
  newNum = n.toFixed(6);
}
function clearNum(){
  newNum ="";
  document.getElementById("screen").innerHTML = "<div id='calc_screen'></div>";

}