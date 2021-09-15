const { Process } = require('../models');

const processdata = [
 
];

const seedProcesss = () => Process.bulkCreate(processdata);

module.exports = seedProcesss;
