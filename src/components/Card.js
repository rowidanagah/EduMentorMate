import { useState } from "react";

function Card(props) {


    

    return (
                <div className="ml-2 p-2 ">
                        {/* <input className="form-check-input" type="checkbox" id="gridCheck" /> */}
            <button type="button"  className="btn btn-light">{props.title}</button>

                </div>
    )
}
export default Card;

