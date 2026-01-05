import { useContext } from "react";
import { CartContext } from "./ModalContext";
import Modal from "./Modal";

export default function Cart() {
  const { modalState, modalDispatch } = useContext(CartContext);

  return (
    <>
      {modalState.isCartOpen && (
        <Modal
          isOpen={modalState.isCartOpen}
          setIsopen={modalDispatch}
          buttonText="Go to Checkout"
        >
          <h2>Your Cart</h2>
          <ul>{/* {orders.map(order => <li key={}>{order}</li>)} */}</ul>
          <h2>{/* {totalPrice} */}</h2>
        </Modal>
      )}
    </>
  );
}
