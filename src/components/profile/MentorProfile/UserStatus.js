import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserStatus = ({time_since_created,created_at,Title ,sessionId , session_dates_count ,mentor_id , user_id} ) => {
    const capitalizedTitle = Title.charAt(0).toLocaleUpperCase() + Title.slice(1);
    // let userData= JSON.parse(localStorage.getItem('user'))// {}
    let getToken = localStorage.getItem("token");
    const headers = {
      Authorization: `Token ${getToken}`,
      "Content-Type": "application/json",
    };
    const delete_session =() =>{
        axios
          .delete(`http://localhost:8000/roomsession/${sessionId}`, {
            headers,
          })
          .then((info) => {
            console.log(info)
          })
          .catch((err) => console.log(err));
    }
   
    return (
        <div style={{width:"105%",marginLeft:'-20%'}} className="card card-outline-secondary text-xs-center mt-2 p-4 ">
            <figure className=" " >
                <blockquote className="blockquote  text-dark">
                    <Link
                        to={`/SessionDetail/${sessionId}`}
                        style={{ margin: "15px 0px 15px 15px", textDecoration: "none" }}
                        className="text-dark fs-4 HoverForLink">{capitalizedTitle}</Link>
                    {/* <i class="fa-regular fa-trash text-end"></i> */}
                    {mentor_id == user_id &&
                    <div  className=" d-inline  text-end  ">
                        <button className="btn" onClick={delete_session}><i class="text-end fa-solid fa-trash"></i></button>
                    </div>}
                </blockquote>
                <figcaption className="text-dark mb-0 font-italic mt-1 ms-3  ">

                  with {session_dates_count} session dates!
                </figcaption>
                <figcaption className="blockquote-footer mb-0 font-italic mt-1 text-end ">

                    {time_since_created} ,{created_at}
                </figcaption>
            </figure>
        </div>
    )
}

export default UserStatus;