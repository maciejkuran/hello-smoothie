import classes from './OrderConfirmation.module.css';
import CloseButton from '../UI/CloseButton';
import Card from '../UI/Card';

import { useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';

const OrderConfirmation = () => {
  const { closeModalsHandler } = useContext(CartContext);

  return (
    <Card className={classes['order-confirmation']}>
      <h3>Thank you!</h3>
      <p>
        Your order will be delivered within 1 hour. Please keep your phone close because we may
        contact you before. Have a great day!
      </p>
      <CloseButton attributes={{ onClick: closeModalsHandler }}></CloseButton>
    </Card>
  );
};

export default OrderConfirmation;
