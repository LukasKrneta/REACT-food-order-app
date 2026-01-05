import ModalContext from "./components/ModalContext";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  return (
    <ModalContext>
      <Header />
      <Cart />
      <Form />
      <ConfirmationModal />
      <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p>
    </ModalContext>
  );
}

export default App;
