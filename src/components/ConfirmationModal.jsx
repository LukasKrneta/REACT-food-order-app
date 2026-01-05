import { useState } from "react";

import Modal from "./Modal";

//ovo se otvara iz form componenta
export default function ConfirmationModal() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Modal
      isOpen={cartOpen}
      setIsopen={setCartOpen}
      buttonText="Okay"
      isOkay={true}
    >
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
    </Modal>
  );
}
