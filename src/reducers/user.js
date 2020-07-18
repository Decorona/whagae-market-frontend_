import * as types from "../actions/user/types";
const initialState = {
  location: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATION_UPDATE:
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
};

export default user;
