import { combineReducers } from 'redux'
import todoReducer from './tasks';
import filterReducer from './filter';

export default combineReducers({
 todos: todoReducer,
 filter: filterReducer
})

