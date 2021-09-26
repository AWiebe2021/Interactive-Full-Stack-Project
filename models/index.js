// import all models
const path = require('path');


const Project = require(path.join(__dirname, './project'));
const Process = require(path.join(__dirname, './process'));
const Department = require(path.join(__dirname, './department'));
const Customer = require(path.join(__dirname, './customer'));
const User = require(path.join(__dirname, './user'));


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
