import React, { useState } from 'react';

const FoodInput = (props) => {
    const [exist, Setexist] = useState(false);
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item){
            let a = [];
            a = JSON.parse(localStorage.getItem('food')) || [];
            if(a.filter(b => (b.name).toLowerCase() === item.toLowerCase()).length < 1){
                Setexist(false);
                a.push({'name':item,'isFavourite':false});
                localStorage.setItem('food', JSON.stringify(a));
                props.addFood(a);
                setItem('');
            }else{
                Setexist(true);
            }
        }
    }

    const handleChange = (e) => {
        setItem(e.target.value);
        Setexist(false);
    }

    return(
        <div className="FoodInput">
            <form onSubmit={handleSubmit}>
                <input type="text" id="food" placeholder="Enter Food Item" onChange={handleChange} value={item}/>
            </form>
            {exist ? <div className="FoodInput-exist">{item} already exists in the list.</div> : null}
        </div>
    )
}

export default FoodInput

