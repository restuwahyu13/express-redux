const {getMhsSchema} = require('../../models/mhs.model');
const {store} = require('../../redux/store');

const controller = {

    delete: async (req, res) => {
        
      const stateValue = store.getState();

      await getMhsSchema.findOne({_id: stateValue.id}).then(async doc => {

          if(doc) {

            await getMhsSchema.deleteOne({_id: doc._id});

            res.status(200).json({
                status: 200,
                method: req.method,
                msg: 'Yeah..data successfuly to deleted',
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