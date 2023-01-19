import { createContext, useState } from 'react';

export const ViewContext = createContext({
  openCartHandler: '',
  cartIsOpen: '',
  openCheckoutHandler: '',
  isCheckout: '',
  activeOverlay: '',
  closeModalsHandler: '',
  orderConfirmationHandler: '',
  didOrder: '',
});

const ViewContextProvider = props => {
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
    <ViewContext.Provider
      value={{
        openCartHandler,
        cartIsOpen,
        openCheckoutHandler,
        isCheckout,
        activeOverlay,
        closeModalsHandler,
        orderConfirmationHandler,
        didOrder,
      }}
    >
      {props.children}
    </ViewContext.Provider>
  );
};

export default ViewContextProvider;
