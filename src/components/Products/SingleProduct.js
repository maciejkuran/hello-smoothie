import classes from './SingleProduct.module.css';
import Card from '../UI/Card';
import BottomLine from '../UI/BottomLine';
import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';

import { useId } from 'react';

const SingleProduct = props => {
  const id = useId();

  return (
    <div>
      <Card className={classes['single-product']}>
        <img src={props.img}></img>
        <h4>{props.name}</h4>
        <p>{props.ingredients}</p>
        <p>
          <span>{props.amount}l</span>
          <span className={classes['single-product__price']}>${props.price}</span>
        </p>
        <BottomLine />
        <form>
          <div>
            <label htmlFor={id}>amount</label>
            <Input
              attributes={{
                id: id,
                type: 'number',
                min: '1',
                max: '20',
                placeholder: '0',
              }}
            />
          </div>
          <PrimaryButton attributes={{ type: 'button' }}>Add+</PrimaryButton>
        </form>
      </Card>
    </div>
  );
};

export default SingleProduct;
