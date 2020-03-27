const express = require('express');
const router = express.Router();
const {controller} = require('../../controllers/mhs.controller/update.controller');
const {updateUserData} = require('../../redux/action');
const {store} = require('../../redux/store');

router.put('/update/:id', async (req, res) => {

      await store.dispatch(updateUserData({

        id: req.params.id,
        nama: req.body.nama,
        npm: req.body.npm,
        bid: req.body.bid,
        fak: req.body.fak
      }));

      await controller.update(req, res);
});

module.exports = router;