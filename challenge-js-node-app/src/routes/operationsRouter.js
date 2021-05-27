const express = require('express');
const router = express.Router();
const storeValidations = require("../middlewares/saveOperationValidation");
const updateValidation = require("../middlewares/updateOperation");
const operationsController = require('../controllers/operationsController');

router.get('/', operationsController.all)


// CRUD
router.post('/all', operationsController.all);
router.post('/once', operationsController.once);

router.post('/new',
    storeValidations,
    operationsController.store);

router.post('/lastoperations', operationsController.lastOps);

router.put('/update',
    updateValidation,
    operationsController.update);
router.delete('/delete', operationsController.destroy);

module.exports = router;