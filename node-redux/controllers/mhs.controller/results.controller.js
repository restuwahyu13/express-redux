const {getMhsSchema} = require('../../models/mhs.model');

const controller = {

    results: async (req, res) => {

      await getMhsSchema.find({}).then(doc => {

          if(doc) {

            res.status(200).json({
                status: 200,
                method: req.method,
                msg: 'Yeah..data already to use',
                data: [...doc]
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