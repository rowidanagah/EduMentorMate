import React from "react";

function Trend({ id, image, creator, title, date }) {
    return (
        <>
            <div className="row col-12 col-lg-3 col-md-12 col-sm-12 m-1 p-2 mb-5 p-2" style={{border: "1px solid #25CAAC", boxShadow: "5px 10px #25CAAC"}}>
                <p className="col-2 fw-lighter display-5">{id}</p>
                <div className="row col-10 mt-2 ">
                    <img className="rounded-circle col-2" style={{width: "50px", height: "25px"}} src={image} alt=""/>
                    <h6 className="col-10">{creator}</h6>
                    <strong className="mt-2">{title}</strong>
                    <p className="fw-lighter mb-0 mt-2">{date}</p>
                </div>
            </div>
        </>
    );
}
export default Trend;