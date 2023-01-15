import classes from './Cart.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';
import CartItem from '../Cart/CartItem';
import Overlay from '../UI/Overlay';
import CloseButton from '../UI/CloseButton';
import Checkout from '../Cart/Checkout';

import { Fragment, useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const Cart = () => {
  const { cartIsOpen, openCheckoutHandler, isCheckout, activeOverlay, closeModalsHandler } =
    useContext(CartContext);

  return (
    <Fragment>
      {cartIsOpen && (
        <Card className={classes.cart}>
          <h3>Your cart</h3>
          <div className={classes['cart__items']}>
            <CartItem />
            <CartItem />
          </div>
          <p className={classes['cart__total']}>Total: $10</p>
          <PrimaryButton
            attributes={{ onClick: openCheckoutHandler }}
            className={classes['cart__button--checkout']}
          >
            Checkout
          </PrimaryButton>

          <CloseButton attributes={{ onClick: closeModalsHandler }} />
        </Card>
      )}
      {activeOverlay && <Overlay onClick={closeModalsHandler} />}
      {isCheckout && <Checkout />}
    </Fragment>
  );
};

export default Cart;
