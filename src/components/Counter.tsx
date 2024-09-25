import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, Title, Wrapper } from './_styledCounter';
import { Buttons } from './Buttons';

export const Counter = () => {
  // Initialize state from localStorage or defaults
  const [maxValue, setMaxValue] = useState<number>(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    return savedMaxValue !== null ? JSON.parse(savedMaxValue) : 0;
  });
  const [starValue, setStartValue] = useState<number>(() => {
    const savedStartValue = localStorage.getItem('startValue');
    return savedStartValue !== null ? JSON.parse(savedStartValue) : 0;
  });
  const [isSet, setIsSet] = useState<boolean>(() => {
    const saveIsSet = localStorage.getItem('isSet');
    return saveIsSet ? JSON.parse(saveIsSet) : false;
  });
  const [inc, setInc] = useState<number>(() => {
    const savedInc = localStorage.getItem('inc');
    return savedInc !== null ? JSON.parse(savedInc) : starValue; // Replace starValue with your actual default value
  });

  const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
    setIsSet(false);
  };

  const handleIncrease = () => {
    if (inc < maxValue) {
      setInc(inc + 1);
    }
  };

  const getStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value);
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

  const errorItems = maxValue <= starValue || starValue < 0 || maxValue < 0;

  // Save values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('inc', JSON.stringify(inc));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(starValue));
    localStorage.setItem('isSet', JSON.stringify(isSet));
  }, [inc, maxValue, starValue, isSet]);

  return (
    <Container>
      <Wrapper flexDirection="column" alingItems="center" border width padding height>
        <Wrapper flexDirection="column" gap="1rem">
          <Wrapper error={errorItems}>
            <p>max value</p>
            <input type="number" onChange={getMaxValue} value={maxValue} />
          </Wrapper>
          <Wrapper error={errorItems}>
            <p>min value</p>
            <input type="number" onChange={getStartValue} value={starValue} />
          </Wrapper>
        </Wrapper>
        <Buttons title="Set" onClick={handleCompare} disabled={errorItems} />
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
