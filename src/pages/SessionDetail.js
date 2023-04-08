import HeroSection from "../components/GuestHome/HeroSection";
import Testemonials from "../components/GuestHome/Testemonials";
import Trending from "../components/GuestHome/Trending";
import ExtraSection from "../components/GuestHome/ExtraSection";
import TitleSection from "../components/GuestHome/TitleSection";
import Testimonials from "../components/Home/Testomonel"
import { Fragment } from "react";
import Newsletter from "../components/Home/Newsletter";
import ChooseUs from "../components/Home/ChooseUs";
import Ourteam from "../components/Home/Ourteam";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";






function SessionDetail()
{
    const [blogDetails, setDetails] = useState("")
    const [SessionFeedback, setSessionFeedback] = useState("")
    const [content, setContent] = useState("")
     const [getuser, setuser] = useState("")
    const params = useParams()
    const Cid = params.id
    let getToken = localStorage.getItem("token");
    const headers = {
        'Authorization': `Token ${getToken}`,
        'Content-Type': 'application/json',
      };
    useEffect(() => {
        axios.get(`http://localhost:8000/roomsession/${Cid}`, {
          headers
        })
        .then((response) => {
            setDetails(response.data);
            setSessionFeedback(response.data.session_feedback);
            // TODO: Handle success
          })
            .catch((err) => console.log(err))
      },[blogDetails ,SessionFeedback ]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user`, {
          headers
        })
          .then((info) => setuser(info.data))
          .catch((err) => console.log(err))
    },[]) 
    //let getuser= JSON.parse(localStorage.getItem('user'))// {}
    console.log('----------------' , getuser)
    //setuser()
      console.log(blogDetails)
      console.log(blogDetails.tags)
      if (!blogDetails.tags) {
        return <div className="d-none">No sessions available.</div>;
      }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8000/SessionFeedback/create/`, {
        student: getuser.user.user_id,
        session: blogDetails.id,
        massage: content,
      },
      {
        headers
      }
      )
      .then((response) => {
        console.log(response.data);
        setContent("");
        // TODO: Handle success
      })
      .catch((error) => {
        console.error("Error:", error);
        // TODO: Handle error
      });
  };
  
  
  console.log(getuser.user.user_profile)
    return (
        <div className="background">
            <div className="p-5">
                <div className="d-flex align-items-center">
                    <img className="rounded-circle" style={{width: "90px"}} src={blogDetails.mentor.user_profile}/>
                    <h1 className="ms-3 display-4">{blogDetails.mentor.name}</h1>
                </div>
                <h5 className="ms-3 mt-4">{blogDetails.time_since_created}</h5>
                <h1 className="text-center display-1">{blogDetails.title}</h1>
                <div className="d-flex justify-content-center">
            {blogDetails.tags.map((tag) => (
              <Link
                className="HoverForLink text-dark"
                style={{ textDecoration: "none" }}
                key={tag}
              >
                #{tag}
              </Link>
            ))}
          </div>
          <div className="row m-4 justify-content-evenly p-5">
          {SessionFeedback.length?
          SessionFeedback.map((feedback) => (
              <div className="row col-12 col-lg-3 col-md-12 col-sm-12 m-1 p-2 mb-5" style={{border: "1px solid #25CAAC", boxShadow: "5px 10px #25CAAC"}}>
              <div className="row col-10 mt-2 ">
                 
                  <img src={feedback.student.user_profile} className="rounded-circle col-2  ms-1" style={{width: "60px", height: "35px"}} alt={feedback.student.user_profile}/>
                  <h6 className="col-7 ps-0 mt-2">{feedback.student.name}</h6>
                  <strong className="mt-2">{feedback.massage}</strong>
              </div>
          </div>
            )):<h1 className="display-5 text-center text-danger">No Feedbacks yet</h1>}
        </div>
        {/* add session feedback */}
        <div>
            {(!blogDetails.user_feedback && getuser.user_id == blogDetails.mentor ) &&
            <div class="mt-3 mb-3">
            <form onSubmit={handleSubmit}>
              <div class="d-flex flex-row align-items-start">
              <img class="rounded-circle me-2 " src={ getuser && "http://127.0.0.1:8000/" + getuser.user.user_profile } width="50"/>
              <textarea value={content} onChange={(event) => setContent(event.target.value)} class="form-control ml-1 shadow-none textarea"></textarea>
              </div>
              <div class="mt-2 text-right ms-4">
              <button  class="btn btn-outline-success  btn-sm ml-1 shadow-none" type="submit">Post comment</button>
              {/* <button style={{backgroundColor:"#074f57"}} class="btn btn-outline-light  btn-sm ml-1 shadow-none ms-3" type="submit">Cancel</button> */}
               </div>
               </form>
               </div>
            }
        </div>
            </div>
        </div>
    )
}

export default SessionDetail;