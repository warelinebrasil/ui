import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";

const rootREducer = combineReducers({
  test: testReducer
});

export default rootREducer;
