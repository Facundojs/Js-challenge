const db = require('../../database/models');
const { validationResult } = require('express-validator')
class Operation{
    constructor(userId, typeId, concept, mount, date) {
        this.userId = userId,
        this.typeId = typeId,
        this.concept = concept,
        this.mount = mount,
        this.date = date
    }
}
module.exports = {
    all: (req, res) => {
        db.Operation.findAll()
            .then((dbres) => {
            res.send(dbres)
        })
    },
    once: async (req, res) => {
        try {
            const { id } = req.body;
            const operation = await db.Operation.findByPk(id);
            if (operation) {
                res.json({
                    operation
                })
            } else {
                res.json({
                    error: {
                        msg: "Couldn't find Op. in db"
                    },
                })
            }
        } catch (err) {
            res.json({
                error: {
                    msg: "There was an error",
                    err
                }
            })
        }
    },
    store: async (req, res) => {
        let resultValidation = validationResult(req);
        try {
            if (resultValidation.errors.length > 0) {
                res.json({
                    errors: resultValidation,
                })
            } else {
                console.log('STORE');
                const {
                    userId,
                    typeId,
                    concept,
                    mount,
                    date
                } = req.body;
                console.log(req.body);
                const operation = new Operation(userId, typeId, concept, mount, date)
                const opInDb = await db.Operation.create(
                    operation
                )
                res.json({
                    opInDb
                })
            }
        } catch (err) {
            res.json({
                error: {
                    msg: "There was an error",
                    err
                }
            })
        }
    },
    all: async (req, res) => {
        try {
            const operations = await db.Operation.findAll({
                where: {
                    userId: req.body.id
                },
            })
            if (operations) {
                res.json(operations)
            }
        } catch (err) {
            res.json({
                error:{
                    msg:"There was an error"
                }
            })
        }
    },
    lastOps: async (req, res) => {
        console.log('LAST OP');
        try {
            const operations = await db.Operation.findAll({
                where: {
                    userId: req.body.id
                },
                limit: 10,
                order: [['id', 'DESC']]
            })
            if (operations) {
                let accum = 0;
                operations.forEach((element) => {
                    if (element.typeId == 1) {
                        return accum += element.mount
                    } else if(element.typeId == 2){
                        return accum -= element.mount
                    }
                })
                res.json({
                    operations,
                    total: accum
                })
            }
        } catch (err) {
            res.json({
                error:{
                    msg:"There was an error"
                }
            })
        }
    },
    update: async (req, res) => {
        try {            
            let resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                res.json({
                    errors: resultValidation
                })
            } else {
                const {
                    concept,
                    mount,
                    date
                } = req.body;
                const id = Number(req.body.id)
                console.log("UPDATE BODY: ", req.body)
                
                const operationToUpdate = await db.Operation.findByPk(req.body.id);
                
                if (operationToUpdate) {
                    const updatedOperation = await db.Operation.update({
                        concept: concept,
                        mount: mount,
                        date: date
                    }, {
                        where: {id: Number(id)}
                    })
                    res.json({
                        updatedOperation
                    })
                }
            }
        } catch (err) {
            res.json({
                error:{
                    msg:"There was an error"
                }
            })
        } 
    },
    destroy:(req, res) => {
        console.log("DELETE METHOD")
        console.log(req.body);
        const { id } = req.body;
        db.Operation.destroy({
            where:{id}
        })
        .then((resp) => {
        res.json({
            msg:"succefully deleted"
        })
    })
    }
}