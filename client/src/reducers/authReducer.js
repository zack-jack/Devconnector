import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        // if payload contains decoded user, then authenticate
        // Can also be used for logging user out by passing in an empty payload
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
