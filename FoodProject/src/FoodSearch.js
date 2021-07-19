import React from 'react';

const FoodSearch = (props) => {
    let handlecheck = (e) => {
        props.showFav(e.target.checked);
    }

    let handleKeyUp = (e) => {
        let value = e.target.value.toLowerCase();
        let existingList = JSON.parse(localStorage.getItem('food'));
        if(value){
            let newList = [];
            newList = existingList.filter(i => i.name.toLowerCase().indexOf(value) !== -1);
            newList ? props.filterFood(newList) : newList = existingList;
        }else{
            props.filterFood(existingList);
        }
    }
    
    return(
        <div className="FoodSearch">
            <div style={{marginBottom:"15px"}}>
                <p style={{fontSize: "25px",margin:"12px 0"}}>  𝓕𝓸𝓸𝓭 𝓛𝓲𝓼𝓽</p>
                <label className="FodSearch-label">
                    <input type="checkbox" className="FoodSearch-fav" onClick={handlecheck}/>
                    Show favourite
                </label>
            </div>
            <div>
                <input type="search" onKeyUp={handleKeyUp} placeholder="Search Food Items" />
            </div>
        </div>
    )
}

export default FoodSearch;