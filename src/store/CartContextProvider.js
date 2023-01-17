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
  items: '',
  total: 0,
  removeItem: '',
  changeQuantity: '',
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const itemIndex = state.items.findIndex(item => item.id === action.item.id);

    if (itemIndex >= 0) {
      const newItemsState = [
        ...state.items.slice(0, itemIndex),
        { ...state.items[itemIndex], quantity: action.item.quantity, total: action.item.total },
        ...state.items.slice(itemIndex + 1),
      ];
      const totalInCart = newItemsState.map(item => item.total).reduce((acc, val) => acc + val);
      return {
        total: totalInCart,
        items: newItemsState,
      };
    } else {
      return { total: state.total + action.item.total, items: [action.item, ...state.items] };
    }
  }

  if (action.type === 'REMOVE') {
    const toDeleteItemTotal = state.items.filter(item => item.id === action.id)[0].total;
    const filteredItems = state.items.filter(item => item.id !== action.id);

    return { total: state.total - toDeleteItemTotal, items: filteredItems };
  }

  if (action.type === 'CHANGE_QUANTITY') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

    const newItemsState = [
      ...state.items.slice(0, existingCartItemIndex),
      {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + action.amount,
        total:
          state.items[existingCartItemIndex].price *
          (state.items[existingCartItemIndex].quantity + action.amount),
      },
      ...state.items.slice(existingCartItemIndex + 1),
    ];

    const totalInCart = newItemsState.map(item => item.total).reduce((acc, val) => acc + val);

    if (newItemsState[existingCartItemIndex].quantity > 0) {
      return { total: totalInCart, items: newItemsState };
    } else {
      const filteredItems = newItemsState.filter(item => item.id !== action.id);
      return { total: totalInCart, items: filteredItems };
    }
  }
};

const CartContextProvider = props => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(false);
  const [didOrder, setDidOrder] = useState(false);

  const [cartState, dispatchCartState] = useReducer(cartReducer, { total: 0, items: [] });

  const addItem = item => {
    dispatchCartState({ type: 'ADD', item: item, total: item.total });
  };

  const removeItem = id => {
    dispatchCartState({ type: 'REMOVE', id: id });
  };

  const changeQuantity = (id, amount) => {
    dispatchCartState({ type: 'CHANGE_QUANTITY', id: id, amount: amount });
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
        items: cartState.items,
        total: cartState.total,
        removeItem,
        changeQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
