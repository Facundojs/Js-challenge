const db = require("../../database/models")
const { body } = require("express-validator");

module.exports = [
    body("typeId")
        .notEmpty().withMessage("Select an operation type").bail()
        .custom((value, { req }) => {
            const valuesOk = [1, 2, "1", "2"]
            if (!valuesOk.includes(value)) {
                throw new Error("Choose a valid operation type")
            } else {
                return true
            }
        }),
    body("date")
        .notEmpty().withMessage("Choose a date").bail()
        .isDate().withMessage("Choose a valid date").bail()
        .isBefore().withMessage("Choose a valid date").bail(),
    body("mount")
        .notEmpty().withMessage("Write a mount").bail()
        .isNumeric().withMessage("Just write numbers").bail(),
    body("concept")
        .notEmpty().withMessage("Write a concept").bail(),
    body("userId")
        .notEmpty().withMessage("There was an error with connection. Please restart server").bail()
        .custom(async (value, { req }) => {
            const existInDb = await db.User.findByPk(value);
            console.log(value);
            console.log(existInDb);
            if (existInDb) {
                return true
            } else {
                throw new Error("There was an error with user logged")
            }
        })
]