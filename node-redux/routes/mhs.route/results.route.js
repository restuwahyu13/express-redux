const express = require('express');
const router = express.Router();
const {controller} = require('../../controllers/mhs.controller/results.controller');

router.get('/results', async (req, res) => {

      await controller.results(req, res);
});

module.exports = router;