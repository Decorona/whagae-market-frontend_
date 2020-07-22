import * as types from "../actions/user/types";
const initialState = {
  location: { key: "마포구", display: "서울특별시 마포구 성산동 336-1" },
  userId: 0,
  orderList: [],
  basketList: [],
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
        userId: action.id,
      };
    case types.BASKET_LIST_UPDATE:
      return {
        ...state,
        basketList: action.basketList,
      };
    default:
      return state;
  }
};

export default user;
