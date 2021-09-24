const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, Project, Customer, Process } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
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
    ]
  })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/:id', (req, res) => {
//   Project.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'title'


//     ]
//   })
//     .then(dbProjectData => {
//       if (!dbProjectData) {
//         res.status(404).json({ message: 'No project found with this id' });
//         return;
//       }
//       res.json(dbProjectData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', project_url: 'https://taskmaster.com/press', user_id: 1}
  Project.create({
    title: req.body.title,
    project_url: req.body.project_url,
    user_id: req.session.user_id
  })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/advance/:id', withAuth, (req, res) => {
  // custom static method created in models/Project.js
  Project.update(
    {
      process_id: req.body.process_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbProjectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {


  Project.update(
    {
      process_id: req.body.process_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbProjectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Project.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }
      res.json(dbProjectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
