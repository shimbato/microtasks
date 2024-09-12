import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, Title, Wrapper } from './_styledCounter';
import { Buttons } from './Buttons';

export const Counter = () => {
  const [maxValue, setMaxValue] = useState(0);
  const [starValue, setStartValue] = useState(0);

  const [inc, setInc] = useState<number>(starValue);

  const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
  };

  const handleIncrease = () => {
    if (inc < maxValue) {
      setInc(inc + 1);
    }
  };

  const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value);
  };

  const handleCompare = () => {
    setInc(inc === maxValue ? maxValue : starValue);
  };

  const handleReset = () => {
    setInc(0);
    setMaxValue(0);
    setStartValue(0);
  };
  return (
    <Container>
      <Wrapper flexDirection="column" alingItems="center" border width padding height>
        <Wrapper flexDirection="column" gap="1rem">
          <Wrapper>
            <p>max value</p>
            <input type="number" onChange={getMaxValue} value={maxValue} />
          </Wrapper>
          <Wrapper>
            <p>min value</p>
            <input type="number" onChange={getStartValue} value={starValue} />
          </Wrapper>
        </Wrapper>
        <Buttons
          title="Set"
          onClick={handleCompare}
          message={
            (maxValue === starValue ? "You can't choose similiar number" : null) ||
            (maxValue < starValue ? "Start number can't be lower max number" : null)
          }
          disabled={maxValue === starValue || maxValue < starValue}
        />
      </Wrapper>
      <Wrapper flexDirection="column" border width padding height>
        <Title color={inc === maxValue}>{inc}</Title>
        <Wrapper>
          <Buttons title="increase" onClick={handleIncrease} disabled={inc === maxValue} />
          <Buttons title="reset" onClick={handleReset} />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};
