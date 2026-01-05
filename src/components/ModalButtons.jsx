import TextButton from "./TextButton";
import Button from "./Button";

export default function ModalButtons({ onClick, buttonText, isOkay }) {
  return (
    <div className="modal-actions">
      {!isOkay ? (
        <>
          <TextButton onClick={onClick}>Close</TextButton>
          <Button>{buttonText}</Button>
          {/* treba stavit functionality ovdje u <Button>? */}
        </>
      ) : (
        <Button onClick={onClick}>{buttonText}</Button>
      )}
    </div>
  );
}
