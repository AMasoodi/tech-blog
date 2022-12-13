const router = require('express').Router();

const postRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;