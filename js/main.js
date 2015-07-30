$(document).ready(function() {

var buttons = $('.buttons span');
var totalScreen = $('#screen');
var totalOutput = totalScreen.text;
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

function arraySum(array) {
  var sum = "";
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


buttons.on("click", function() {

  if ('#cancel') {
    totalScreen.empty();
  }

  else if('.operators')
    totalScreen.append(this.innerHTML);
  else
    totalScreen.append(value(this));
});




//var x = totalScreen.html();


//operator is index [1];




});
