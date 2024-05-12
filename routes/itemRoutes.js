const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { validateCategoryId } = require('../middleware/validateCategoryId');

router.get('/', itemController.getAllItems);
router.get('/search', itemController.searchItemsAndCategories);
router.get('/:id', validateCategoryId, itemController.getItemById);


module.exports = router;
