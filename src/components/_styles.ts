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

const Wrapper = styled.div<{ border?: string }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ border }) => border || 'none'};
`;
const Img = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  object-fit: cover;
`;

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: black;
  font-size: 16px;
  font-weight: 600;

  &:active {
    color: red;
  }
  &:hover,
  &:focus {
    outline: none;
    border-bottom: 3px solid red;
    cursor: pointer;
  }
`;
export const S = {
  NavbarWrapper, // here you write other styles what you have on top
  Wrapper,
  Img,
  Icon,
  StyledNavlink,
};
