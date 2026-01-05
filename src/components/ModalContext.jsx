import { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  isCartOpen: false,
  isFormOpen: false,
  isConfirmOpen: false,
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
    default:
      return state;
  }
}

export default function ModalContext({ children }) {
  const [modalState, modalDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext value={{ modalState, modalDispatch }}>{children}</CartContext>
  );
}
