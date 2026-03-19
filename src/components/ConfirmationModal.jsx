import { useContext } from "react";

import { CartContext } from "./ModalContext";
import Modal from "./Modal";

export default function ConfirmationModal() {
  const { modalState, modalDispatch } = useContext(CartContext);

  return (
    <Modal
      isOpen={modalState.isConfirmOpen}
      buttonText="Okay"
      onClose={() => modalDispatch({ type: "CONFIRM_CLOSE" })}
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
