import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';


export type FilterActions = 'all' | 'completed' | 'active'
function App() {
    
    // const task2= [
    //     {id: 1 , title: 'Hello World', isDone: true},
    //     {id: 2 , title: 'I am happy', isDone: false},
    //     {id: 3 , title: 'Yo', isDone: false}
    // ]

    let [task, setTask]=useState([
        {id: 1 , title: 'HTML&CSS', isDone: true},
        {id: 2 , title: 'JS', isDone: true},
        {id: 3 , title: 'ReactJS', isDone: false},
        {id: 4 , title: 'Redux', isDone: false}
    ]);
    const [filter, setFilter]=useState<FilterActions>('all');


    const deleteTask = (id: number)=> {
      let  filterTask= task.filter((task)=> task.id !== id)
      setTask(filterTask)
        // debugger
    }

    let filterTask = task;
    if(filter ==='completed') {
        filterTask = task.filter(item => item.isDone === true)
    }
    if(filter ==='active') {
        filterTask = task.filter(item => item.isDone=== false)
    }
    const changeFilter =(value: FilterActions)=>{
      setFilter(value)
    }
    
    return (
        <div className="App">
            <Todolist title={'What to learn'} task={filterTask} delete={deleteTask} changeFilter={changeFilter}/>
            {/* <Todolist title={'Songs'} task={task2}/> */}
            {/* <Todolist title={'Books'}/> */}
        </div>
    );
}

export default App;
