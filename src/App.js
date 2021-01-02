import React from 'react';
import Header from './Component/Header';
import TaskBar from './Component/Taskbar';
import TaskList from './Component/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    return (
      <div class='d-flex flex-column align-items-center'>
        <Header />
        <TaskBar />
        <TaskList />
      </div>
    )
  };


export default App;
