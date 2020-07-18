import * as types from "./types";

export const locationUpdate = (location) => {
  return {
    type: types.LOCATION_UPDATE,
    location,
  };
};
