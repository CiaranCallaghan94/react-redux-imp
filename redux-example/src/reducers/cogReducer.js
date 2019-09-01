import { CREATE_LINK } from '../actions/types';

const initialState = {
  link: ''
}

export default function(state = initialState, action) {
  switch(action.type){
    case CREATE_LINK:
      return {
        ...state,
        link: action.payload
      }
    default:
     return state;
  }
}
