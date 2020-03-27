const {
  initialState,
  ADD_USER,
  RESULT_USER,
  DELETE_USER,
  UPDATE_USER
} = require( '../redux/action' );

function reduxReducers(state = initialState, action) {

        switch(action.type) {

           case ADD_USER:

            return {
            ...state, 
              nama: action.payload.nama,
              npm: action.payload.npm,
              bid: action.payload.bid,
              fak: action.payload.fak
            }

            case RESULT_USER :

            return {...state, id: action.payload.id }

            case DELETE_USER :

            return {...state, id: action.payload.id }

            case UPDATE_USER : 

            return {
              ...state,
                id: action.payload.id, 
                nama: action.payload.nama,
                npm: action.payload.npm,
                bid: action.payload.bid,
                fak: action.payload.fak
              }

            default : 
            
            return state;
        }
}

module.exports = {reduxReducers};