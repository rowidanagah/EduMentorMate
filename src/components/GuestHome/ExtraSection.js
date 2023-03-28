import React from "react";
import { Link } from "react-router-dom";

function ExtraSection() {
    return (
        <div style={{marginTop:"7%"}} className=" container">
            <div className="m-0 row align-items-center justify-content-center text-center"  >
                <div className="col-12 col-md-12 col-lg-5 text-dark">
                    <h2 className="display-5">Save ideas you like</h2>
                    <p>Collect your favorites so you can get back to them later</p>
                    <button style={{backgroundColor:"#074f57"}} className="btn btn-success rounded-pill me-2 pe-5 ps-5" type="button">Explore</button>
                </div>
                <div className="col-12 col-md-12 col-lg-5 d-flex ">
                    {/* <div className="w-50 rounded justify-content-center d-flex" style={{backgroundColor: "#5898ca"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-4 m-auto">Fern future home vibes</Link></div> */}
                    <div className="d-flex">
                        <div className="w-100  rounded p-5" style={{backgroundColor: "green"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-6 m-auto">Fern future home vibes</Link></div>
                        <div className="w-100 ms-3 rounded p-5" style={{backgroundColor: "#25CAAC"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-6 m-auto">Fern future home vibes</Link></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExtraSection;