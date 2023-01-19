import classes from './WelcomeSection.module.css';

import Card from '../UI/Card';
import BottomLine from '../UI/BottomLine';
import PrimaryButton from '../UI/PrimaryButton';
import img from '../../assets/img/hello_smoothie_main.png';
import React from 'react';

const WelcomeSection = props => {
  const smoothScrollToProductsHandler = e => {
    props.productsContainer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={classes.header}>
      <Card className={classes['header__wrapper']}>
        <div>
          <h1>A better day with our smoothie!</h1>
          <BottomLine />
          <p>
            We are a local company based in Chicago. Handmade, selected fruits & veggies, original
            recipes. Delicious smoothies delivered in 1 hour.
          </p>
          <PrimaryButton attributes={{ type: 'button', onClick: smoothScrollToProductsHandler }}>
            Order now!
          </PrimaryButton>
        </div>
        <img src={img}></img>
      </Card>
    </header>
  );
};

export default React.memo(WelcomeSection);
