const {getMhsSchema} = require('../../models/mhs.model');
const {store} = require('../../redux/store');

const controller = {

    create: async (req, res) => {
        
      const stateValue = store.getState();

      const data = new getMhsSchema({

          nama: stateValue.nama,
          npm: parseInt(stateValue.npm),
          bid: stateValue.bid,
          fak: stateValue.fak,
      });

      await getMhsSchema.findOne({nama: stateValue.nama}).then(async doc => {

          if(!doc) {

            await data.save();

            res.status(201).json({
                status: 201,
                method: req.method,
                msg: 'Yeah..data successfully to store in database'
             });

          } else {

             res.status(409).json({
                status: 409,
                method: req.method,
                msg: 'Oops..data already exist'
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