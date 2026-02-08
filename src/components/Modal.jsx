import { CartContext } from "./ModalContext";
import { useRef, useEffect, useContext } from "react";
import { createPortal } from "react-dom";

import ModalButtons from "./ModalButtons";

// eslint-disable-next-line react/prop-types
export default function Modal({ children, isOpen, buttonText, isOkay }) {
  const { modalDispatch } = useContext(CartContext);
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else if (!isOpen) {
      modalRef.current?.close();
    }
  }, [isOpen]);

  function handleCartClosing() {
    modalDispatch({ type: "CART_CLOSE" });
  }

  return (
    <>
      {/* mozda dodat is contexta */}
      {isOpen &&
        createPortal(
          <dialog className="modal" ref={modalRef} onClose={handleCartClosing}>
            <div className="cart">
              {children}
              <ModalButtons
                onClick={handleCartClosing}
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
