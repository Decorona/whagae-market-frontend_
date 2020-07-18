import * as types from "../actions/appStatus/types";
// store에서 관리할 state를 정의하는 곳.
const initialState = {
  stores: [],
};

const appStatus = (state = initialState, action) => {
  //swtich 문을 이용해 미리 정의해둔 type에 따라 적용
  switch (action.type) {
    case types.STORES_UPDATE:
      return {
        ...state,
        stores: action.stores,
      };
    default:
      return state;
  }
};

export default appStatus;
