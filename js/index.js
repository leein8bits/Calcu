var oldNum = "newProb";
var newNum = "";
var eqBool = false;
var op = "";
var newOp = "";
var opBool =false;

function idMe(e) {
  var target = (e.target) ? e.target : e.srcElement;
  if (eqBool){
    //allClear();
    eqBol=false;
    opBool=false;
  }
  newNum = newNum.concat(target.innerHTML);
  display();
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + newNum + "</div>";
  opBool=false;
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
    return;
  } else if (eqBool) {} else {
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
  // newNum = "";
  return mathed.toFixed(6);
}

function equalsBut() {
  newOp = op;
  oldNum = opSort(oldNum, op, newNum);
  //newNum = "";
  //op = "+";
  op = newOp;
  display();
  eqBool=true;
}

function operBut(e) {
  var target = (e.target) ? e.target : e.srcElement;
  
  opSet(oldNum);
  display();
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + op + "</div>";
  newNum = "";
  opBool=true;
}

function allClear() {
  oldNum = "newProb";
  newNum = "";
  op = "+";
  newOp = "";
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>0</div>";
  display();
}

function percent() {
  var n = newNum * .01;
  newNum = n.toFixed(6);
  display();
}

function clearNum() {
  newNum = "";
  document.getElementById("screen").innerHTML = "<div id='calc_screen'></div>";
}