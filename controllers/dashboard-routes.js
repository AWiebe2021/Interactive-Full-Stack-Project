const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Customer, Process, Department } = require('../models');
const withAuth = require('../utils/auth');

// get all projects for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Project.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE project.id = vote.project_id)'), 'vote_count']
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
      res.render('dashboard', { projects, loggedIn: true });
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
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE project.id = vote.project_id)'), 'vote_count']
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
