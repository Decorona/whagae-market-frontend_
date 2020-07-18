import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import appStatus from "./appStatus";
import user from "./user";

const reducers = combineReducers({
  appStatus,
  user,
});

const store = createStore(reducers, applyMiddleware(logger));

export { store };
