import classes from './CardData.module.css';
import { useContext } from 'react';
import CardContext from '../store/card-context';

const CardData = () => {
  const ctx = useContext(CardContext);

  const modifiedName = ctx.name.toUpperCase();

  const first = ctx.number.slice(0, 4);
  const second = ctx.number.slice(4, 8);
  const third = ctx.number.slice(8, 12);
  const fourth = ctx.number.slice(12, 16);

  const modifiedNumber = first + ' ' + second + ' ' + third + ' ' + fourth;

  const expirationDate = ctx.month + '/' + ctx.year;

  const expirationDateCondition = ctx.year && ctx.month;

  return (
    <>
      <div className={classes['card-information']}>
        <div className={classes['circle-container']}>
          <div className={classes['first-circle']}></div>
          <div className={classes['second-circle']}></div>
        </div>
        <div className={classes['card-number']}>
          {ctx.number ? modifiedNumber : '0000 0000 0000 0000'}
        </div>
        <div className={classes['name-and-ccv-container']}>
          <p className={classes.name}>
            {!ctx.name ? 'JANE APPLESEED' : modifiedName}
          </p>
          <p className={classes.date}>
            {expirationDateCondition ? expirationDate : '00/00'}
          </p>
        </div>
      </div>
      <div className={classes['back-card']}>
        <p className={classes.ccv}>{ctx.ccvIsValid ? ctx.ccv : '000'}</p>
      </div>
    </>
  );
};

export default CardData;
