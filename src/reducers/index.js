import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import streamReducers from "./streamReducers";

export default combineReducers({
  authData: authReducer,
  form: formReducer,
  streams: streamReducers
});
