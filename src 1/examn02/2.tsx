import React, {ChangeEvent, useState} from 'react';


//1

// type StudentType = {
//     id: number
//     name: string
//     age: number
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob", age: 34},
//     {id: 2, name: "Alex", age: 23},
//     {id: 3, name: "Ann", age: 25},
//     {id: 4, name: "Charley", age: 20},
// ]
//
// export const friends: FriendsType = {
//     1: ["Jack","Oliver", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William",  "Lewis","Michael"],
//     4: ["Oscar", "Thomas", "William",],
// }

//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Имеют ли студенты students[1] и students[3] общих друзей?
//Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.


// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(friends[3][1])
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут:  friends[3][1]?
//


//3

// const consumers = ["Vanya", "Konstantin", "Ekaterina"]
// const birthday = [... consumers]
// const article = birthday
//
// const result = article !== consumers
//     ? "Yo!!!"
//     : "Hey!!!"
//
// console.log(result)
// /*Имя какой переменной надо указать вместо XXX, что бы переменная result получила значение "Yo!!!"? Если такой переменной нет, в качестве ответа укажите null.*/


//4
//const user = {
//     name: "Maria",
//     age: 87,
//     friends: ["Maria", "Liza", "Michail"]
// }
//
// const updatedUser = {
//     ...user,
//     friends: user.friends
// }
//
// console.log(user.friends === updatedUser.friends)
//
// /*Какое значение будет выведено в консоль?*/

//5
// type StudentType = {
//     id: number
//     name: string
// }
// type Students = Array<StudentType>
// type Friends = {
//     [key: string]: Array<string>
// }
//
// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(Array.isArray(students))
//
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение Array.isArray(students)?

//6

// const student = {
//     name: "Ivan",
//     age: 48,
//     friends: ["Margo", "Maria", "Marina"]
// }
//
// const newFriend = "Sergey"
//
// const friends = [XXX, newFriend]
//
// const updatedStudent = {...student, friends: friends}
//
// /*Выполнено преобразование объекта: добавлен новый друг в список.
// Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?*/

// import React, {ChangeEvent, useState} from 'react';
//
//
// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }
//
// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"
//
// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]
//
// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }
//
// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо XXX, чтобы функция работала?


// type Student = {
//     id: number
//     name: string
// }
// type Students = Array<Student>
// type Friends = {
//     [key: string]: Array<string>
// }
//
// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(Array.isArray(friends))
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение: Array.isArray(friends)?

//9
// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<String>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(friends[students[0].id][3])
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?
//
//
//
//10
// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(friends[students[1].id][2])
//
// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[1].id][2]?


// const client = {
//     name: "Sergey",
//     age: 89,
//     scores: [74.53, 92.23, 0.58]
// }
//
// const [first, second, third = 36.81] = client.scores
//
// console.log(first)
// console.log(second)
// console.log(third)
// switch(third){
//     case 36.81:
//         console.log("Tunisia")
//         break;
//     case 92.23:
//         console.log("Estonia")
//         break;
//     default:
//         console.log("Australia");
// }
// /*Какую строку мы увидим в консоли?*/
//

