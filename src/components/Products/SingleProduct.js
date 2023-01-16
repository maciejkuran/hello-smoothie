import classes from './SingleProduct.module.css';
import Card from '../UI/Card';
import BottomLine from '../UI/BottomLine';
import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';

import { useId, useContext } from 'react';
import useInput from '../../hooks/useInput';
import { CartContext } from '../../store/CartContextProvider';

const validateInput = value => +value >= 1 && value !== '';

const SingleProduct = props => {
  const id = useId();
  const { getValueHandler, inputBlurHandler, resetValueHandler, noError, value, isTouched } =
    useInput(validateInput);
  const { addItem } = useContext(CartContext);

  const addItemToCartHandler = () => {
    if (noError)
      addItem({
        id: props.id,
        amount: props.amount,
        img: props.img,
        ingredients: props.ingredients,
        name: props.name,
        price: props.price,
        quantity: +value,
        total: +props.price * +value,
      });

    resetValueHandler();
  };

  return (
    <div>
      <Card className={classes['single-product']}>
        <img src={props.img}></img>
        <h4>{props.name}</h4>
        <p>{props.ingredients}</p>
        <p className={classes['single-product__text']}>
          <span>{props.amount}l</span>
          <span className={classes['single-product__text--price']}>${props.price}</span>
        </p>
        <BottomLine />
        <form>
          <div>
            <label htmlFor={id}>quantity</label>
            <Input
              attributes={{
                onBlur: inputBlurHandler,
                onChange: getValueHandler,
                id: id,
                type: 'number',
                min: '1',
                max: '20',
                placeholder: '0',
                value: value,
              }}
            />
          </div>
          {!noError && isTouched && (
            <p className={classes['single-product__quantity-error']}>Please choose quantity.</p>
          )}
          <PrimaryButton
            className={classes['single-product__button--add-item']}
            attributes={{
              disabled: !noError,
              type: 'button',
              onClick: addItemToCartHandler,
            }}
          >
            Add+
          </PrimaryButton>
        </form>
      </Card>
    </div>
  );
};

export default SingleProduct;
