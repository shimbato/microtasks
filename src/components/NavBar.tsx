import React from 'react';
import { NavLink } from 'react-router-dom';
import main from '../assets/homework-icon-1.png';
import { S } from './_styles';

export const NavBar = () => {
  const items = [
    { name: 'Sneackers', url: '/trainers' },
    { name: 'Counter', url: '/counter' },
  ];
  return (
    <div>
      <S.Wrapper border="2px solid red">
        <S.Icon src={main} alt="home-work" />
        {items.map((el) => (
          <S.StyledNavlink to={el.url} key={el.name}>
            {el.name}
          </S.StyledNavlink>
        ))}
      </S.Wrapper>
    </div>
  );
};
