import {combineReducers} from "redux";
import questionsReducer from "./questions";
import marksReducer from "./marks"
export default combineReducers({
    questions:questionsReducer,
    marks:marksReducer
})