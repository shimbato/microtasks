import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string;
    title: string;
    filter: FilterValuesType;
}
function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(id: string,todolistID: string ) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(filtered => filtered.id !== id)})
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(title: string, todolistID: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})

        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string ) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el=>el.id === taskId ? {...el, isDone} : el )})

        // let task = tasks[todolistID].find(t => t.id === taskId);
        // if (task) {
        //         task.isDone = isDone;
        //     }
        // setTasks({...tasks, [todolistID]: tasks[todolistID]})
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }


    // let tasksForTodolist = tasks;

    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        setTodolists(todolists.map(filtered => filtered.id === todolistID ? {...filtered, filter:value }: filtered )); // very complicated
    }


    return (
        <div className="App">
            {todolists.map((item)=>{
                let tasksForTodolist = tasks[item.id]
                    if (item.filter === "active") {
                    tasksForTodolist = tasks[item.id].filter(t => !t.isDone);
                        }
                     if (item.filter === "completed") {
                    tasksForTodolist = tasks[item.id].filter(t => t.isDone);
                          }

                return (
                    <Todolist key={item.id}
                              todolistID={item.id}
                              title={item.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={item.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;
