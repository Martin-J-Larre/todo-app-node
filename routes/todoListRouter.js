const express = require('express');
const router = express.Router(); 

router.get('/',(req, res)=>{
    res.send('Test router');
});

module.exports = router;