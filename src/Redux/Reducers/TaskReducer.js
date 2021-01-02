import { act } from "react-dom/test-utils";
import updateTask from "../Actions/updateTaskAction";

const tasks = [];


const tasksReducer = (state = tasks , action) => {
    switch(action.type) {
        case 'ADD_TASK': {
            let newStates = [...state , action.payload];
            return newStates;
        }
        case 'DELETE_TASK': {
            let newState = [...state];
            newState = newState.filter((task) => task.id != action.payload);
            return newState;
        }
        case 'UPDATE_TASK': {
            let updatedState = [...state];
            let index = -1;
            for (let i = 0; i < updatedState.length ; i++) {
                index++;
                if(updatedState[i].id == action.payload.id) {
                    break;
                }
            }
            if(index != -1 ) {
                updatedState[index] = action.payload;
                return updatedState;
            }
        }
        case "SET_COMPLETED": {
            let completedState = [...state];
            let index = -1;
            for (let i = 0; i < completedState.length; i++) {
                index++;
                if(completedState[i].id == action.payload.id) {
                    break;
                }
            }
            if(index != -1) {
                completedState[index] = action.payload;
                return completedState;
            }
        }
        default : {
            return state
        }
    }
};



export default tasksReducer;