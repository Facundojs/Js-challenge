const db = require('../../database/models')
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
module.exports = {
    loginProcess: async (req, res) => {
        try{
        const { email, password } = req.body;
        const user = await db.User.findOne({ where: { email }, include: 'operations' });
        if(!user){
            res.json({
                error:{
                    msg: "User not found",
                },
                token: "There's not token"
            })
        } else {
            if (user.dataValues.password === password) {
                jwt.sign({ user }, 'secretKey',{expiresIn: '1h'}, (err, token) => {
                    res
                    .json({
                        msg: "The user was succefully finded",
                        token,
                        status: 200
                        //users
                    })
                    .sendStatus(200)
                })
            } else {
                res
                .json({
                    error: {
                        msg: "Wrong credentials",  
                    },
                    status: 400
                })
                .sendStatus(400)
            }
            }
        } catch (err) {
            res.json({
                error: {
                    msg: "There was an error"
                }
            })
        }
    },
    getUser: (req, res) => {
        jwt.verify(req.token, "secretKey", (error, authData) => {
            delete authData.user.password;
            if (error) {
                res.sendStatus(403)
            } else {
                res.json({
                    msg: "USER VALIDATED",
                    authData: authData
                })
            }
        })
    },
    registerProcess: async (req, res) => {
        try {
            let resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                console.log("ResultValidation: ",resultValidation)
                res.json({
                    errors: resultValidation,
                })
            } else {                
                const {
                    first_name,
                    last_name,
                    email,
                    password
                } = req.body;
                const existInDb = await db.User.findOne({ where: { email } });
                const avatar = req.file ? req.file.originalName : 'default.jpg';
                if (existInDb) {
                    res.json({
                        error:{
                            msg: "The email is already registered"
                        }
                    })
                } else {
                    db.User.create({
                        first_name,
                        last_name,
                        email,
                        password,
                        avatar
                    })
                        .then((user) => {
                        delete user.dataValues.password
                            res.json({
                            msg: "User successfully registered", 
                            user
                        })
                    })
                }
            }
        } catch (err) {
            res.json({
                error: {msg: "There was an problem with connection"}
            })
        }
    }
}