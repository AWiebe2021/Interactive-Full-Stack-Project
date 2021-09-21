// import all models
const Project = require('./project');
const Process = require('./process');
const Department = require('./department');
const Customer = require('./customer');
const User = require('./user');

// create associations
Customer.hasMany(Project, {
  foreignKey: 'customer_id'
});

Project.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

Process.hasMany(Project, {
  foreignKey: 'process_id'
});

Project.belongsTo(Process, {
  foreignKey: 'process_id'
});

Department.hasMany(Process, {
  foreignKey: 'dept_id'
});

Process.belongsTo(Department, {
  foreignKey: 'dept_id'
});


module.exports = { Project, Process, Department, Customer, User };
