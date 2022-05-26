import React from 'react';
import foods from './foods.json';
import { useState } from 'react';
import Items from '../components/Items.jsx';
import NewItems from '../components/NewItems.jsx';
import Search from "../components/Search.jsx"


function FoodBox() {
 
  const [food, setFood] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [filteredFood, setFilteredFoodAll] = useState(foods);
  const [totalItems, setTotalItems] = useState([]);

  function NewItems(addMore) {
    setShowForm(false);
    setFood([...food, addMore]);
  }

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const searchItem = (search) => {
    const filteredFood = food.filter((eachFood) => {
      return eachFood.name.includes(search);
    });
    setFilteredFoodAll(filteredFood);
  };

  const addTotalItem = (food) => {
    setTotalItems([...totalItems, food]);
  };


  return(

    <div>
      
      <h1>List Food</h1>


      <button onClick={handleShowForm}>See Items</button>
      {showForm === true && <NewItems newItemsProps={NewItems}/>
       }
      <br />
      <search searchItem ={searchItem}/>

      <br />

      {
        filteredFood.map((eachItem, index) => {
          return (
            
          <div>
            <div className="food">
              <Items key={eachItem.name + index} food={eachItem} foodProps{addTotalItem} />
            </div>
            </div>

          )

        }

    </div>
    
        )
      
}

export default FoodBox;
