const sequelize = require('../config/connection');
const { Project } = require('../models');

const projectdata = [
 
];

const seedProjects = () => Project.bulkCreate(projectdata, {individualHooks: true});

module.exports = seedProjects;
