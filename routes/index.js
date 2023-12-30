const router = require("express").Router();
const express = require("express");
const { requestLogger, errorLogger } = require("../middlewares/logger");
const NotFoundError = require("../errors/NotFoundError");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(requestLogger);

router.use("/quote", require("./quotes"));
router.use("*", () => {
  throw new NotFoundError("Страница не найдена");
});

router.use(errorLogger);

router.use((err, req, res, next) => {
    const { statusCode = 500, message = "На сервере произошла ошибка" } = err;
    res
      .status(statusCode)
      .send({ message });
});

module.exports = router;