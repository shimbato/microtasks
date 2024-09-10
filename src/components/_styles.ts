import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    // NavbarWrapper > a (inside div has a)
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    color: #7fb8f1;
    text-decoration: underline;
  }

  & > a:hover {
    color: steelblue;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
`;
export const S = {
  NavbarWrapper, // here you write other styles what you have on top
  Wrapper,
  Img,
};
