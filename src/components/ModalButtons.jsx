/* eslint-disable react/prop-types */
import TextButton from "./TextButton";
import Button from "./Button";

export default function ModalButtons({
  onClose,
  onConfirm,
  buttonText,
  isOkay,
}) {
  return (
    <div className="modal-actions">
      {!isOkay ? (
        <>
          <TextButton onClick={onClose}>Close</TextButton>
          <Button onClick={onConfirm}>{buttonText}</Button>
        </>
      ) : (
        <Button onClick={onClose}>{buttonText}</Button>
      )}
    </div>
  );
}
