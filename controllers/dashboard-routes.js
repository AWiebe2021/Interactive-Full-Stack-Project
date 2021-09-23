const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Customer, Process, Department } = require('../models');
const withAuth = require('../utils/auth');

// get all projects for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('=====================');
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
      res.render('projectdash', { projects, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Project.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      'created_at',
      'shipping_address',
      'shipping_city',
      'shipping_state',
      'shipping_zip',
      'process_id'
    ],
    include: [
      {
        model: Customer,
        attributes: ['id', 'customer_name']
      },
    ]
  })
    .then(dbProjectData => {
      if (dbProjectData) {
        const project = dbProjectData.get({ plain: true });
        
        res.render('projectCard', {
          project,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
