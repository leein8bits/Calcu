var oldNum = ""; // change to "newProb" if pancake
var newNum = "";
var eqBool = false;
var op = "";
var newOp = "";
var opBool = false;

function idMe(e) {
  var target = (e.target) ? e.target : e.srcElement;
  var tex =  (target.innerText || target.textContent);
  /* if (eqBool){
    //allClear();
    eqBol=false;
    opBool=false;
  }
  newNum = newNum.concat(target.innerHTML);
  display();
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + newNum + "</div>";
  opBool=false;
*/
  if (!oldNum && !newNum) {
    newNum = tex;


  } else if (newNum && !op) {
    newNum = newNum.concat(tex.trim());

  } else if (newNum && op && oldNum) {
    newNum = newNum.concat(tex.trim());

  } else if (newNum && op) {
    oldNum = newNum;
    newNum =  tex.trim();


  }
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
  var done = "";

  done = opSort(oldNum, op, newNum);
  //newNum = "";
  //op = "";
  allClear();
  var total = parseFloat(done);
  document.getElementById("screen").innerHTML = "<div id 'calc_screen'>" + total + "</div>";

  eqBool = true;
}

function operBut(e) {
  var target = (e.target) ? e.target : e.srcElement;
   var tex =  (target.innerText || target.textContent);
  var answer = "";
  /*opSet(oldNum);
  display();
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + op + "</div>";
  newNum = "";
  opBool=true; */

  if (!op) {
    op = tex;


  } else if (newNum && op && oldNum) {
    answer = opSort(oldNum, op, newNum);
    newNum = answer;
    op = tex;
    oldNum = "";


  } else if (newNum && op) {
    op = tex;
  }
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>" + op + "</div>";


}

function allClear() {
  oldNum = ""; // change to newProb if pancake
  newNum = "";
  op = "";
  newOp = "";
  document.getElementById("screen").innerHTML = "<div id='calc_screen'>0</div>";

}