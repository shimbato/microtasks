import React from 'react';
import { adidasArr } from '../data';
import { useParams } from 'react-router-dom';
import { S } from './_styles';
import { Error404 } from './pages/Error404';

export const Modal = () => {
  const params = useParams();

  const currentModel = adidasArr.find((el) => el.id === Number(params.id));

  return (
    <div style={{ textAlign: 'center' }}>
      {currentModel ? (
        <>
          <h2>{currentModel.model}</h2>
          <h4>{currentModel.collection}</h4>
          <h3>{currentModel.price}</h3>
          <S.Img src={currentModel.picture} />
        </>
      ) : (
        <h2> No model</h2>
      )}
    </div>
  );
};
