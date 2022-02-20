import { combineReducers } from "redux";
import vendors from "./vendors/reducer";

const rootReducer = combineReducers({
  vendors: vendors,
});

export default rootReducer;
