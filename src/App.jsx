import ModalContext from "./components/ModalContext";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  return (
    <ModalContext>
      <Header />
      <Meals />
      <Cart />
      <Form />
      <ConfirmationModal />
    </ModalContext>
  );
}

export default App;
