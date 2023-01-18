import classes from './OrderConfirmation.module.css';
import CloseButton from '../UI/CloseButton';
import Card from '../UI/Card';

import { useContext, useEffect } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const OrderConfirmation = props => {
  const { closeModalsHandler, didOrder, resetCart } = useContext(CartContext);

  useEffect(() => {
    if (!props.isError && didOrder) {
      resetCart();
    }
  }, [props.isError, didOrder]);

  const markup = !props.isError ? (
    <div>
      {' '}
      <h3>Thank you!</h3>
      <p>
        Your order will be delivered within 1 hour. Please keep your phone close because we may
        contact you before. Have a great day!
      </p>
      <CloseButton attributes={{ onClick: closeModalsHandler }}></CloseButton>
    </div>
  ) : (
    <div>
      <h3>Oops 👀</h3>
      <p>Something went wrong: {props.isError}. Please try again or contact us!</p>
    </div>
  );

  return <Card className={classes['order-confirmation']}>{markup}</Card>;
};

export default OrderConfirmation;
