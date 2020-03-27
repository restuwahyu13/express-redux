const mongoose = require( 'mongoose' );
const setMahasiswaSchema = new mongoose.Schema({

  nama: {

    type: String,
    trim: true,
    required: true
  },
  npm: {

    type: Number,
    trim: true,
    unique: true,
    minlength: 12,
    required: true
  },
  bid: {

    type: String,
    trim: true,
    required: true
  },
  fak: {

    type: String,
    trim: true,
    required: true
  },
  created_at: {

    type: Date,
    default: Date.now()
  },
  updated_at: {

    type: Date,
    default: null
  }

});

const getMhsSchema = mongoose.model('redux', setMahasiswaSchema);
module.exports = {getMhsSchema};