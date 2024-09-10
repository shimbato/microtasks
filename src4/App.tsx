import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import styled from "styled-components";
import {Routes, Route, Navigate, NavLink} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {S} from './components/_styles'
import {Modal} from "./components/Modal";
function App() {
const PATH = {
    PAGE1:"/adidas",
    PAGE2:"/puma",
    PAGE3:"/abibas",
    PAGEERROR:"/page/error404",
} as const // you cant change the name even свойствоо

    const items = [
        {
            path:PATH.PAGE1,
            name:'Adidas',
        },
        {
            path:PATH.PAGE2,
            name:'Puma',
        },
        {
            path:PATH.PAGE3,
            name:'Abibas',
        }
    ]
    return (
        <>
            <div>
                <div className={styles.header}><h1>HEADER</h1></div>
                <div className={styles.body}>
                    <div className={styles.nav}>
                            {
                                items.map((el)=>(
                                 <S.NavbarWrapper>
                                    <NavLink
                                        to={el.path}
                                    >
                                        {el.name}
                                    </NavLink>
                                 </S.NavbarWrapper>
                                ))
                            }
                    </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Adidas/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={'/adidas/:id'} element={<Modal/>}/>
                        <Route path={'/*'} element={<Error404/>}/>


                    </Routes>
                </div>

            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
        </>
    );
}


  

export default App;
