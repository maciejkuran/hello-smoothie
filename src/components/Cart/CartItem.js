import classes from './CartItem.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';

import React, { useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const CartItem = props => {
  const { removeItem, changeQuantity } = useContext(CartContext);

  return (
    <Card className={classes['cart-item']}>
      <div>
        <h4>{props.name}</h4>
        <p>{props.ingredients}</p>
      </div>

      <div className={classes['cart-item__internal']}>
        <div className={classes['cart-item__internal__labels']}>
          <p>${props.price}</p>
          <p>x{props.quantity}</p>
        </div>
        <div>
          <PrimaryButton
            attributes={{ onClick: changeQuantity.bind(null, props.id, -1) }}
            className={classes['cart-item__internal__button']}
          >
            -
          </PrimaryButton>
          <PrimaryButton attributes={{ onClick: changeQuantity.bind(null, props.id, 1) }}>
            +
          </PrimaryButton>
        </div>
      </div>

      <PrimaryButton
        attributes={{ onClick: removeItem.bind(null, props.id) }}
        className={classes['cart-item__internal__button--remove']}
      >
        Remove :(
      </PrimaryButton>
    </Card>
  );
};

export default React.memo(CartItem);
