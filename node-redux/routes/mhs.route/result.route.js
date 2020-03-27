const express = require('express');
const router = express.Router();
const {controller} = require('../../controllers/mhs.controller/result.controller');
const {resultUserData} = require('../../redux/action');
const {store} = require('../../redux/store');

router.get('/result/:id', async (req, res) => {

      await store.dispatch(resultUserData({id: req.params.id}));

      await controller.result(req, res);
});

module.exports = router;