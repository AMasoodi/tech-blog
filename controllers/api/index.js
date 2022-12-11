const router = require('express').Router();

const postroutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/post', projectRoutes);

module.exports = router;