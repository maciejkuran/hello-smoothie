import classes from './Checkout.module.css';
import Card from '../UI/Card';
import Input from '../UI/Input';
import PrimaryButton from '../UI/PrimaryButton';
import CloseButton from '../UI/CloseButton';

import { useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const Checkout = () => {
  const { closeModalsHandler, orderConfirmationHandler } = useContext(CartContext);

  return (
    <Card className={classes.checkout}>
      <h3>Checkout</h3>
      <p>*Please note that we only deliver in Chicago :)</p>
      <form className={classes['checkout__form']}>
        <div className={classes['checkout__form__inline-wrapper']}>
          <div>
            <label htmlFor="name">Name</label>
            <Input attributes={{ id: 'name', type: 'text', placeholder: 'Name' }} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Input attributes={{ id: 'lastName', type: 'text', placeholder: 'Last Name' }} />
          </div>
        </div>

        <div className={classes['checkout__form__inline-wrapper']}>
          <div>
            <label htmlFor="street">Street</label>
            <Input attributes={{ id: 'street', type: 'text', placeholder: 'Street' }} />
          </div>
          <div>
            <label htmlFor="houseNb">Apt/house nb.</label>
            <Input attributes={{ id: 'houseNb', type: 'text', placeholder: 'Apt/house nb.' }} />
          </div>
        </div>

        <div className={classes['checkout__form__inline-wrapper']}>
          <div>
            <label htmlFor="tel">Telephone nb.</label>
            <Input attributes={{ id: 'tel', type: 'text', placeholder: 'Tel.' }} />
          </div>
        </div>
        <p>*Payment on delivery</p>
        <p>*In case of problems/questions, we will contact you by phone</p>
        <div className={classes['checkout__form__completion']}>
          <p>Total: $10</p>
          <PrimaryButton attributes={{ type: 'submit', onClick: orderConfirmationHandler }}>
            Submit order!
          </PrimaryButton>
        </div>
      </form>
      <CloseButton attributes={{ onClick: closeModalsHandler }} />
    </Card>
  );
};

export default Checkout;
