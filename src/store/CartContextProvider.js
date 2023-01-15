import { createContext, useState } from 'react';

export const CartContext = createContext({
  openCartHandler: '',
  cartIsOpen: '',
  openCheckoutHandler: '',
  isCheckout: '',
  activeOverlay: '',
  closeModalsHandler: '',
  orderConfirmationHandler: '',
  didOrder: '',
});

const CartContextProvider = props => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(false);
  const [didOrder, setDidOrder] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
    setActiveOverlay(true);
  };

  const openCheckoutHandler = () => {
    setIsCheckout(true);
    setCartIsOpen(false);
    setActiveOverlay(true);
  };

  const orderConfirmationHandler = e => {
    e.preventDefault();
    setIsCheckout(false);
    setDidOrder(true);
    setActiveOverlay(true);
  };

  const closeModalsHandler = () => {
    setCartIsOpen(false);
    setIsCheckout(false);
    setActiveOverlay(false);
    setDidOrder(false);
  };

  return (
    <CartContext.Provider
      value={{
        openCartHandler: openCartHandler,
        cartIsOpen: cartIsOpen,
        openCheckoutHandler: openCheckoutHandler,
        isCheckout: isCheckout,
        activeOverlay: activeOverlay,
        closeModalsHandler: closeModalsHandler,
        orderConfirmationHandler: orderConfirmationHandler,
        didOrder: didOrder,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
