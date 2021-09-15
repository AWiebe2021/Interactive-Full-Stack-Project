const router = require('express').Router();
const {  Department, Project, Customer, Process } = require('../../models');

// get all processs
router.get('/', (req, res) => {
  Process.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbProcessData => res.json(dbProcessData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Process.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Department,
        attributes: ['id', 'name'],
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
  // expects {processname: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Process.create({
    processName: req.body.processName
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Process.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbProcessData => {
    if (!dbProcessData) {
      res.status(400).json({ message: 'No process with that email address!' });
      return;
    }

    const validPassword = dbProcessData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.process_id = dbProcessData.id;
      req.session.processName = dbProcessData.processName;
      req.session.loggedIn = true;
  
      res.json({ process: dbProcessData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  // expects {processname: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

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
