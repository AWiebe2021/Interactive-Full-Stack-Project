const { Customer } = require('../models');

const customerdata = [

];

const seedCustomers = () => Customer.bulkCreate(customerdata);

module.exports = seedCustomers;
