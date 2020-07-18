import * as types from "../actions/user/types";
const initialState = {
  location: { key: "마포구", display: "서울 성북구 삼선동 1가" },
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
