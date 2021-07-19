import React, {useState} from 'react';
import Modal from './Modal';

const FoodItem = (props) => {
    const [modal, setModal] = useState(false);

    let showModal = () => {
        setModal(prevState => !prevState)
    }

    let handleremove = (value) => {
        let existingList = JSON.parse(localStorage.getItem('food'));
        let newList = existingList.filter( f => f.name !== value);
        localStorage.setItem('food', JSON.stringify(newList));
        props.updateList(newList);
        showModal();
    }

    let favToggle = (value) => {
        let newList = JSON.parse(localStorage.getItem('food'));
        newList.map( f => {
            if(f.name === value){
                f.isFavourite = !f.isFavourite;
            }
            return f.isFavourite;
        });
        localStorage.setItem('food', JSON.stringify(newList));
        props.updateList(newList);
    } 

    return(
        <div className="FoodItem" key={props.itemkey} data-item={props.name}>
            <div className="FoodItem-name">{props.name}</div>
            <div className="FoodItem-actions">
                {
                    props.fav ? 
                    <svg className="FoodItem-fav" onClick={() => favToggle(props.name)} xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" version="1.1">
                        <g transform="translate(0 -1028.4)">
                        <path d="m12 1028.4 4 9 8 1-6 5 2 9-8-5-8 5 2-9-6-5 8-1z" fill="#f39c12"/>
                        <path d="m12 1028.4-4 9-6.9688 0.8 4.9688 4.2-0.1875 0.8 0.1875 0.2-1.75 7.8 7.75-4.8 7.75 4.8-1.75-7.8 0.188-0.2-0.188-0.8 4.969-4.2-6.969-0.8-4-9z" fill="#f1c40f"/>
                        </g>
                    </svg>
                    :
                    <svg className="FoodItem-notfav" onClick={() => favToggle(props.name)}  xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(2.000000, 2.500000)" fill="#f3cdf3db" fillRule="nonzero">
                        <path d="M15.9199,11.8203 C15.6599,12.0703 15.5399,12.4393 15.6009,12.7903 L16.4899,17.7103 C16.5609,18.1303 16.3909,18.5493 16.0399,18.7903 C15.6999,19.0403 15.2499,19.0703 14.8699,18.8703 L10.4409,16.5603 C10.2799,16.4803 10.1099,16.4293 9.9409,16.4293 L9.6699,16.4293 C9.5699,16.4393 9.4809,16.4803 9.3999,16.5193 L4.9699,18.8403 C4.7499,18.9503 4.4999,18.9903 4.2599,18.9503 C3.6599,18.8303 3.2709,18.2693 3.3699,17.6793 L4.2599,12.7593 C4.3199,12.4003 4.1999,12.0403 3.9409,11.7803 L0.3299,8.2803 C0.0299,7.9803 -0.0801,7.5493 0.0609,7.1503 C0.1909,6.7593 0.5299,6.4693 0.9499,6.4003 L5.9199,5.6793 C6.2999,5.6393 6.6299,5.4103 6.7999,5.0703 L8.9899,0.5803 C9.0399,0.4803 9.1099,0.3893 9.1909,0.3103 L9.2799,0.2403 C9.3199,0.1893 9.3799,0.1503 9.4409,0.1103 L9.5499,0.0703 L9.7199,0.0003 L10.1409,0.0003 C10.5209,0.0403 10.8509,0.2693 11.0209,0.5993 L13.2399,5.0703 C13.3999,5.4003 13.7099,5.6203 14.0699,5.6793 L19.0399,6.4003 C19.4599,6.4603 19.8109,6.7503 19.9499,7.1503 C20.0799,7.5493 19.9699,7.9903 19.6599,8.2803 L15.9199,11.8203 Z"/>
                        </g>
                        </g>
                    </svg>
                }
                <svg className="FoodItem-remove" onClick={showModal} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 72.434 72.437">
                    <path d="M36.22,0C16.212,0,0,16.215,0,36.223c0,19.999,16.212,36.214,36.22,36.214  s36.214-16.215,36.214-36.214C72.434,16.215,56.228,0,36.22,0z M51.812,48.083l-4.565,4.565l-11.02-11.021L24.86,52.995  l-4.565-4.565l11.367-11.367L20.639,26.04l4.568-4.565l11.02,11.02l11.349-11.343l4.565,4.565L40.792,37.063L51.812,48.083z"/>
                </svg>
            </div>
            <Modal show={modal} hideModal={showModal} remove={handleremove} name={props.name}/>
        </div>
    )
}

export default FoodItem;