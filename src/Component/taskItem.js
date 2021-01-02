
import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import deleteTask from '../Redux/Actions/deleteTaskAction';
import updateTask from '../Redux/Actions/updateTaskAction';
import setCompleted from '../Redux/Actions/setCompleted';

function TaskItem({ task }) {
    /*States */
    let [editable , setEditable] = useState(false);
    let [newName , setNewName] = useState(task.name);
    let [Completed , setIsCompleted] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    };

    const handleEdit = () => {
        setEditable(!editable);
        if(editable) {
            dispatch(updateTask(
                {
                    ...task,
                    name : newName
                }
            ))
        };
    };

    const handleEditChange = (e) => {
        setNewName(e.target.value);
    };

    const handleComplete = () => {
        setIsCompleted(!Completed);
        dispatch(setCompleted(
            {
                ...task,
                isCompleted: !Completed
            }
        ))
    };


    return(
        <div>
            {Completed ? 
            <div>
                <h3>Completed Task: </h3> <button class='btn btn-danger' onClick={handleComplete}>Not Complete</button>
                </div>
                 : 
                <div>
                    <h3>Not Completed Task: </h3><button class="btn btn-success" onClick={handleComplete}>Complete</button>
                    </div>}


            <div>Task id: {task.id}</div>


    {editable ? 
    <div>
    <input 
    class='input-group-text'
    type="text"
    value={newName}
    onChange={handleEditChange}
    /> </div>
    :
    <div>Task name: {task.name}</div>}
            <div>
    <button class="btn btn-success" onClick={handleEdit}>{editable ? 'Save' : "Edit"}</button>
            </div>
            <div>
                <button class='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
};


export default TaskItem;