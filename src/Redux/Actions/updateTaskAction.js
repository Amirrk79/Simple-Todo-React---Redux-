
import { UPDATE_TASK } from './actions';


const updateTask = (task) => {
    return {
        type: UPDATE_TASK , 
        payload: task 
    }
};

export default updateTask;