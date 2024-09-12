import React from 'react';
import styles from './Site.module.css';
import { NavLink, Outlet } from 'react-router-dom';

import { S } from './_styles';
import { PATH } from '../router';

export const Trainers = () => {
  const navlinksItems = [
    {
      name: 'Adidas',
      url: `/trainers/${PATH.PAGE_ONE}`,
    },
    {
      name: 'Puma',
      url: `/trainers/${PATH.PAGE_TWO}`,
    },
    {
      name: 'Abidas',
      url: `/trainers/${PATH.PAGE_THREE}`,
    },
  ];
  
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
};
