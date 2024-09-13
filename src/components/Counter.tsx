import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, Title, Wrapper } from './_styledCounter';
import { Buttons } from './Buttons';

export const Counter = () => {
  const [maxValue, setMaxValue] = useState(0);
  const [starValue, setStartValue] = useState(0);
  const [isSet, setIsSet] = useState<boolean>(false);
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
    setIsSet(true);
  };

  const handleReset = () => {
    setInc(starValue);
    setIsSet(false);
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
          disabled={maxValue <= starValue || starValue < 0 || maxValue < 0}
        />
      </Wrapper>
      <Wrapper flexDirection="column" border width padding height>
        <Title>
          {(maxValue <= starValue || starValue < 0 || maxValue < 0) && !inc ? 'Invalid value' : inc}
        </Title>
        <Wrapper>
          <Buttons title="increase" onClick={handleIncrease} disabled={!isSet || inc >= maxValue} />
          <Buttons title="reset" onClick={handleReset} />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};
