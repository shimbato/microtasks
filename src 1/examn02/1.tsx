import React, {ChangeEvent, useState} from 'react';

// 2
// getUser+
//
// 7
// isCommentReady ???
//
// 8
// Masha +


//1
// import React, {ChangeEvent, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Colorize() {
//
//     const [color, setColor] = useState<string>("black")
//     const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]
//
//     const styles = {
//         width: "100px",
//         height: "100px",
//         borderRadius: "50%",
//         backgroundColor: "black"
//     }
//
//     const getColor = (colors: string[]) => {
//         const nextColor = colors[Math.floor(Math.random() * colors.length)]
//         return nextColor
//     }
//
//     return (
//         <main>
//             <div style={{...styles, backgroundColor: color}}/>
//             <div>
//                 <button
//                     onClick={() => setColor(getColor(colors))}
//                 >
//                     Get random color
//                 </button>
//             </div>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <Colorize/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы круг менял цвет по клику?


//2
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//     const usersList = (getUser.length  === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//         </ul>
//
//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?


//3
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//             Меняю цвет по клику
//         </button>
//     )
// }
//
//
// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );
//
// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?


//4
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );
//
// // Что надо вставить вместо XXX, чтобы код работал нормально?


//5
// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     personalData: PersonalDataType
// }
// type PersonalDataType = {
//     gender: string
//     age: number
//     technologies: Array<TechnologiesType>
// }
// type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'
//
// function UsersList() {
//
//     const [users, setUsers] = useState<Array<UserType>>([
//         {
//             id: 1,
//             name: 'Bob',
//             personalData: {
//                 gender: 'male',
//                 age: 23,
//                 technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']
//             }
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             personalData: {
//                 gender: 'male',
//                 age: 21,
//                 technologies: ['HTML', 'CSS', 'React']
//             }
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             personalData: {
//                 gender: 'female',
//                 age: 26,
//                 technologies: ['HTML', 'CSS', 'JS/TS']
//             }
//         },
//         {
//             id: 4,
//             name: 'Helen',
//             personalData: {
//                 gender: 'female',
//                 age: 31,
//                 technologies: ['HTML', 'CSS']
//             }
//         },
//         {
//             id: 5,
//             name: 'Donald',
//             personalData: {
//                 gender: 'male',
//                 age: 28,
//                 technologies: ['React', 'JS/TS', 'Redux']
//             }
//         },
//     ])
//
//
//     return <ul>
//         {users.map(u => {
//             return (
//                 u.personalData.technologies.length >= 5
//                     ? <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
//                     </li>
//                     : <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. `}
//                     </li>)
//         })}
//     </ul>
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Те пользователи, у которых в стэке пять и более технологий, должны в списке
// // быть отмечены, как готовые к работе.
// // Что надо вставить вместо XXX, чтобы код работал нормально?
//

//6
// import React, {ChangeEvent, useState} from 'react';
//
// const user = {
//     name: "Nikita",
//     age: 68,
//     friends: ["Sergey", "Nikita", "Vladimir"]
// }
//
// const updatedUser = {...user}
//
// updatedUser.friends.push("Katya")
//
// console.log(user.friends[3])
//
// /*Какое значение будет выведено в консоль?*/
//
//


//7

// import ReactDOM from 'react-dom'
// import './index.css'
//
// const MIN_COMMENT_SIZE = 5
//
// function LongCommentChecker() {
//     const [comment, setComment] = useState<string>('')
//     const isCommentReady = comment.length > MIN_COMMENT_SIZE
//
//     const onClickSendComment = () => {
//         if (isCommentReady) {
//             setComment('')
//         }
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newComment = e.currentTarget.value
//
//         setComment(newComment)
//     }
//
//     return (
//         <main>
//             <textarea
//                 placeholder={'Your comment must have more than 5 charters'}
//                 value={comment}
//                 onChange={onChangeHandler}
//             />
//             <div>
//                 <button
//                     disabled={isCommentReady}
//                     onClick={onClickSendComment}>
//                     Send comment
//                 </button>
//             </div>
//         </main>
//     )
// }
//
// ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'))

//8
// const user = {
//     name: "Sergey",
//     age: 69
// }
//
// const copyUser = {...user}
//
// user.name = "Masha"
//
// /*Чему равно copyUser.name после выполнения этого кода?*/

//9
// const client = {
//     name: "Eva",
//     age: 25
// }
//
// const copyClient = client
//
// client.age = 68
// console.log(copyClient.age)
//
// /*Чему равно

//10
// const student = {

//     name: "Michail"
// }
//
// const newStudent = student
//
// const myFriend = {
//     ...newStudent
// }
//
// const newUser = {
//     name: "Vladislav"
// }
//
// const myFriendName =  student.name !== myFriend.name
//     ? newUser.name
//     : student.name
//
//
// console.log(myFriendName)
// /*Какое значение получит переменная "myFriendName"?*/