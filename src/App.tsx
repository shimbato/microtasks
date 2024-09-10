import React, { useState } from 'react';
import styles from './components/Site.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { navlinksItems, PATH } from './router';
import { S } from './components/_styles';

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.nav}>
          {navlinksItems.map((link) => (
            <S.NavbarWrapper>
              <NavLink
                to={link.url}
                // className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
              >
                {link.name}
              </NavLink>
            </S.NavbarWrapper>
          ))}
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>

      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
