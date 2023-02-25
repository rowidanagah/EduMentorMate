import React from "react";
import { Link } from "react-router-dom";

function ExtraSection() {
    return (
        <>
            <div className="p-5 h-100 d-flex align-items-center justify-content-center text-center" style={{backgroundColor: "#172e59"}}>
                <div className="w-50 text-light">
                    <h2 className="display-2">Save ideas you like</h2>
                    <p>Collect your favorites so you can get back to them later</p>
                    <button className="btn btn-success rounded-pill me-2" type="button">Explore</button>
                </div>
                <div className="w-50 d-flex m-5">
                    <div className="w-50 rounded p-5" style={{backgroundColor: "#25CAAC"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-4">Fern future home vibes</Link></div>
                    <div className="w-50">
                        <div className="w-100 mb-5 ms-5 rounded p-3" style={{backgroundColor: "#25CAAC"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-6">Fern future home vibes</Link></div>
                        <div className="w-100 mt-5 ms-5 rounded p-3" style={{backgroundColor: "#25CAAC"}}><Link to="" style={{textDecoration: 'none'}} className="text-dark display-6">Fern future home vibes</Link></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ExtraSection;