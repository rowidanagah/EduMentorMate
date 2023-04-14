import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const UserStatus = ({time_since_created,created_at,Title ,sessionId , session_dates_count ,mentor_id , user_id} ) => {
  const[isDeleteing,setIsDeleting]= useState(null);
    const capitalizedTitle = Title.charAt(0).toLocaleUpperCase() + Title.slice(1);
    // let userData= JSON.parse(localStorage.getItem('user'))// {}
    let getToken = localStorage.getItem("token");
    const headers = {
      Authorization: `Token ${getToken}`,
      "Content-Type": "application/json",
    };
    const delete_session =(sessionId) =>{
        axios
          .delete(`http://localhost:8000/roomsession/${sessionId}`, {
            headers,
          })
          .then((info) => {
            console.log(info)
          })
          .catch((err) => console.log(err));
          setIsDeleting(false)
    }
   
    return (
        <div style={{width:"100%"}} className="card card-outline-secondary text-xs-center mt-3 ">
            <figure>

              <div style={{position:"relative"}}>
              {isDeleteing ===sessionId && (
                <div style={{position:"absolute" ,width:'100%',height:'111%',backgroundColor:"#b9e5eb"}} className=" d-flex justify-content-center align-items-center rounded-2">
                <div className="text-dark text-center">
                <p>Are you sure you want to delete this session ?</p>
            <div className="d-flex justify-content-center align-items-center">
            <button onClick={() =>delete_session(sessionId)} className=" btn btn-danger" >Delete</button>
            <button className="btn btn-light ms-2" onClick={() => setIsDeleting(false)}>Cancel</button>
            </div>

                </div>
              </div>
                  )}
                <blockquote className="blockquote  text-dark pt-3 ps-3">
                <div  style={{wordWrap:'break-word'}}  className=" d-flex justify-content-between align-items-start  ">
                    <Link
                        to={`/SessionDetail/${sessionId}`}
                        style={{textDecoration: "none" }}
                        className="text-dark fs-4 HoverForLink ms-2 w-75 ">
                          {capitalizedTitle}
                          </Link>
                    {/* <i class="fa-regular fa-trash text-end"></i> */}

                    {mentor_id == user_id &&
                    <div  className=" d-inline pe-3 ">
                        <button className="btn " onClick={() =>setIsDeleting(sessionId)}>
                          {/* <i class="fa-solid fa-x text-danger"></i> */}
                          <i class="fa-solid  text-danger fa-trash"></i>
                          </button>
                    </div>}
                  </div>
                </blockquote>
                <figcaption className="text-dark font-italic ms-3 ps-3  pb-4">

                  with {session_dates_count} session dates!
                </figcaption>
                <figcaption className="blockquote-footer mb-0 font-italic ms-4   ">
                {created_at}
            <small class="text-muted pe-3 d-flex justify-content-end">
              {time_since_created && time_since_created}
            </small>
                </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default UserStatus;