import classes from './Form.module.css';
import { useContext, useState } from 'react';
import CardContext from '../store/card-context';

const Form = (props) => {
  const ctx = useContext(CardContext);

  const dateIsInvalid = ctx.yearIsInvalid || ctx.monthIsInvalid;

  return (
    <div className={classes['form-container']}>
      <form onSubmit={ctx.formSubmissionHandler}>
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          maxLength="20"
          onChange={ctx.nameChangeHandler}
          onBlur={ctx.nameBlurHandler}
        />
        {ctx.nameIsInvalid && <p>Please enter name!</p>}
        <label htmlFor="card-number">CARD NUMBER</label>
        <input
          id="card-number"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="16"
          onChange={ctx.numberChangeHandler}
          onBlur={ctx.numberBlurHandler}
        />
        {ctx.numberIsInvalid && <p>Please enter valid number! (16 digits)</p>}
        <div className={classes['manji-inputi']}>
          <div className={classes['prvi-manji']}>
            <label>EXP, DATE (MM/YY)</label>
            <input
              type="text"
              maxLength="2"
              placeholder="MM"
              onChange={ctx.monthChangeHandler}
              onBlur={ctx.monthBlurHandler}
            />
            <input
              type="text"
              maxLength="2"
              placeholder="YY"
              onChange={ctx.yearChangeHandler}
              onBlur={ctx.yearBlurHandler}
            />
            {dateIsInvalid && <p>please enter valid date!</p>}
          </div>
          <div className={classes['drugi-manji']}>
            <label htmlFor="ccv">CVC</label>
            <input
              id="ccv"
              type="text"
              maxLength="3"
              placeholder="e.g. 123"
              onChange={ctx.ccvChangeHandler}
              onBlur={ctx.ccvBlurHandler}
            />
            {ctx.ccvIsInvalid && <p>please enter valid ccv code! (3 digits)</p>}
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default Form;
