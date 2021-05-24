const db = require('../../database/models')
const { body } = require('express-validator');

module.exports = [
    body('first_name').notEmpty().withMessage('Write a name').bail(),
    body('last_name').notEmpty().withMessage('Write a surname').bail(),
    body('email')
        .notEmpty().withMessage('Write a email').bail()
        .isEmail().withMessage('Write a email').bail(),
    body('password')
        .notEmpty().withMessage('Write a password').bail()
]