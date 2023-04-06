import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../Blog/BlogHeader";
import TagsList from "../Category/Category_TagList";
import Profile_Image_Icon from "../profile/Profile_Image_Icon";
import { useEffect, useState } from "react";
import axios from "axios";

function CardSession({
  title,
  sessionId,
  tags,
  name,
  bio,
  created_at,
  user_profile,
  time_since_created,
  mentor_id, description,
  followed_by_user,
}) {
  // handel btn in session user mentor
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    let x = axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then(response => {
        setUserData(response.data.user);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const loggedInUserId = userData.user_id 
  let isusercreated = loggedInUserId== mentor_id ? true : false;
  // if (!user_profile) {
  //     return <div>No sessions available.</div>;
  //   }
  const capitalizedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);


  if (!tags) {
    return <div className="d-none">No sessions available.</div>;
  }

  return (
    <>
      <div
        className="sessioncard mt-2"
        style={{ padding: "1px 16px 16px 0px" }}
      >
        <BlogHeader
          title={name}
          bio={bio}
          mentor_id={mentor_id}
          created_at={created_at}
          user_profile={user_profile}
          followed_by_user={followed_by_user} 
        />
        <div className="ms-5">
        <h1 style={{ margin: "15px 0px 15px 15px" }}>{capitalizedTitle}</h1>
          {/* <h1 style={{ margin: "15px 0px 15px 15px" }}>{sessionId}</h1> */}
          {/* <TagsList tags={["react", "python", "flask"]} /> */}
          {/* {console.log(tags[1],'aaaaa')} */}

          {/* {console.log(user_profile)}
                     {user_profile && <img src={`${user_profile}`} />} */}

          <div>
            {tags.map((tag) => (
              <Link
                className="HoverForLink text-dark"
                style={{ textDecoration: "none" }}
                key={tag}
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="d-flex justify-content-between">
            <div>
{
                ! isusercreated && <button
                className="btn btn-outline-success mt-4"
                style={{ marginLeft: "16px" }}
              >
                <Link to={`/calender/${sessionId}`} className="Link">
                  Pick a Session
                </Link>
              </button>
}
           
            </div>
            <div className="post-time mt-1  mb-4">
              <div className="mt-5">
                <small class="text-muted ">
                  Last updated {time_since_created && time_since_created}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardSession;
