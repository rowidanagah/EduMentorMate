import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../Blog/BlogHeader";
import TagsList from "../Category/Category_TagList";
import Profile_Image_Icon from "../profile/Profile_Image_Icon";

function CardSession({ Title, sessionId ,tags,name,bio,created_at,user_profile}) {
    console.log(typeof tags,'yarab')
    
    return (
        <>
            <div className="sessioncard mt-2" style={{ padding: "1px 16px 16px 0px" }}>
                <BlogHeader title={name} bio={bio} created_at={created_at}/>
                <div className="ms-5">
                    <h1 style={{ margin: "15px 0px 15px 15px" }}>{Title}</h1>
                    <h1 style={{ margin: "15px 0px 15px 15px" }}>{sessionId}</h1>
                    {/* <TagsList tags={["react", "python", "flask"]} /> */}
                    {/* {console.log(tags[1],'aaaaa')} */}

                     {console.log(user_profile,'sora')}
                    <div>
                    {/* {tags.map((str, index) => (
                        <p key={index}>{str}</p>
                    ))} */}
                    <p>{tags}</p>
                    </div>
              
                    
                    
                    <button className="btn btn-outline-success mt-4" style={{ marginLeft: "16px" }}><Link
                        to={`/calender/${sessionId}`}
                        className="Link">Pick a Session</Link>
                    </button>
                </div>
            </div>
        </>
    );
}
export default CardSession;