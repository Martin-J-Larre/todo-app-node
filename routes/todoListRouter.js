const express = require('express');
const router = express.Router(); 

const { getAll,
} = require('../controllers/todoListController');

router.get('/',getAll);

module.exports = router;