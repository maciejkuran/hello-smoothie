import classes from './CartItem.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';

import { useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const CartItem = props => {
  const { removeItem } = useContext(CartContext);

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
          <PrimaryButton className={classes['cart-item__internal__button']}>-</PrimaryButton>
          <PrimaryButton>+</PrimaryButton>
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

export default CartItem;
