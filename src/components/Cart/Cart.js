import classes from './Cart.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import CartItem from '../Cart/CartItem';
import Overlay from '../UI/Overlay';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Fragment, useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <Fragment>
      <Card className={classes.cart}>
        <h3>Your cart</h3>
        <div className={classes['cart__items']}>
          <CartItem />
          <CartItem />
        </div>
        <p className={classes['cart__total']}>Total: $10</p>
        <PrimaryButton className={classes['cart__button--checkout']}>Checkout</PrimaryButton>
        <button className={classes['cart__button--close']}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </Card>
      <Overlay />
    </Fragment>
  );
};

export default Cart;
