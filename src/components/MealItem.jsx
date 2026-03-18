/* eslint-disable react/prop-types */
export default function MealItem({ meal }) {
  const imageUrl = `http://localhost:3000/${meal.image}`;

  return (
    <li className="meal-item">
      <article>
        <img src={imageUrl} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
      </article>
    </li>
  );
}
