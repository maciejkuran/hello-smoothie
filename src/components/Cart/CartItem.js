import classes from './CartItem.module.css';
import Card from '../UI/Card';
import PrimaryButton from '../UI/PrimaryButton';

const CartItem = () => {
  return (
    <Card className={classes['cart-item']}>
      <div>
        <h4>Kiwi boom!</h4>
        <p>kiwi, spinach, parsley, something</p>
      </div>

      <div className={classes['cart-item__internal']}>
        <div className={classes['cart-item__internal__labels']}>
          <p>$5</p>
          <p>x1</p>
        </div>
        <div>
          <PrimaryButton className={classes['cart-item__internal__button']}>-</PrimaryButton>
          <PrimaryButton>+</PrimaryButton>
        </div>
      </div>

      <PrimaryButton className={classes['cart-item__internal__button--remove']}>
        Remove :(
      </PrimaryButton>
    </Card>
  );
};

export default CartItem;
