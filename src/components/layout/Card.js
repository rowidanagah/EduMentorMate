


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleButtonColor } from '../../Store/action';

function Card(props) {
    // const buttonColor = useSelector((state) => state.buttonColor);
    // // console.log(buttonColor)
    // const dispatch = useDispatch();

    // const handleButtonClick = () => {
    //     dispatch(toggleButtonColor());
    // };

    return (
        <button className='btn btn-light m-2 pt-3'
            style={{
                // backgroundColor: props.buttonColor,
                // width: "150px"
                // ,
                // height: "70px"
                // ,
                // backgroundImage: `url("https://how-to-study.com/images/study-skills-assessments.jpg")`,
                // backgroundSize: "cover",
                // opacity:"0.6"

                backgroundColor:'#5898ca'

            }}
            onClick={props.handleButtonClick}


        >


<h4 style={{color:"black"}} className="rounded">{props.title}
{/* cardbgcolor                your old background */}

            <input className="m-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

</h4>
     
        </button>
    );
};

export default Card;
