const { Department } = require('../models');

const departmentdata = [
 
];

const seedDepartments = () => Department.bulkCreate(departmentdata);

module.exports = seedDepartments;
