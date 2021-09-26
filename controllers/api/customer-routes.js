const router = require('express').Router();
const { Customer } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
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
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbCustomerData => {
      if (!dbCustomerData) {
        res.status(404).json({ message: 'No CUSTOMER found with this id' });
        return;
      }
      res.json(dbCustomerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Customer.create({
    customer_name: req.body.customer_name,
    customer_address: req.body.customer_address,
    customer_city: req.body.customer_city,
    customer_state: req.body.customer_state,
    customer_zip: req.body.customer_zip
    })
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Customer.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCustomerData => {
      if (!dbCustomerData) {
        res.status(404).json({ message: 'No customer found with this id!' });
        return;
      }
      res.json(dbCustomerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Customer.update(
    {
      customer_name: req.body.customer_name,
      customer_address: req.body. customer_address,
      customer_city: req.body.customer_city,
      customer_state: req.body.customer_state,
      customer_zip: req.body.customer_zip
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCustomerData => {
      if (!dbCustomerData) {
        res.status(404).json({ message: 'No Customer found with this id' });
        return;
      }
      res.json(dbCustomerData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;
