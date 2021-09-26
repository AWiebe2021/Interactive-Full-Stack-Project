const router = require('express').Router();
const {  Department, Project, Customer, Process } = require('../../models');
const withAuth = require('../../utils/auth');
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

router.post('/', (req, res) => {
  Process.create({
    processName: req.body.processName,
    step: req.body.step,
    dept_id: req.body.dept_id
  })
    .then(dbProcessData => res.json(dbProcessData))  
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Process.update(
    {
      processName: req.body.processName,
      step: req.body.step,
      dept_id: req.body.dept_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
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
