import * as types from "../actions/user/types";
const initialState = {
  location: { key: "마포구", display: "서울 성북구 삼선동 1가" },
  userId: 0,
  orderList: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATION_UPDATE:
      return {
        ...state,
        location: action.location,
      };
    case types.ORDER_LIST_UPDATE:
      return {
        ...state,
        orderList: action.orderList,
      };
    case types.USER_ID_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default user;
