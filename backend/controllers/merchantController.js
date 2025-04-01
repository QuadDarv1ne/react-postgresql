const merchantModel = require('../models/merchantModel');

const getMerchants = (req, res) => {
  merchantModel.getMerchants()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ error: error.message }));
};

const createMerchant = (req, res) => {
  merchantModel.createMerchant(req.body)
    .then(response => res.status(201).send(response))
    .catch(error => res.status(500).json({ error: error.message }));
};

const deleteMerchant = (req, res) => {
  merchantModel.deleteMerchant(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(error => res.status(500).json({ error: error.message }));
};

module.exports = { getMerchants, createMerchant, deleteMerchant };
