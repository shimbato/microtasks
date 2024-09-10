import {FilterValuesType, TaskType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";

type PropsType = {
	todolistID: string
	title: string
	tasks: TaskType[]
	removeTask: (todolistID: string, taskId: string) => void
	changeFilter: (todolistID: string, filter: FilterValuesType) => void
	addTask: (todolistID:string,title: string) => void
	changeTaskStatus: (todolistID: string,taskId: string, taskStatus: boolean) => void
	filter: FilterValuesType
}

export const Todolist = (props: PropsType) => {
	const {title, tasks, filter, removeTask, changeFilter, addTask, changeTaskStatus} = props

	const [taskTitle, setTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)



	const addTaskHandler = () => {
		if (taskTitle.trim() !== '') {
			addTask( props.todolistID,taskTitle.trim())
			setTaskTitle('')
		} else {
			setError('Title is required')
		}
	}

	const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskTitle(event.currentTarget.value)
	}

	const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (event.key === 'Enter') {
			addTaskHandler()
		}
	}

	const changeFilterTasksHandler = (todolistID: string,filter: FilterValuesType) => {
		changeFilter(todolistID,filter)
	}

	return (
		<div>
			<h3>{title}</h3>
			<button>X</button>
			<div>
				<input
					className={error ? 'error': ''}
					value={taskTitle}
					onChange={changeTaskTitleHandler}
					onKeyUp={addTaskOnKeyUpHandler}
				/>
				<Button title={'+'} onClick={addTaskHandler}/>
				{error && <div className={'error-message'}>{error}</div> }
			</div>


				 	 <p>Тасок нет</p>
					 <ul>
						{tasks?.map((task) => {

							const removeTaskHandler = () => {
								removeTask(props.todolistID, task.id)
							}

							const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
								const newStatusValue = event.currentTarget.checked
								changeTaskStatus(props.todolistID,task.id, newStatusValue)
							}

							return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
								<input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
								<span>{task.title}</span>
								<Button onClick={removeTaskHandler} title={'x'}/>
							</li>
						})}
					</ul>

			<div>
				<Button className={filter === 'all' ? 'active-filter' : '' } title={'All'} onClick={()=> changeFilterTasksHandler(props.todolistID,'all')}/>
				<Button className={filter === 'active' ? 'active-filter' : '' } title={'Active'} onClick={()=> changeFilterTasksHandler(props.todolistID,'active')}/>
				<Button className={filter === 'completed' ? 'active-filter' : '' } title={'Completed'} onClick={()=> changeFilterTasksHandler(props.todolistID,'completed')}/>
			</div>
		</div>
	)
}
