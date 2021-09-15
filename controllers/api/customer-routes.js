const router = require('express').Router();
const { Customer } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Customer.findAll()
    .then(dbCustomerData => res.json(dbCustomerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects => {customer_text: "This is the customer", user_id: 1, post_id: 2}
  Customer.create({
    name: req.body.name,
    address: req.body.address
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

module.exports = router;
