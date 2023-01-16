import { createContext, useState, useReducer } from 'react';

export const CartContext = createContext({
  openCartHandler: '',
  cartIsOpen: '',
  openCheckoutHandler: '',
  isCheckout: '',
  activeOverlay: '',
  closeModalsHandler: '',
  orderConfirmationHandler: '',
  didOrder: '',
  addItem: '',
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const itemIndex = state.items.findIndex(item => item.id === action.item.id);

    if (itemIndex >= 0) {
      state.items[itemIndex].quantity = action.item.quantity;
      state.items[itemIndex].total = action.item.total;

      const totalInCart = state.items.map(item => item.total).reduce((acc, val) => acc + val);

      return {
        total: totalInCart,
        items: [...state.items],
      };
    } else {
      return { total: state.total + action.item.total, items: [action.item, ...state.items] };
    }
  }
};

const CartContextProvider = props => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(false);
  const [didOrder, setDidOrder] = useState(false);

  const [cartState, dispatchCartState] = useReducer(cartReducer, { total: '', items: [] });

  const addItem = item => {
    dispatchCartState({ type: 'ADD', item: item, total: item.total });
  };

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
        openCartHandler,
        cartIsOpen,
        openCheckoutHandler,
        isCheckout,
        activeOverlay,
        closeModalsHandler,
        orderConfirmationHandler,
        didOrder,
        addItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;