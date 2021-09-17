const { Process } = require('../models');

const processdata = [
  {
    processName:'Bid', 
    step: '1',
    dept_id: '2'
  },
  {
    processName:'Order', 
    step: '2',
    dept_id: '1'
  },
  {
    processName:'Design', 
    step: '3',
    dept_id: '2'
  },
  {
    processName:'Production', 
    step: '4',
    dept_id: '3'
  },
  {
    processName:'Shipping', 
    step: '5',
    dept_id: '6'
  },
 
];

const seedProcesss = () => Process.bulkCreate(processdata);

module.exports = seedProcesss;
