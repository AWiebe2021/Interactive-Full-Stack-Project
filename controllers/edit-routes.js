const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Customer, Process, Department } = require('../models');
const withAuth = require('../utils/auth');

// get all projects for editor
router.get('/project', withAuth, (req, res) => {
  // console.log(req.session);
  // console.log('=====================');
  Project.findAll({
    attributes: [
      'id',
      'title',
      'created_at',
      'shipping_address',
      'shipping_city',
      'shipping_state',
      'shipping_zip',
      'customer_id',
      'process_id'
    ],
    include:
      {
        model: Customer,
        attributes: ['customer_name']
      }
    
  })
    .then(dbProjectData => {
      const projects = dbProjectData.map(project => project.get({ plain: true }));
      res.render('editProject', { projects, loggedIn: true, layout: false });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/user', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => {
      const users = dbUserData.map(user => user.get({ plain: true }));
      res.render('editUser', { users, loggedIn: true, layout: false });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/customer', (req, res) => {
  Customer.findAll({
    attributes: [
      'id',
      'customer_name',
      'customer_address',
      'customer_city',
      'customer_state',
      'customer_zip'
    ]
  })
  .then(dbCustomerData => {
    const customers = dbCustomerData.map(customer => customer.get({ plain: true }));
    res.render('editCustomer', { customers, loggedIn: true, layout: false });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/process', (req, res) => {
  Process.findAll({
    attributes:  ['id','processName','step','dept_id']
  })
  .then(dbProcessData => {
    const processes = dbProcessData.map(process => process.get({ plain: true }));
    res.render('editProcess', { processes, loggedIn: true, layout: false });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/department', (req, res) => {
  // console.log('======================');
  Department.findAll({
    attributes: [
      'id',
      'name'
    ],
  })
  .then(dbDepartmentData => {
    const departments = dbDepartmentData.map(department => department.get({ plain: true }));
    res.render('editDepartment', { departments, loggedIn: true, layout: false });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
