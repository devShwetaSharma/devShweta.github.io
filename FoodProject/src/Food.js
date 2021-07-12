import React, {useState} from 'react';
import FoodSearch from './FoodSearch';
import FoodInput from './FoodInput';
import FoodList from './FoodList';

export default function Food(){
    const [food, setFood] = useState(JSON.parse(localStorage.getItem('food')) || []);
    const [fav, setFav] = useState(false);

    const updateFood = (data) => {
        setFood(data);
    }

    const showFav = (check) => {
        setFav(check);
    }

    return(
        <div className="Food">
            <FoodSearch fooditems={food} showFav={showFav} filterFood={updateFood}/>
            <FoodInput addFood={updateFood}/>
            <FoodList fooditems={food} editFood={updateFood} favSelected={fav}/>
        </div>
    )
}