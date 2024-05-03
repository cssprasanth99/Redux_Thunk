import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";
import { rootReducer } from "./index";

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
