const express = require('express');
const router = express.Router();
const {controller} = require('../../controllers/mhs.controller/create.controller');
const {addUserData} = require('../../redux/action');
const {store} = require('../../redux/store');

router.post('/create', async (req, res) => {

      await store.dispatch(addUserData({
          nama: req.body.nama,
          npm: req.body.npm,
          bid: req.body.bid,
          fak: req.body.fak
      }));

     await controller.create(req, res);
});

module.exports = router;