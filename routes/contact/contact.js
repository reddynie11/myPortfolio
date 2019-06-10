const express = require('express');
const router = express.Router();

router.use('/',express.static('./views/contact'))


module.exports = router; 