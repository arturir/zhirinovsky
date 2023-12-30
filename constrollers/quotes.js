const mongoose = require("mongoose");
const Quote = require("../models/quote");

module.exports.getRandomQuote = (req, res, next) => {
    Quote.countDocuments({}) //получаем кол-во записей в БД
        .then((count) => {
            Quote.findOne().skip(Math.floor(Math.random() * count)) // получаем случайнюу запись из БД
                .then((quote) => {
                    if (!quote) {
                        throw new Error ("Не удалось получить цитату.")
                    } else {
                        res.send(quote);
                    }
                })
                .catch(next)
        })
        .catch(next)
        
}
