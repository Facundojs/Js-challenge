const { body } = require("express-validator");

module.exports = [
    body("date")
    .notEmpty().withMessage("Choose a date").bail()
    .isDate().withMessage("Choose a valid date").bail()
    .isBefore().withMessage("Choose a valid date").bail(),
    body("mount")
        .notEmpty().withMessage("Write a mount").bail()
        .isNumeric().withMessage("Just write numbers").bail(),
    body("concept")
        .notEmpty().withMessage("Write a concept").bail(),
]