// @ts-nocheck
const {getMhsSchema} = require('../../models/mhs.model');
const {store} = require('../../redux/store');

const controller = {

    result: async (req, res) => {
        
      const stateValue = store.getState();

      await getMhsSchema.findOne({_id: stateValue.id}).then(doc => {

          if(doc) {

            res.status(200).json({
                status: 200,
                method: req.method,
                msg: 'Yeah..data already to use',
                data: {
                   id: doc._id,
                   nama: doc.nama,
                   npm: doc.npm,
                   bid: doc.bid,
                   fak: doc.fak,
                   created_at: doc.created_at
                }
             });

          } else {

             res.status(404).json({
                status: 404,
                method: req.method,
                msg: 'Oops..data not found in database or deleted'
             });
          }

      }).catch(err => {

            res.status(500).json({
                status: 500,
                method: req.method,
                msg: `Oops..internal server error ${err}`
            });
      });
     
    }
}

module.exports = {controller};