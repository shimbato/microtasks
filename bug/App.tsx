import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";


export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

type TodolistType = {
	id: string
	title: string
	filter: FilterValuesType
}
export type taakObjectType = {
	[key: string]: TaskType[];
};

function App() {



	// const [tasks, setTasks] = useState<TaskType[]>([
	// 	{id: v1(), title: 'HTML&CSS', isDone: true},
	// 	{id: v1(), title: 'JS', isDone: true},
	// 	{id: v1(), title: 'ReactJS', isDone: false},
	// ])

	// const [filter, setFilter] = useState<FilterValuesType>('all')
	const todolistID1 = v1();
	const todolistID2 = v1();

	let [todolists, setTodolists] = useState<TodolistType[]>([
		{ id: v1(), title: 'What to learn', filter: 'all' },
		{ id: v1(), title: 'What to buy', filter: 'all' },
	])

	const [tasks, setTasks] = useState<taakObjectType>({
		[todolistID1]: [
			{ id: v1(), title: "HTML&CSS", isDone: true },
			{ id: v1(), title: "JS", isDone: true },
			{ id: v1(), title: "ReactJS", isDone: true },
			{ id: v1(), title: "Redux", isDone: false },
			{ id: v1(), title: "NextJS", isDone: false },
			{ id: v1(), title: "Node", isDone: false },
		],
		[todolistID2]: [
			{ id: v1(), title: "milk", isDone: false },
			{ id: v1(), title: "water", isDone: true },
		],
	});

	const removeTask = (todolistID:string, taskId: string) => {

		// const filteredTasks = tasks.filter((task) => {
		// 	return task.id !== taskId
		// })
		setTasks({...tasks, [todolistID1]: tasks[todolistID].filter(el=>el.id !==taskId)})
	}
	// todolistID:string, параметр нужен нам для того чтоб определить какому таску нам нужны изменнения
	const addTask = (todolistID:string, title: string) => {
		const newTask =  {
				id: v1(),
				title: title,
				isDone: false
			}

		// const newTask = {
		// 	id: v1(),
		// 	title: title,
		// 	isDone: false
		// }
		// const newTasks = [newTask, ...tasks]
		setTasks({...tasks, [todolistID]: [newTask,...tasks[todolistID] ]  })
	}

	const changeFilter = (todolistID: string, filter: FilterValuesType) => {

		// el.id - дата айди === todolistID которая приходит из Todolist если айди изменилось то делаем копию дату и заменяем фильтр на новый фильтер
		// и даем ему значение filter который приходит из Todolist или оставь страый массив
		// filter: filter new keys
		setTodolists( todolists.map(el=> el.id === todolistID ? {...el, filter: filter}: el))

		// const currentTodo = todolists.find((el)=> el.id === todolistID)
		// if(currentTodo){
		// 	currentTodo.filter = filter
		// 	setTodolists([...todolists])
		// }
		// setFilter(filter)
	}

	const changeTaskStatus = ( todolistID: string,taskId: string, taskStatus: boolean) => {

		// const newState = tasks.map(t => t.id == taskId ? {...t, isDone: taskStatus} : t)

		//если я хочу что то изменить то использую мап если удалить то фильтр
		 setTasks({...tasks, [todolistID]: tasks[todolistID].map((el)=>el.id === taskId ? {...el, isDone: taskStatus}: el)})
	}


	return (
		<div className="App">
			{todolists.map((el) => {
				let tasksForTodolist = tasks[el.id];
				if (el.filter === "active") {
					tasksForTodolist = tasks[el.id].filter((el) => el.isDone);
				}
				if (el.filter === "completed") {
					tasksForTodolist = tasks[el.id].filter((el) => !el.isDone);
				}
				console.log('tasks',tasks[el.id])
				return (
					<Todolist
						todolistID={el.id}
						title={el.title}
						tasks={tasksForTodolist}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
						changeTaskStatus={changeTaskStatus}
						filter={el.filter}
					/>
				)
			})}

		</div>
	);
}

export default App;
