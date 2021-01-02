import React , { Component } from 'react';
import shortid from 'short-id';
import  deleteTask  from '../Redux/Actions/deleteTaskAction';
import TaskItem from './taskItem';
import { useSelector } from 'react-redux';




function TaskList() {
    /*Store State */
    const tasks = useSelector(state => state.tasks);
    return(
        <div>
            {tasks.map(task => {
                return <TaskItem key={task.id} task={task} />
            })}
        </div>
    )
}



export default TaskList;