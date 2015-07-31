$(document).ready(function() {

var buttons = $('.buttons span');
var totalScreen = $('#screen');
var totalOutput = totalScreen.text;
var sumTotal;
var sum;

//operators
var cancelBtn = buttons[0];
var divideBtn = buttons[1];
var multiplyBtn = buttons[2];
var minusBtn = buttons[6];
var plusBtn = buttons[10];
var equalBtn = buttons[14];

//numbers
var one = buttons[11];
var two = buttons[12];
var three = buttons[13];
var four = buttons[7];
var five = buttons[8];
var six = buttons[9];
var seven = buttons[3];
var eight = buttons[4];
var nine =  buttons[5];
var zero = buttons[15];

//number value
function value(number) {
  var numberValue = parseInt(number.innerHTML);
  return numberValue;
}

//operator value
// function symbol(operator) {
//   if (operator === divideBtn) {
//     return "/";
//   }
//   else if (operator === multiplyBtn) {
//     return "*";
//   }
//   else if (operator === plusBtn) {
//     return "+";
//   }
//   else if (operator === minusBtn) {
//     return "-";
//   }
// }


//Button Click
buttons.on("click", function() {

  sum = [];
  if (this === cancelBtn) {
    totalScreen.empty();
    sum = [];
  }

  else if(this === multiplyBtn) {
    totalScreen.append("x");
    sum.push("x");
  }

  else if (this === divideBtn) {
    totalScreen.append("/");
    sum.push("/");
    console.log(sum);
  }
  else if (this === minusBtn) {
    totalScreen.append("-");
    sum.push("-");
    console.log(sum);
  }
  else if (this === plusBtn) {
    totalScreen.append("+");
    sum.push("+");
    console.log(sum);
  }

  else if (this === equalBtn) {
    //total equation function
    sum = arraySum(sum);
    totalScreen.html(sum);
    console.log(sum);
  }
  else {
    totalScreen.append(value(this));
    sum.push(value(this));
    console.log(sum);
  }
  return sum;
});

function arraySum(sum) {
  if (sum[1] === "/") {
    sumTotal = sum[0]/sum[2];
  }
  else if (sum[1] === "x") {
    sumTotal = sum[0]*sum[2];
  }
  else if (sum[1] === "+") {
    sumTotal = sum[0] + sum [2];
  }
  else {
    sumTotal = sum[0] - sum [2];
  }
  return sumTotal;
}


});
