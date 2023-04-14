import React from "react";

function Trend({ id, image, creator, title, date }) {
    const profileimg = "http://localhost:8000/" + image;
    const capitalizedCreator = creator.charAt(0).toLocaleUpperCase() + creator.slice(1);
    const capitalizedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);

    return (
        <>
            <div className="row col-12 col-lg-3 col-md-12 col-sm-12 m-1 p-2 mb-5" style={{border: "1px solid #25CAAC", boxShadow: "5px 10px #25CAAC"}}>
                <p className="col-2 fw-lighter display-6">0{id}</p>
                <div className="row col-10 mt-2 ">
                   
                   {image && <img className="rounded-circle col-2  ms-1" style={{width: "60px", height: "35px"}} src={profileimg} alt=""/>}
                    <h6 className="col-7 ps-0 mt-2">{capitalizedCreator}</h6>
                    <strong className="mt-2">{capitalizedTitle}</strong>
                    <p className="fw-lighter mb-0 mt-2">{date}</p>
                </div>
            </div>
        </>
    );
}
export default Trend;