import React from 'react';
import { FilterActions } from './App';

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
type TodolistProps = {
    title: string;
    task: TaskType[]
   delete: (id: number)=> void
   changeFilter: (value: FilterActions)=>void

}


export const Todolist = (props: TodolistProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
      {props.task.map((item)=>(
            <li key={item.id}>
                <input type='checkbox'/>
                <span>{item.title}</span>
                <button onClick={()=>{props.delete(item.id)}}>x</button>
            </li>
        ))}
      </ul>
      <div>
        <button onClick={()=> props.changeFilter('all')}>All</button>
        <button onClick={()=> props.changeFilter('active')}>Active</button>
        <button onClick={()=> props.changeFilter('completed')}>Completed</button>
      </div>
    </div>
  );
};
