import React from 'react';
import { useState } from 'react';

function Items(props) {
  const [quantity, setQuantity] = useState(0);
  const { name, calories, image } = props.food;
  const { foodProps } = props;

  const handleChange = (event) => setQuantity(event.target.value);

  const handleClick = (event) => {
    let allCalories = quantity * calories;

    const theItem = {
      name,
      calories,
      image,
      quantity,
      allCalories,
    };

    foodProps(theItem);

    setQuantity(0);
  };

  return (
    <div>
      <div className="food">
        <p>
          <h3>{calories}</h3>
        </p>
        <img src={image} alt="imagenfood" width={50} />
        <p>
          <strong>{name}</strong>
        </p>
        <input
          type="number"
          name="quantity"
          width={15}
          onChange={handleChange}
          value={quantity}
        />
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
export default Items;
