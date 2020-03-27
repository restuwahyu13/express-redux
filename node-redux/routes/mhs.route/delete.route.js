const express = require('express');
const router = express.Router();
const {controller} = require('../../controllers/mhs.controller/delete.controller');
const {deleteUserData} = require('../../redux/action');
const {store} = require('../../redux/store');

router.delete('/delete/:id', async (req, res) => {

      await store.dispatch(deleteUserData({id: req.params.id}));

      await controller.delete(req, res);
});

module.exports = router;