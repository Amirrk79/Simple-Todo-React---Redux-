import store from '../Store';
import { DELETE_TASK } from './actions';


function deleteTask(taskid) {
    return {
        type: DELETE_TASK,
        payload: taskid
    }
};


export default deleteTask;