import classes from './ThankYou.module.css';
import CardContext from '../store/card-context';
import { useContext } from 'react';

const ThankYou = () => {
  const ctx = useContext(CardContext);

  return (
    <div className={classes.main}>
      {/* <div>
        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
      </div> */}
      <h1>THANK YOU!</h1>
      <p>We have added your card details</p>
      <button onClick={ctx.reset}>Continue</button>
    </div>
  );
};

export default ThankYou;
