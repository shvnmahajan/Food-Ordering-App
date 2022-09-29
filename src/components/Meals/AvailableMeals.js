import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    fetch(
      "https://foodorderingapp-e02a4-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const updatedData = [];
        for(let key in data){
          const tempObj = {...data[key]};
          tempObj.id = key;
          updatedData.push(tempObj);
        }
        console.log(updatedData);
        setMeals(updatedData);
      });
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              price={meal.price}
              description={meal.description}
              name={meal.name}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
