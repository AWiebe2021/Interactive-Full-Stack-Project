const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department, Project, Customer, Process } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Department.findAll({
    attributes: [
      'id',
      'name'
    ],
  })
    .then(dbDepartmentData => res.json(dbDepartmentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Department.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name'
    ],
  })
    .then(dbDepartmentData => {
      if (!dbDepartmentData) {
        res.status(404).json({ message: 'No department found with this id' });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {name: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Department.create({
    name: req.body.name,
    department_url: req.body.department_url,
    user_id: req.session.user_id
  })
    .then(dbDepartmentData => res.json(dbDepartmentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Department.update(
    {
      name: req.body.name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbDepartmentData => {
      if (!dbDepartmentData) {
        res.status(404).json({ message: 'No department found with this id' });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Department.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDepartmentData => {
      if (!dbDepartmentData) {
        res.status(404).json({ message: 'No department found with this id' });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
