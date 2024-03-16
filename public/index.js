window.addEventListener("DOMContentLoaded", function () {
  // Получение элементов кнопки и текстового поля
  var button = document.getElementById("button");
  var textField = document.getElementById("text");

  // Обработчик события клика на кнопку
  button.addEventListener("click", function () {
    // Перенос значения кнопки в текстовое поле
    textField.value = button.value;
    console.log("ого");
  });
});
