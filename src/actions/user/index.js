import * as types from "./types";

export const locationUpdate = (location) => {
  return {
    type: types.LOCATION_UPDATE,
    location,
  };
};

export const orderListUpdate = (orderList) => {
  return {
    type: types.ORDER_LIST_UPDATE,
    orderList,
  };
};

export const userIdUpdate = (id) => {
  return {
    type: types.USER_ID_UPDATE,
    id,
  };
};

export const basketListUpdate = (basketList) => {
  return {
    type: types.BASKET_LIST_UPDATE,
    basketList,
  };
};

export const userNameUpdate = (name) => {
  return {
    type: types.USER_NAME_UPDATE,
    name,
  };
};
export const userPhoneNumUpdate = (phoneNum) => {
  return {
    type: types.USER_PHONE_NUM_UPDATE,
    phoneNum,
  };
};
export const userProfileImageUpdate = (image) => {
  return {
    type: types.USER_PROFILE_IMAGE_UPDATE,
    image,
  };
};

export const userIsSellerUpdate = (isSeller) => {
  return {
    type: types.IS_SELLER_UPDATE,
    isSeller,
  };
};
export const paymentMarketInfo = (marketInfo) => {
  return {
    type: types.PAYMENT_MARKET_INFO,
    marketInfo,
  };
};
