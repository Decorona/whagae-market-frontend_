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
