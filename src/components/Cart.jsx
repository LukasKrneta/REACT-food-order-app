import { useContext } from "react";
import { CartContext } from "./ModalContext";
import Modal from "./Modal";

export default function Cart() {
  const { modalState, modalDispatch, cartItems, cartTotalAmount } =
    useContext(CartContext);

  function handleCheckoutOpening() {
    if (cartItems.length === 0) {
      return;
    }

    modalDispatch({ type: "CART_CLOSE" });
    modalDispatch({ type: "FORM_OPEN" });
  }

  return (
    <>
      {modalState.isCartOpen && (
        <Modal
          isOpen={modalState.isCartOpen}
          buttonText="Go to Checkout"
          onClose={() => modalDispatch({ type: "CART_CLOSE" })}
          onConfirm={handleCheckoutOpening}
        >
          <h2>Your Cart</h2>
          <ul>
            {cartItems.length === 0 && <li>Your cart is empty.</li>}
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} - {item.quantity} x ${item.price}
                </p>
                <div className="cart-item-actions">
                  <button
                    onClick={() =>
                      modalDispatch({ type: "REMOVE_ITEM", id: item.id })
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      modalDispatch({ type: "ADD_ITEM", item })
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart-total">${cartTotalAmount.toFixed(2)}</p>
        </Modal>
      )}
    </>
  );
}
