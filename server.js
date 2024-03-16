const express = require("express");
const app = express();
const path = require("path");

// Настройка статических файлов (CSS, JS, изображения)
app.use(express.static(path.join(__dirname, "public")));

// Маршрут для загрузки HTML-страницы
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Запуск сервера
const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});