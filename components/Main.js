import classes from './Main.module.css';
import Image from 'next/image';
import { useContext } from 'react';

import CardData from './CardData';
import Form from './Form';
import ThankYou from './ThankYou';
import CardContext from '../store/card-context';

const Main = () => {
  const ctx = useContext(CardContext);

  return (
    <div className={classes.main}>
      <div className={classes['img-container']}>
        <Image
          src="/images/bg-main-desktop.png"
          className={classes.img}
          width={426}
          height={975}
          alt="desktop layout image"
        />
        <Image
          src="/images/bg-card-front.png"
          width={200}
          height={150}
          alt="credit card front side"
          className={`${classes['card-image']} ${classes['back-card']}`}
        />
        <Image
          src="/images/bg-card-back.png"
          width={200}
          height={150}
          alt="credit card back side"
          className={`${classes['card-image']} ${classes['front-card']}`}
        />
        <CardData />
      </div>
      <div className={classes['second-container']}>
        {!ctx.formIsSubmitted && <Form />}
        {ctx.formIsSubmitted && <ThankYou />}
      </div>
    </div>
  );
};

export default Main;
