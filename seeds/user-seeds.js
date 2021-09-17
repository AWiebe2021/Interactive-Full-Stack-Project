const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
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

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

