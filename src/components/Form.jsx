import { useContext, useState } from "react";

import { CartContext } from "./ModalContext";
import Modal from "./Modal";

const initialFormData = {
  name: "",
  email: "",
  street: "",
  "postal-code": "",
  city: "",
};

export default function Form() {
  const { modalState, modalDispatch, cartItems, cartTotalAmount } =
    useContext(CartContext);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleFormClosing() {
    setError("");
    modalDispatch({ type: "FORM_CLOSE" });
  }

  async function handleOrderSubmitting() {
    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            items: cartItems,
            customer: formData,
          },
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to submit order.");
      }

      setFormData(initialFormData);
      modalDispatch({ type: "FORM_CLOSE" });
      modalDispatch({ type: "CLEAR_CART" });
      modalDispatch({ type: "CONFIRM_OPEN" });
    } catch (err) {
      setError(err.message || "Failed to submit order.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      isOpen={modalState.isFormOpen}
      buttonText={isSubmitting ? "Submitting..." : "Submit Order"}
      onClose={handleFormClosing}
      onConfirm={handleOrderSubmitting}
    >
      <h2>Checkout</h2>
      <p>Total amount: ${cartTotalAmount.toFixed(2)}</p>
      {error && (
        <div className="error">
          <h2>Could not submit order</h2>
          <p>{error}</p>
        </div>
      )}
      <div className="control">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="postal-code">Postal Code</label>
          <input
            type="text"
            id="postal-code"
            name="postal-code"
            value={formData["postal-code"]}
            onChange={handleInputChange}
          />
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </Modal>
  );
}
