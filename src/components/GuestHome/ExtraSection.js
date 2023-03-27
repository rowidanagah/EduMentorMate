import React from "react";
import { Link } from "react-router-dom";

function ExtraSection() {
    return (
        <>
            <div className="p-5 h-100 m-0 container-fluid row align-items-center justify-content-center text-center "  >
                <div className="col-12 col-md-12 col-lg-5 text-dark">
                    <h2 className="display-2">Save ideas you like</h2>
                    <p>Collect your favorites so you can get back to them later</p>
                    <button className="btn btn-success rounded-pill me-2" type="button">Explore</button>
                </div>
                <div className="col-12 col-md-12 col-lg-5 d-flex m-5">
                    <div className="w-50 rounded justify-content-center d-flex" style={{backgroundColor: "snow"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-4 m-auto">Fern future home vibes</Link></div>
                    <div className="w-50">
                        <div className="w-100 mb-5 ms-5 rounded p-5" style={{backgroundColor: "green"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-6 m-auto">Fern future home vibes</Link></div>
                        <div className="w-100 mt-5 ms-5 rounded p-5" style={{backgroundColor: "#25CAAC"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-6 m-auto">Fern future home vibes</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ExtraSection;