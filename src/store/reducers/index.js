import { combineReducers } from "redux";

import chat from './chatreducer';

//combineReducer ele espera os reducers
const rootReducer = combineReducers({
    chat, 
})

export default rootReducer