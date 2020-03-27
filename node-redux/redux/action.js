const initialState = {
  
     id: '',
     nama: '',
     npm: null,
     bid: '',
     fak: '',
}

const ADD_USER = 'ADD_USER';
const RESULT_USER = 'RESULT_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';

function addUserData( value ) {

  return {
    type: ADD_USER,
    payload: value
  }
}

function resultUserData(value) {

  return {
    type: RESULT_USER,
    payload: value
  }
}

function deleteUserData( value ) {

  return {
    type: DELETE_USER,
    payload: value
  }
}

function updateUserData( value ) {

  return {
    type: UPDATE_USER,
    payload: value
  }
}

module.exports = {
  initialState,
  ADD_USER,
  RESULT_USER,
  DELETE_USER,
  UPDATE_USER,
  addUserData,
  resultUserData,
  deleteUserData,
  updateUserData
}