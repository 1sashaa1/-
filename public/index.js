window.addEventListener("DOMContentLoaded", function () {

  var elements1 = document.getElementsByName("one");
  var button1 = elements1[0];
  var elements2 = document.getElementsByName("two");
  var button2 = elements2[0];
  var elements3 = document.getElementsByName("three");
  var button3 = elements3[0];
  var elements4 = document.getElementsByName("four");
  var button4 = elements4[0];
  var elements5 = document.getElementsByName("five");
  var button5 = elements5[0];
  var elements6 = document.getElementsByName("six");
  var button6 = elements6[0];
  var elements7 = document.getElementsByName("seven");
  var button7 = elements7[0];
  var elements8 = document.getElementsByName("eight");
  var button8 = elements8[0];
  var elements9 = document.getElementsByName("nine");
  var button9 = elements9[0];
  var elements0 = document.getElementsByName("oh");
  var button0 = elements0[0];
  var elements_plus = document.getElementsByName("plus");
  var button_plus = elements_plus[0];
  var elements_minus = document.getElementsByName("minus");
  var button_minus = elements_minus[0];
  var elements_multiply = document.getElementsByName("multiply");
  var button_multiply = elements_multiply[0];
  var elements_dot = document.getElementsByName("dot");
  var button_dot = elements_dot[0];
  var elements_percent = document.getElementsByName("percent");
  var button_percent = elements_percent[0];
  var elements_divide = document.getElementsByName("divide");
  var button_divide = elements_divide[0];
  var elements_delete = document.getElementsByName("delete");
  var button_delete = elements_delete[0];
  var elements_back = document.getElementsByName("back");
  var button_back = elements_back[0];
  var elements_equals = document.getElementsByName("equals");
  var button_equals = elements_equals[0];
  var elements_equals = document.getElementsByName("equals");
  var button_equals = elements_equals[0];

  var textField = document.getElementById("text");

  button1.addEventListener("click", function () {
    textField.value += button1.textContent;
  });
  button2.addEventListener("click", function () {
    textField.value += button2.textContent;
  });
  button3.addEventListener("click", function () {
    textField.value += button3.textContent;
  });
  button4.addEventListener("click", function () {
    textField.value += button4.textContent;
  });
  button5.addEventListener("click", function () {
    textField.value += button5.textContent;
  });
  button6.addEventListener("click", function () {
    textField.value += button6.textContent;
  });
  button7.addEventListener("click", function () {
    textField.value += button7.textContent;
  });
  button8.addEventListener("click", function () {
    textField.value += button8.textContent;
  });
  button9.addEventListener("click", function () {
    textField.value += button9.textContent;
  });
  button0.addEventListener("click", function () {
    textField.value += button0.textContent;
  });
  button_plus.addEventListener("click", function () {
    textField.value += button_plus.textContent;
  });
  button_percent.addEventListener("click", function () {
    textField.value += button_percent.textContent;
  });
  button_multiply.addEventListener("click", function () {
    textField.value += button_multiply.textContent;
  });
  button_minus.addEventListener("click", function () {
    textField.value += button_minus.textContent;
  });
  button_divide.addEventListener("click", function () {
    textField.value += button_divide.textContent;
  });
  button_dot.addEventListener("click", function () {
    textField.value += button_dot.textContent;
  });
  button_delete.addEventListener("click", function () {
    textField.value = null;
  });
  button_back.addEventListener("click", function () {
    var newValue = textField.value.substring(0, textField.value.length - 1);
    textField.value = newValue;
  });
  button_equals.addEventListener("click", function () {
    //отправка текстового поля на сервер
    myString = textField.value;
    var re = /\s* \s*/;
    var tagList = myString.split(re);
    //alert(tagList);
    console.log(tagList);

    var quantity1 = 0;
    var quantity2 = 0;
    var number = [], operation = [];

    var index1 = [], index2 = [], index3 = [], index4 = [];

    for (i of tagList) {

      if (i != "+" && i != "-" && i != "/" && i != "*" && i != "%") {
        number[quantity1] = parseFloat(i);
        quantity1++;
      }
      else if (i === "+" || i === "-" || i === "/" || i === "*" || i != "%") {
        operation[quantity2] = i;
        quantity2++;

        var operation_res = operation.filter(function (element) {
          return element !== "";
        });
      }
    }
    console.log(operation);
    console.log(number);
    var res = 0;
    for (k of number) {
      for (h of operation) {
        if (res === 0) { res += k; break; }
        if (h === "+") res += k;
        else if (h === "-") res -= k;
        else if (h === "*") res *= k;
        else if (h === "/") res /= k;
        else if (h === "%") res %= k;
      }
    }
    textField.value = res;
  });

});