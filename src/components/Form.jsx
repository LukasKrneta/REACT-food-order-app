import Modal from "./Modal";

export default function Form() {
  return (
    <Modal buttonText="Submit Order">
      <h2>Checkout</h2>
      <p>Total amount: ${/* {totalAmount} */}</p>
      <label htmlFor="full-name">Full Name</label>
      <input type="text" name="full-name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" />

      <label htmlFor="street">Street</label>
      <input type="text" name="street" />

      <label htmlFor="postal-code">Postal Code</label>
      <input type="text" name="postal-code" />

      <label htmlFor="city">City</label>
      <input type="text" name="city" />
    </Modal>
  );
}
