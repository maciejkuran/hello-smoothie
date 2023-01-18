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
  const {
    cartIsOpen,
    openCheckoutHandler,
    isCheckout,
    activeOverlay,
    closeModalsHandler,
    items,
    total,
    didOrder,
  } = useContext(CartContext);

  const itemsMarkup =
    items.length === 0 ? (
      <p>Your cart is currently empty. We will be more than happy to make a smoothie for you!</p>
    ) : (
      items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          amount={item.amount}
          img={item.img}
          ingredients={item.ingredients}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          totalPerItem={item.total}
        />
      ))
    );

  const totalMarkup =
    total === 0 || total === '' ? '' : <p className={classes['cart__total']}>Total: ${total}</p>;

  const checkoutBtnMarkup =
    total === 0 || total === '' ? (
      ''
    ) : (
      <PrimaryButton
        attributes={{ onClick: openCheckoutHandler }}
        className={classes['cart__button--checkout']}
      >
        Checkout
      </PrimaryButton>
    );

  return (
    <Fragment>
      {cartIsOpen && (
        <Card className={classes.cart}>
          <h3>Your cart</h3>
          <div className={classes['cart__items']}>{itemsMarkup}</div>
          {totalMarkup}
          {checkoutBtnMarkup}

          <CloseButton attributes={{ onClick: closeModalsHandler }} />
        </Card>
      )}
      {activeOverlay && <Overlay onClick={closeModalsHandler} />}
      {isCheckout && <Checkout />}
    </Fragment>
  );
};

export default Cart;
