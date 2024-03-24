
window.addEventListener("DOMContentLoaded", function () {

  var elements = document.getElementsByName("button");
  var textField = document.getElementById("text");

  for (let but of elements) {
    but.addEventListener("click", function () {

      textField.value += but.textContent;

      if (but.textContent === "C") {
        textField.value = null;
      }
      if (but.textContent === "back") {
        var newValue = textField.value.substring(0, textField.value.length - 5);
        textField.value = newValue;
      }
      if (but.textContent === "=") {
        var myString = textField.value;
        var re = /\s* \s*/;
        var tagList = myString.split(re);

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
          else if (i === "+" || i === "-" || i === "/" || i === "*" || i === "%") {
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
            if (res === 0) 
            { res += k; break; }
            if (h === "+") res += k;
            else if (h === "-") res -= k;
            else if (h === "*") res *= k;
            else if (h === "/") res /= k;
            else if (h === "%") res = k/100;
          }
        }
        textField.value = res;
      }

    });
}
})
//приоритет, обратная пользовательская запись!!!

//crud

//crm-для удовл клиент-поставщик

//github оформить
//read.me