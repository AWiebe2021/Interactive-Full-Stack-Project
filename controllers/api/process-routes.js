const router = require('express').Router();
const {  Department, Project, Customer, Process } = require('../../models');

// get all processs
router.get('/', (req, res) => {
  Process.findAll({
    attributes:  ['id', 'processName','step','dept_id']
  })
    .then(dbProcessData => res.json(dbProcessData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Process.findOne({
    attributes:  ['id', 'processName'],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Department,
        attributes: ['id', 'processName'],
      }
    ]
  })
    .then(dbProcessData => {
      if (!dbProcessData) {
        res.status(404).json({ message: 'No process found with this id' });
        return;
      }
      res.json(dbProcessData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {processprocessName: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Process.create({
    processName: req.body.processName
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // expects {processprocessName: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  Process.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbProcessData => {
      if (!dbProcessData) {
        res.status(404).json({ message: 'No process found with this id' });
        return;
      }
      res.json(dbProcessData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Process.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProcessData => {
      if (!dbProcessData) {
        res.status(404).json({ message: 'No process found with this id' });
        return;
      }
      res.json(dbProcessData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
