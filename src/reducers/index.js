import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    chatReducer,
    userReducer,
});