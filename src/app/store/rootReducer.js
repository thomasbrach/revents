import { combineReducers } from "redux";
import modalReducer from "../common/modals/modalReducer";
import eventReducer from "../../features/events/eventReducer";
import testReducer from "../../features/sandbox/testReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../async/asyncReducer";
import profileReducer from "../../features/profiles/profileReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    profile: profileReducer,
  });

export default rootReducer;
