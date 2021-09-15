const router = require('express').Router();

const customerRoutes = require('./customer-routes.js');
const departmentRoutes = require('./department-routes');
const processRoutes = require('./process-routes');
const projectRoutes = require('./project-routes');

router.use('/custommer', customerRoutes);
router.use('/department', departmentRoutes);
router.use('/process', processRoutes);
router.use('/project', projectRoutes);

module.exports = router;
