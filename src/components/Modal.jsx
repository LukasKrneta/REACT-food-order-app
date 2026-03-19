/* eslint-disable react/prop-types */
import { CartContext } from "./ModalContext";
import { useRef, useEffect, useContext } from "react";
import { createPortal } from "react-dom";

import ModalButtons from "./ModalButtons";

export default function Modal({
  children,
  isOpen,
  buttonText,
  isOkay,
  onClose,
  onConfirm,
}) {
  const { modalDispatch } = useContext(CartContext);
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else if (!isOpen) {
      modalRef.current?.close();
    }
  }, [isOpen]);

  function handleModalClosing() {
    if (onClose) {
      onClose();
      return;
    }

    modalDispatch({ type: "CART_CLOSE" });
  }

  return (
    <>
      {isOpen &&
        createPortal(
          <dialog className="modal" ref={modalRef} onClose={handleModalClosing}>
            <div className="cart">
              {children}
              <ModalButtons
                onClose={handleModalClosing}
                onConfirm={onConfirm}
                buttonText={buttonText}
                isOkay={isOkay}
              />
            </div>
          </dialog>,
          document.getElementById("modal"),
        )}
    </>
  );
}
