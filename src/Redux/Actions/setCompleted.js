import { SET_COMPLETED } from './actions';

function setCompleted(task)  {
    return {
    type: SET_COMPLETED , 
    payload : task
    }
};

export default setCompleted;