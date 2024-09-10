//SPRINT 1


import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//
//     return <button style={style}>
//         {props.title}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


 type NewsType = {
     title: string
     author: string
 }
 type ArticleType = {
     title: string
     date: string
     text: string
 }
 type PagePropsType = {
     news: NewsType[]
     mainArticle: ArticleType
 }
 export const Page: React.FC<PagePropsType> = (props) => {
     return <div>
         <article>
             <h1>Название: {props.mainArticle.title}</h1>
             <div>{props.mainArticle.date}</div>
             <div>{props.mainArticle.text}</div>
         </article>
         <aside>Articles:
             <ul>
                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
             </ul>
         </aside>
     </div>
 }



 // type PagePropsType = {
 //     age: number
 //     name: string
 //     avatarUrl: string
 // }
 // const Page: React.FC<PagePropsType> = (props) => {
 //     return <User a={props.age} n={props.name} />
 // }
 // type UserPropsType = {
 //     a: number
 //     n: string
 // }
 // export const User: React.FC<UserPropsType> = (props) => {
 //     return <div>name: {props.n}, age: {props.a}</div>
 // }

 // Что нужно написать вместо xxx и yyy?
 // Ответ дайте через пробел, например: blabla onClick(props)



 // type UserWalletType = {
 //     title: string
 //     amount: number
 // }
 // type UserWalletPropsType = {
 //     wallet: UserWalletType
 // }
 //
 // export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
 //     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
 // }
 //
 // export const UserMoney = () => {
 //     const wallets = [
 //         {title: 'bitcoin', amount: 1},
 //         {title: '$', amount: 100}
 //     ]
 //
 //     return <div>
 //         <UserWallet wallet={wallets[0]} />
 //         <UserWallet wallet={wallets[1]} />
 //     </div>
 // }


 // type UserPropsType = {
 //     name: string
 //     description: string
 // }
 // export const User: React.FC<UserPropsType> = (props) => {
 //     return <div>
 //         <h1>Имя: {props.name}</h1>
 //         //<div>Описание: {props.description}</div>
 //     </div>
 // }

 //Что нужно написать вместо ххх, что бы код работал?


 // type PropsType = {
 //     city: string        // 'minsk'
 //     country: string     // 'belarus'
 //     coords?: string     // '53.917501,27.604851'
 // }
 //
 // export const Wrapper1 = () => {
 //     return <PropsComponent1 city='minsk' country='belarus'/>
 // }
 //
 // export const PropsComponent1: React.FC<PropsType> = (props) => {
 //     return <div>hello</div>
 // }

 // Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки



 // import ReactDOM from 'react-dom'
 //
 // export const VideoBlock = () => {
 //     return <div>
 //         <VideoHeader />
 //         <VideoContent />
 //         <VideoStatistics />
 //     </div>
 // }
 // export const VideoHeader = () => {
 //     return <div>
 //         😀 Заголовок видео
 //     </div>
 // }
 // export const VideoContent = () => {
 //     return <div>
 //         📼 Контент видео
 //     </div>
 // }
 // export const VideoStatistics = () => {
 //     return <div>
 //         📊 Статистика лайков
 //     </div>
 // }
 //
 // ReactDOM.render(<div><VideoBlock/></div>,
 //     document.getElementById('root')
 // );

 //Что нужно написать вместо ххх, чтобы на экране увидеть:
 //😀 Заголовок видео
 //📼 Контент видео
 //📊 Статистика лайков
 // ❗ Ответ дать минимально возможным объёмом кода



 //EXAM 10

 // import ReactDOM from 'react-dom'
 //
 // const Son = (props: any) => {
 //     return <div>
 //         I am son. My name is {props.name}
 //     </div>
 // }
 //
 //
 // const Father = (props: any) => {
 //     return <div>
 //         I am father. My name is {props.name}
 //         <Son name={props.sonName} />
 //     </div>
 // }
 //
 // const Granny = (props: any) => {
 //     return <div>
 //         I am granny. My name is {props.name}
 //         <Father name={props.fatherName} sonName={props.sonName} />
 //     </div>
 // }
 //
 // export const App = () => {
 //     return <div>
 //         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
 //     </div>
 // }
 //
 // ReactDOM.render(<App/>,
 //     document.getElementById('root')
 // )