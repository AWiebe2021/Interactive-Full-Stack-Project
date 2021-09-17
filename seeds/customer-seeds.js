const { Customer } = require('../models');

const customerdata = [
  {
    customer_name: 'AAA Framing',
    customer_address:'123 oak st' ,
    customer_city:'Spokane' ,
    customer_state: 'WA',
    customer_zip:'99205'
  },
  {
    customer_name: 'Oak Builders',
    customer_address:'456 A st' ,
    customer_city:'Spokane' ,
    customer_state: 'WA',
    customer_zip:'99205'
  },
  {
    customer_name: 'Wood Erections',
    customer_address:'789 Park ave' ,
    customer_city:'Spokane' ,
    customer_state: 'WA',
    customer_zip:'99205'
  },
  {
    customer_name: 'Cappys Framing',
    customer_address:'135 Post ave' ,
    customer_city:'Spokane' ,
    customer_state: 'WA',
    customer_zip:'99205'
  },
  {
    customer_name: 'East Washington Contracting',
    customer_address:'246 Wall st' ,
    customer_city:'Spokane' ,
    customer_state: 'WA',
    customer_zip:'99205'
  },
];

const seedCustomers = () => Customer.bulkCreate(customerdata);

module.exports = seedCustomers;
