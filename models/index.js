// import all models
const path = require('path');


const Project = require(path.join(__dirname, '/project.js'));
const Process = require(path.join(__dirname, '/process.js'));
const Department = require(path.join(__dirname, '/department.js'));
const Customer = require(path.join(__dirname, '/customer.js'));
const User = require(path.join(__dirname, '/User.js'));

// console.log(__dirname);

// create associations
Customer.hasMany(Project, {
  foreignKey: 'customer_id'
});

Project.belongsTo(Customer, {
  foreignKey: 'customer_id',
  onDelete: 'SET NULL'
});

// Process.hasMany(Project, {
//   foreignKey: 'process_id'
// });

// Project.belongsTo(Process, {
//   foreignKey: 'process_id',
//   onDelete: 'SET NULL'
// });

Department.hasMany(Process, {
  foreignKey: 'dept_id'
});

Process.belongsTo(Department, {
  foreignKey: 'dept_id',
  onDelete: 'SET NULL'
});


module.exports = { Project, Process, Department, Customer, User };
