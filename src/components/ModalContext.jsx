/* eslint-disable react/prop-types */
import { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  isCartOpen: false,
  isFormOpen: false,
  isConfirmOpen: false,
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "CART_OPEN":
      return { ...state, isCartOpen: true };
    case "CART_CLOSE":
      return { ...state, isCartOpen: false };
    case "FORM_OPEN":
      return { ...state, isFormOpen: true };
    case "FORM_CLOSE":
      return { ...state, isFormOpen: false };
    case "CONFIRM_OPEN":
      return { ...state, isConfirmOpen: true };
    case "CONFIRM_CLOSE":
      return { ...state, isConfirmOpen: false };
    case "ADD_ITEM": {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.item.id,
      );

      if (existingCartItemIndex === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
        };
      }

      const updatedCartItems = [...state.cartItems];
      const existingCartItem = updatedCartItems[existingCartItemIndex];

      updatedCartItems[existingCartItemIndex] = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.id,
      );

      if (existingCartItemIndex === -1) {
        return state;
      }

      const existingCartItem = state.cartItems[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.id),
        };
      }

      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    default:
      return state;
  }
}

export default function ModalContext({ children }) {
  const [modalState, modalDispatch] = useReducer(cartReducer, initialState);

  const cartItems = modalState.cartItems;
  const totalCartItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const cartTotalAmount = cartItems.reduce((total, item) => {
    return total + item.quantity * Number(item.price);
  }, 0);

  return (
    <CartContext
      value={{
        modalState,
        modalDispatch,
        cartItems,
        totalCartItems,
        cartTotalAmount,
      }}
    >
      {children}
    </CartContext>
  );
}
