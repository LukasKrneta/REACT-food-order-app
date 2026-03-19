/* eslint-disable react/prop-types */
import { useContext } from "react";

import { CartContext } from "./ModalContext";
import Button from "./Button";

export default function MealItem({ meal }) {
  const { modalDispatch } = useContext(CartContext);
  const imageUrl = `http://localhost:3000/${meal.image}`;

  function handleAddMealToCart() {
    modalDispatch({ type: "ADD_ITEM", item: meal });
  }

  return (
    <li className="meal-item">
      <article>
        <img src={imageUrl} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
