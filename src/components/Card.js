


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleButtonColor } from '../Store/action';

function Card(props) {
    // const buttonColor = useSelector((state) => state.buttonColor);
    // // console.log(buttonColor)
    // const dispatch = useDispatch();

    // const handleButtonClick = () => {
    //     dispatch(toggleButtonColor());
    // };

    return (
        <button className='btn btn-light m-2 rounded'
            style={{ backgroundColor: props.buttonColor }}
            onClick={props.handleButtonClick}
        >
            {props.title}
            <input className="m-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        </button>
    );
};

export default Card;