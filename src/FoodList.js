import React from 'react';
import FoodItem from './FoodItem';

const FoodList = (props) => {
    return(
        <div className="FoodList">  
            {props.fooditems.length > 0 ?
                (
                    props.favSelected ? 
                    props.fooditems.filter(f => f.isFavourite === true).map((f,i) => 
                        <FoodItem itemkey={i} name={f.name} fav={f.isFavourite} updateList={props.editFood}/>
                    ) : 
                    props.fooditems.map((f,i) => 
                        <FoodItem itemkey={i} name={f.name} fav={f.isFavourite} updateList={props.editFood}/>
                    )
                ) : <div className="FoodList-empty">You don't have any food items in the list</div>
            }
        </div>
    )
}

export default FoodList;