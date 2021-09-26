const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Customer, Process, Department } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  // console.log('=========^^===========');
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
    include: [
      {
        model: Customer,
        attributes: ['id', 'customer_name'],
      },
    ]
  })
    .then(dbProjectData => {
      const projects = dbProjectData.map(project => project.get({ plain: true }));

      res.render('homepage', {
        projects,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/project/:id', (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id
    },
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
    include: [
      {
        model: Customer,
        attributes: ['id', 'customer_name'],
      },
    ]
  })
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const project = dbProjectData.get({ plain: true });

      res.render('single-post', {
        project,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.redirect('/');
});

module.exports = router;
