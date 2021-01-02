import store from '../Store';
import { ADD } from './actions';
import shortid from 'short-id';



import { ADD_TASK } from './actions';

function AddTask(task) {
    return {
        type : ADD_TASK , 
        payload: task
    }
};







export default  AddTask;