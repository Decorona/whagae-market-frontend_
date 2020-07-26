import * as types from "../actions/user/types";
const initialState = {
  location: { key: "마포구", display: "서울특별시 마포구 성산동 336-1" },
  userId: 0,
  orderList: [],
  basketList: [],
  phoneNum: "",
  name: "",
  profileImg: "",
  isSeller: false,
  address: "",
  paymentmarketInfo: {},
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
    case types.USER_NAME_UPDATE:
      return {
        ...state,
        name: action.name,
      };
    case types.USER_PHONE_NUM_UPDATE:
      return {
        ...state,
        phoneNum: action.phoneNum,
      };
    case types.USER_PROFILE_IMAGE_UPDATE:
      return {
        ...state,
        profileImg: action.image,
      };
    case types.IS_SELLER_UPDATE:
      return {
        ...state,
        isSeller: action.isSeller,
      };
    case types.PAYMENT_MARKET_INFO:
      return {
        ...state,
        paymentmarketInfo: action.marketInfo,
      };
    default:
      return state;
  }
};

export default user;
