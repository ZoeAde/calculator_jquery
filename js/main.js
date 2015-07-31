$(document).ready(function() {

var buttons = $('span');
var totalScreen = $('#screen');
var totalOutput = totalScreen.text;
var totalArray = [];
var answer = "";

var cancelBtn = buttons[0];
var divideBtn = buttons[1];
var multiplyBtn = buttons[2];
var minusBtn = buttons[6];
var plusBtn = buttons[10];
var equalBtn = buttons[14];

buttons.on("click", function() {
  if (this === cancelBtn) {
    totalScreen.empty();
  }

  else if (this === equalBtn) {
    var equation = totalScreen.html();
    answer = eval(equation);
    totalScreen.html(answer);
    return answer;
  }

  else if(this === multiplyBtn) {
    totalScreen.append("*");
  }

  else if (this === divideBtn) {
    totalScreen.append("/");
  }

  else if (this === minusBtn) {
    totalScreen.append("-");
  }

  else if (this === plusBtn) {
    totalScreen.append("+");
  }

  else {
    totalScreen.append(this.innerHTML);
  }

});
});
