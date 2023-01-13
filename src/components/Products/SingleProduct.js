import classes from './SingleProduct.module.css';
import Card from '../UI/Card';
import BottomLine from '../UI/BottomLine';
import PrimaryButton from '../UI/PrimaryButton';
import Input from '../UI/Input';

import img from '../../assets/img/kiwi_bomb.jpg';

import { useId } from 'react';

const SingleProduct = () => {
  const id = useId();

  return (
    <div>
      <Card className={classes['single-product']}>
        <img src={img}></img>
        <h4>Kiwi boom!</h4>
        <p>kiwi, spinach, parsley</p>
        <p>
          <span>0.3l</span>
          <span className={classes['single-product__price']}>$6</span>
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
