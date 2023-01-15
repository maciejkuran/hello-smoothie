import { createContext, useState } from 'react';

export const CartContext = createContext({
  openCartHandler: '',
  cartIsOpen: '',
  openCheckoutHandler: '',
  isCheckout: '',
  activeOverlay: '',
  closeModalsHandler: '',
});

const CartContextProvider = props => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
    setActiveOverlay(true);
  };

  const openCheckoutHandler = () => {
    setIsCheckout(true);
    setCartIsOpen(false);
    setActiveOverlay(true);
  };

  const closeModalsHandler = () => {
    setCartIsOpen(false);
    setIsCheckout(false);
    setActiveOverlay(false);
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
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
