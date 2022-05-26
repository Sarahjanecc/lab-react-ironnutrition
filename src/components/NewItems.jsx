import React from 'react';
import { useState } from 'react';

function NewItems(props) {
  const { newItemsProps } = props;

  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      calories,
      image,
      quantity,
    };

    setName('');
    setCalories(0);
    setImage('');
    setQuantity(0);

    newItemsProps(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <hr />

        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          name="calories"
          onChange={handleCaloriesChange}
          value={calories}
        />
        <hr />
        <label htmlFor="image">Image:</label>
        <input type="text" name="image" onChange={handleImageChange} />
        <hr />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          onChange={handleQuantityChange}
          value={quantity}
        />
        <hr />
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewItems;
