
import { combineReducers } from 'redux';
import tasksReducer from './TaskReducer';

const AllReducers = combineReducers({
    tasks : tasksReducer
});


export default AllReducers;