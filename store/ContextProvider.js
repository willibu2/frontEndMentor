import CardContext from './card-context';
import { useState } from 'react';

const ContextProvider = (props) => {
  const validationNotEmpty = (value) => value.trim().length !== 0;
  const numberValidation = (value) =>
    value.trim().length === 16 && !isNaN(value);
  const monthValidation = (value) =>
    value.trim().length === 2 && !isNaN(value) && +value > 0 && +value < 13;
  const yearValidation = (value) => value.trim().length === 2;
  const ccvValidation = (value) => value.trim().length === 3 && !isNaN(value);

  const [name, setName] = useState('');
  const [nameIstouched, setNameIsTouched] = useState(false);
  const [number, setNumber] = useState('');
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const [month, setMonth] = useState('');
  const [monthIsTouched, setMonthIstouched] = useState(false);
  const [year, setYear] = useState('');
  const [yearIsTouched, setYearIsTouched] = useState(false);
  const [ccv, setCcv] = useState('');
  const [ccvIsTouched, setCcvIsTouched] = useState(false);

  const nameIsValid = validationNotEmpty(name);
  const nameIsInvalid = !nameIsValid && nameIstouched;
  const numberIsValid = numberValidation(number);
  const numberIsInvalid = !numberIsValid && numberIsTouched;
  const monthIsValid = monthValidation(month);
  const monthIsInvalid = !monthIsValid && monthIsTouched;
  const yearIsValid = yearValidation(year);
  const yearIsInvalid = !yearIsValid && yearIsTouched;
  const ccvIsValid = ccvValidation(ccv);
  const ccvIsInvalid = !ccvIsValid && ccvIsTouched;

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const numberBlurHandler = () => {
    setNumberIsTouched(true);
  };

  const monthChangeHandler = (event) => {
    setMonth(event.target.value);
  };

  const monthBlurHandler = () => {
    setMonthIstouched(true);
  };

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const yearBlurHandler = () => {
    setYearIsTouched(true);
  };

  const ccvChangeHandler = (event) => {
    setCcv(event.target.value);
  };

  const ccvBlurHandler = () => {
    setCcvIsTouched(true);
  };

  const reset = () => {
    setName('');
    setNumber('');
    setMonth('');
    setYear('');
    setCcv('');
    setNameIsTouched(false);
    setNumberIsTouched(false);
    setMonthIstouched(false);
    setYearIsTouched(false);
    setCcvIsTouched(false);

    setFormIsSubmitted(false);
  };

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    nameBlurHandler();
    numberBlurHandler();
    yearBlurHandler();
    monthBlurHandler();
    ccvBlurHandler();

    if (
      nameIsValid &&
      numberIsValid &&
      monthIsValid &&
      yearIsValid &&
      ccvIsValid
    ) {
      setFormIsSubmitted(true);
    }
  };

  const ctxData = {
    name,
    nameChangeHandler,
    nameIsInvalid,
    nameBlurHandler,
    nameIsValid,
    number,
    numberChangeHandler,
    numberBlurHandler,
    numberIsInvalid,
    numberIsValid,
    month,
    monthIsTouched,
    monthBlurHandler,
    monthChangeHandler,
    monthIsInvalid,
    monthIsValid,
    year,
    yearIsTouched,
    yearIsInvalid,
    yearIsValid,
    yearChangeHandler,
    yearBlurHandler,
    ccv,
    ccvIsTouched,
    ccvIsInvalid,
    ccvIsValid,
    ccvBlurHandler,
    ccvChangeHandler,
    formIsSubmitted,
    formSubmissionHandler,
    reset,
  };

  return (
    <CardContext.Provider value={ctxData}>
      {props.children}
    </CardContext.Provider>
  );
};

export default ContextProvider;
