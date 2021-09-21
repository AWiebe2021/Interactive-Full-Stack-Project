const seedProjects = require('./project-seeds');
const seedProcesss = require('./process-seeds');
const seedCustomers = require('./customer-seeds');
const seedDepartment = require('./department-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedDepartment();
  console.log('--------------'); 


  await seedProcesss();
  console.log('--------------');

  await seedCustomers();
  console.log('--------------');

  await seedProjects();
  console.log('--------------');

  await seedUser();
  console.log('--------------');

  process.exit(0);
};

seedAll();
