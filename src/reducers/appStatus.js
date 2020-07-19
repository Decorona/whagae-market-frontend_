import * as types from "../actions/appStatus/types";
// store에서 관리할 state를 정의하는 곳.
const initialState = {
  stores: [],
  storeItems: [],
  itemDetail: [],
  storeReviews: [],
};

const appStatus = (state = initialState, action) => {
  //swtich 문을 이용해 미리 정의해둔 type에 따라 적용
  switch (action.type) {
    case types.STORES_UPDATE:
      return {
        ...state,
        stores: action.stores,
      };
    case types.STORE_ITEMS_UPDATE:
      return {
        ...state,
        storeItems: action.items,
      };
    case types.ITEM_DETAIL_UPDATE:
      return {
        ...state,
        itemDetail: action.detail,
      };
    case types.STORE_REVIEW_UPDATE:
      return {
        ...state,
        storeReviews: action.reviews,
      };
    default:
      return state;
  }
};

export default appStatus;
