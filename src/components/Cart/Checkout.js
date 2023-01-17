import classes from './Checkout.module.css';
import Card from '../UI/Card';
import Input from '../UI/Input';
import PrimaryButton from '../UI/PrimaryButton';
import CloseButton from '../UI/CloseButton';

import { useContext } from 'react';
import { CartContext } from '../../store/CartContextProvider';
import useInput from '../../hooks/useInput';
import useHttp from '../../hooks/useHttp';

const validateIfNotEmpty = value => value !== '';

const Checkout = () => {
  const { closeModalsHandler, orderConfirmationHandler, total, items } = useContext(CartContext);

  const { fetchData: sendData, isError, isLoading } = useHttp();

  //Name input
  const {
    getValueHandler: getNameHandler,
    inputBlurHandler: nameInputBlurHandler,
    noError: nameInputNoError,
    isTouched: nameInputIsTouched,
  } = useInput(validateIfNotEmpty);

  //Last name input
  const {
    getValueHandler: getLastNameHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    noError: lastNameInputNoError,
    isTouched: lastNameInputIsTouched,
  } = useInput(validateIfNotEmpty);
  //Street input
  const {
    getValueHandler: getStreetHandler,
    inputBlurHandler: streetInputBlurHandler,
    noError: streetInputNoError,
    isTouched: streetInputIsTouched,
  } = useInput(validateIfNotEmpty);
  //Apt/house nb.
  const {
    getValueHandler: getHouseHandler,
    inputBlurHandler: houseInputBlurHandler,
    noError: houseInputNoError,
    isTouched: houseInputIsTouched,
  } = useInput(validateIfNotEmpty);
  //Telephone nb.
  const {
    getValueHandler: getTelHandler,
    inputBlurHandler: telInputBlurHandler,
    noError: telInputNoError,
    isTouched: telInputIsTouched,
  } = useInput(validateIfNotEmpty);

  let formIsValid =
    nameInputNoError &&
    lastNameInputNoError &&
    streetInputNoError &&
    houseInputNoError &&
    telInputNoError;

  const invalidNameInputClassName =
    nameInputIsTouched && !nameInputNoError ? `${classes['checkout__input--invalid']}` : '';
  const invalidLastNameInputClassName =
    lastNameInputIsTouched && !lastNameInputNoError ? `${classes['checkout__input--invalid']}` : '';
  const invalidStreetInputClassName =
    streetInputIsTouched && !streetInputNoError ? `${classes['checkout__input--invalid']}` : '';
  const invalidHouseInputClassName =
    houseInputIsTouched && !houseInputNoError ? `${classes['checkout__input--invalid']}` : '';
  const invalidTelInputClassName =
    telInputIsTouched && !telInputNoError ? `${classes['checkout__input--invalid']}` : '';

  return (
    <Card className={classes.checkout}>
      <h3>Checkout</h3>
      <p>*Please note that we only deliver in Chicago :)</p>
      <form className={classes['checkout__form']}>
        <div className={classes['checkout__form__inline-wrapper']}>
          <div>
            <label htmlFor="name">Name</label>
            <Input
              className={invalidNameInputClassName}
              attributes={{
                id: 'name',
                type: 'text',
                placeholder: 'Name',
                onChange: getNameHandler,
                onBlur: nameInputBlurHandler,
              }}
            />
            {nameInputIsTouched && !nameInputNoError && (
              <p className={classes['checkout__text--error']}>*Please input your name.</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Input
              className={invalidLastNameInputClassName}
              attributes={{
                id: 'lastName',
                type: 'text',
                placeholder: 'Last Name',
                onChange: getLastNameHandler,
                onBlur: lastNameInputBlurHandler,
              }}
            />
            {lastNameInputIsTouched && !lastNameInputNoError && (
              <p className={classes['checkout__text--error']}>*Please input your last name.</p>
            )}
          </div>
        </div>

        <div className={classes['checkout__form__inline-wrapper']}>
          <div>
            <label htmlFor="street">Street</label>
            <Input
              className={invalidStreetInputClassName}
              attributes={{
                id: 'street',
                type: 'text',
                placeholder: 'Street',
                onChange: getStreetHandler,
                onBlur: streetInputBlurHandler,
              }}
            />
            {streetInputIsTouched && !streetInputNoError && (
              <p className={classes['checkout__text--error']}>*Please input street number.</p>
            )}
          </div>
          <div>
            <label htmlFor="houseNb">Apt/house nb.</label>
            <Input
              className={invalidHouseInputClassName}
              attributes={{
                id: 'houseNb',
                type: 'text',
                placeholder: 'Apt/house nb.',
                onChange: getHouseHandler,
                onBlur: houseInputBlurHandler,
              }}
            />
            {houseInputIsTouched && !houseInputNoError && (
              <p className={classes['checkout__text--error']}>*Please input apt/house nb.</p>
            )}
          </div>
        </div>

        <div className={classes['checkout__form__inline-wrapper']}>
          <div>
            <label htmlFor="tel">Telephone nb.</label>
            <Input
              className={invalidTelInputClassName}
              attributes={{
                id: 'tel',
                type: 'number',
                placeholder: 'Tel.',
                onChange: getTelHandler,
                onBlur: telInputBlurHandler,
              }}
            />
            {telInputIsTouched && !telInputNoError && (
              <p className={classes['checkout__text--error']}>*Please input tel.</p>
            )}
          </div>
        </div>
        <p>*Payment on delivery</p>
        <p>*In case of problems/questions, we will contact you by phone</p>
        <div className={classes['checkout__form__completion']}>
          <p>Total: ${total}</p>
          <PrimaryButton
            attributes={{
              type: 'submit',
              onClick: orderConfirmationHandler,
              disabled: !formIsValid,
            }}
          >
            Submit order!
          </PrimaryButton>
        </div>
      </form>
      <CloseButton attributes={{ onClick: closeModalsHandler }} />
    </Card>
  );
};

export default Checkout;
