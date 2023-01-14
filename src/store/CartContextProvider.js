import { createContext, useState } from 'react';

export const CartContext = createContext({
  openCartHandler: '',
  closeCartHandler: '',
  cartIsOpen: '',
});

const CartContextProvider = props => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        openCartHandler: openCartHandler,
        closeCartHandler: closeCartHandler,
        cartIsOpen: cartIsOpen,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
