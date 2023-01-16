import { useState } from 'react';

const useInput = validationLogic => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationLogic(value);
  const noError = valueIsValid && isTouched;

  const getValueHandler = e => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetValueHandler = () => {
    setValue('');
    setIsTouched(false);
  };

  return { getValueHandler, inputBlurHandler, value, resetValueHandler, noError, isTouched };
};

export default useInput;
