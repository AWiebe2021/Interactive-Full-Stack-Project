const sequelize = require('../config/connection');
const { Project, Post } = require('../models');

const projectdata = [
 
];

const seedProjects = () => Project.bulkCreate(projectdata, {individualHooks: true});

module.exports = seedProjects;
