const { Department } = require('../models');

const departmentdata = [
  {
    name: 'Sales'
  },
  {
    name: 'Engineering'
  },
  {
    name: 'Production'
  },
  {
    name: 'QA'
  },
  {
    name: 'Admin'
  },
  {
    name: 'Shipping'
  }, 
];

const seedDepartments = () => Department.bulkCreate(departmentdata);

module.exports = seedDepartments;
