import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, Title, Wrapper } from './_styledCounter';
import { Buttons } from './Buttons';

export const Counter = () => {
  const [maxValue, setMaxValue] = useState(0);
  const [starValue, setStartValue] = useState(0);
  const [isSet, setIsSet] = useState<boolean>(false);
  const [inc, setInc] = useState<number>(starValue);
  const [result, setResult] = useState(starValue);

  const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
    if (e.currentTarget.value) setMaxValue(+e.currentTarget.value);
    setIsSet(false);
  };

  const handleIncrease = () => {
    if (inc < maxValue) {
      setInc(inc + 1);
    }

  };

  const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) setStartValue(+e.currentTarget.value);
    setIsSet(false);
  };

  const handleCompare = () => {
    setInc(inc === maxValue ? maxValue : starValue);
    setIsSet(true);
  };

  const handleReset = () => {
    setInc(starValue);
    // setIsSet(false);
  };

  const conditions =
    maxValue <= starValue || starValue < 0 || maxValue < 0
      ? 'Invalid value'
      : isSet
        ? inc
        : 'enter values and press "set"';
    
  return (
    <Container>
      <Wrapper flexDirection="column" alingItems="center" border width padding height>
        <Wrapper flexDirection="column" gap="1rem">
          <Wrapper error={maxValue <= starValue || starValue < 0 || maxValue < 0}>
            <p>max value</p>
            <input type="number" onChange={getMaxValue} value={maxValue} />
          </Wrapper>
          <Wrapper error={maxValue <= starValue || starValue < 0 || maxValue < 0}>
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
        <Title color={maxValue === inc}>{conditions}</Title>
        <Wrapper>
          <Buttons title="increase" onClick={handleIncrease} disabled={!isSet || inc >= maxValue} />
          <Buttons title="reset" onClick={handleReset} />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};
