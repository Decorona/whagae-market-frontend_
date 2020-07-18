import * as types from "./types";
// 실질적 작용을 하는 action을 정의하는 곳
export const storesUpdate = (stores) => {
  return {
    type: types.STORES_UPDATE,
    stores,
  };
};
export const storeItemsUpdate = (items) => {
  return {
    type: types.STORE_ITEMS_UPDATE,
    items,
  };
};
export const itemDetailUpdate = (detail) => {
  return {
    type: types.ITEM_DETAIL_UPDATE,
    detail,
  };
};
export const storeReviewsUpdate = (reviews) => {
  return {
    type: types.STORE_REVIEW_UPDATE,
    reviews,
  };
};
