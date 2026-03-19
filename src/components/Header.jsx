import { useContext } from "react";
import { CartContext } from "./ModalContext";
import logo from "../assets/logo.jpg";
import TextButton from "./TextButton";

export default function Header() {
  const { modalDispatch, totalCartItems } = useContext(CartContext);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <TextButton onClick={() => modalDispatch({ type: "CART_OPEN" })}>
        Cart({totalCartItems})
      </TextButton>
    </div>
  );
}
