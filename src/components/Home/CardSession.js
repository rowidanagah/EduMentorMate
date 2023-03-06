import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../Blog/BlogHeader";
import TagsList from "../Category/Category_TagList";
import Profile_Image_Icon from "../profile/Profile_Image_Icon";

function CardSession({ Title }) {
    return (
        <>
            <div className="sessioncard mt-2" style={{ padding: "1px 16px 16px 0px" }}>
                <BlogHeader />
                <div className="ms-5">
                    <h1 style={{ margin: "15px 0px 15px 15px" }}>{Title}</h1>
                    <TagsList tags={["react", "python", "flask"]} />
                    <button className="btn btn-outline-success mt-4" style={{ marginLeft: "16px" }}><Link to="/calender" className="Link">Pick a Session</Link></button>
                </div>
            </div>
        </>
    );
}
export default CardSession;