const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/zhirinovsky", {});

const PORT = 3000;

const app = express();
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
    console.log(`Приложение запущено на порту ${PORT}`);
  });
  