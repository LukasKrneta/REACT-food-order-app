import { useEffect, useState } from "react";

import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }

        const mealsData = await response.json();
        setMeals(mealsData);
      } catch (err) {
        setError(err.message || "Something went wrong while loading meals.");
      } finally {
        setIsFetching(false);
      }
    }

    fetchMeals();
  }, []);

  if (isFetching) {
    return <p className="center">Loading meals...</p>;
  }

  if (error) {
    return (
      <div className="error">
        <h2>Could not load meals</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
