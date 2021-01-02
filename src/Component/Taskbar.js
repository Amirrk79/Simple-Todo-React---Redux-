import React , { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import AddTask from '../Redux/Actions/addTaskAction';
import shortid from 'short-id';



function TaskBar() {
    const dispatch = useDispatch();
    /* States */
    const [name , setName] = useState();
    
    const handleAdd = (e) => {
        dispatch(AddTask(
            {
                id : shortid.generate() , 
                name : name ,
                isCompleted : false
            }
        ));
        setName('');
        
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };
    
    return (
        <div>
            <div>
                <input
                class='input-group-text'
                type="text"
                value={name}
                onChange={handleChange}
                 />

                <button class="btn btn-success" onClick={handleAdd}>
                    Add
                </button>
            </div>
        </div>
    )
}




export default connect() (TaskBar);