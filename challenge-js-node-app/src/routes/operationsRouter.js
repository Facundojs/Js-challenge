const express = require('express');
const router = express.Router();
const storeValidations = require("../middlewares/saveOperationValidation");
const operationsController = require('../controllers/operationsController');

router.get('/', operationsController.all)


// CRUD
router.post('/all', operationsController.all);
router.post('/new', storeValidations, operationsController.store);
router.post('/lastoperations', storeValidations, operationsController.lastOps);
router.put('/update', operationsController.update);
router.delete('/delete', operationsController.destroy);

module.exports = router;