import React, { FC } from 'react';
import { Button, Wrapper } from './_styledCounter';

type IButton = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  message?: string | null;
};
export const Buttons: FC<IButton> = ({ title, onClick, disabled, message }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
      {' '}
      <Button onClick={onClick} disabled={disabled}>
        {title}
      </Button>
      <p style={{ color: ' red' }}>{message}</p>
    </div>
  );
};
