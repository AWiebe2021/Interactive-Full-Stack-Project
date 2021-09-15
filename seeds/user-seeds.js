const sequelize = require('../config/connection');
const { Project, Post } = require('../models');

const projectdata = [
 {
  username:'awiebe', 
  email:'awiebe@whereever.com', 
  password:'awiebe'
 },
 {
  username:'mparker', 
  email:'mparker@whereever.com', 
  password:'mparker'
 },
 {
  username:'dgrogan', 
  email:'dgrogan@whereever.com', 
  password:'dgrogan'
 },
 {
  username:'vmarcado', 
  email:'vmarcado@wherever.com', 
  password:'vmarcado'
 }
];

const seedProjects = () => Project.bulkCreate(projectdata, {individualHooks: true});

module.exports = seedProjects;
