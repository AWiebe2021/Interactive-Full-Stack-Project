const router = require('express').Router();

const customerRoutes = require('./customer-routes');
const departmentRoutes = require('./department-routes');
const processRoutes = require('./process-routes');
const projectRoutes = require('./project-routes');
const userRoutes =  require('./user-routes');

router.use('/customer', customerRoutes);
router.use('/department', departmentRoutes);
router.use('/process', processRoutes);
router.use('/project', projectRoutes);
router.use('/users', userRoutes);

module.exports = router;
