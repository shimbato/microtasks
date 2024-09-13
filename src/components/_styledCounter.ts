import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  height: 50vh;
`;

export const Wrapper = styled.div<{
  flexDirection?: string;
  gap?: string;
  alingItems?: string;
  border?: boolean;
  width?: boolean;
  padding?: boolean;
  height?: boolean;
  error?: boolean;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: space-evenly;
  gap: ${({ gap }) => gap || '2rem'};
  align-items: ${({ alingItems }) => alingItems || 'normal'};
  border: ${({ border }) => (border ? '3px solid green' : 'none')};
  width: ${({ width }) => (width ? '30rem' : 'auto')};
  height: ${({ height }) => (height ? '30vh' : '')};
  border-radius: 10px;

  & > input {
    width: 200px;
    border-radius: 10px;
    text-align: center;
    outline: none;
    border-color: ${({ error }) => (error ? 'red' : 'black')};
    background-color: ${({ error }) => (error ? '#ffdfd4' : '')};
    &:hover,
    &:focus {
      /* border-color: black; */
      outline: none;
    }

    & > p {
      font-size: large;
    }
  }
`;

export const Button = styled.button`
  background-color: inherit;
  border: 1px solid green;
  border-radius: 10px;
  outline: none;
  width: 100px;
  padding: 10px;
  &:hover {
    border-color: black;
  }
`;

export const Title = styled.p<{ color?: boolean }>`
  font-size: 40px;
  color: ${({ color }) => (color ? 'red' : 'black')};
  font-weight: 600;
  padding: 0;
  margin: 0;
  text-align: center;
`;
