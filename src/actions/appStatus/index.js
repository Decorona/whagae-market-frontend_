import * as types from "./types";
// 실질적 작용을 하는 action을 정의하는 곳
export const storesUpdate = (stores) => {
  return {
    type: types.STORES_UPDATE,
    stores,
  };
};
