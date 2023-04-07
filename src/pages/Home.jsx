import React from "react";
import Blog from "../components/Blog/Blog";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/Home/Sidebar";
import Search from "../components/Home/search";
import Rightside from "../components/Home/Rightside";
import CardSession from "../components/Home/CardSession";
import { useEffect } from "react";
import axios from "axios";

import Error from "../components/ErrorAndSuccess/Error";
import Success from "../components/ErrorAndSuccess/Success";
import EditProfile from "../components/profile/EditProfile";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Home() {
  const [cardSession, setcardSession] = useState([])
  const [blogs, setBlogs] = useState([]);
  const [searcWord, setSearchWord] = useState("");
  const [mergedData, setMergedData] = useState([]);

  // auth stuff & headers
  let getToken = localStorage.getItem("token");
  const headers = {
    'Authorization': `Token ${getToken}`,
    'Content-Type': 'application/json',
  };
  const params = {
    'title': searcWord
  }

  // handle search
  const changeHandler = (e) => {
    console.log("-----------------------------change don");
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  // blog fetch
  const get_blog_data = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/blogsapi/?title=${searcWord}`, { headers });
      setBlogs(response.data)
      const response_sessions = await axios.get(`http://127.0.0.1:8000/roomsession/?title=${searcWord}`, { headers });
      setcardSession(response_sessions.data)

    } catch (error) {
      console.error('-------------------------------rowida error', error);
    }
  }
  // get session data
  const get_session_data = () => {
    axios.get('http://127.0.0.1:8000/roomsession/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${getToken}`,
      },
    })
      .then((info) => setcardSession(info.data))
      .catch((err) => console.log(err));
  }
  // get blog & sessions fetch
  useEffect(() => {
    get_blog_data();
    get_session_data();



  }, [searcWord]) //cardSession, blogs, searcWord
  const merged_data = [...blogs, ...cardSession].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  console.log('--------------------------', merged_data)
  

  // const merged_data = [...blogs, ...cardSession].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  // console.log('--------------------------', merged_data)

  // =================================================================== osama
// =================================================================== .... 
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  //useEffect(() => {
  //   const token = localStorage.getItem('token');
  let x = axios.get('http://127.0.0.1:8000/api/user', { headers })
    .then(response => {
      setUserData(response.data.user);

    })
      .then(response => {
        setUserData(response.data.user);
      })
      .catch(error => {
        console.log(error);
      });
  //}, []);
 
  let test = localStorage.setItem('user', JSON.stringify(userData))
 console.log(userData);
  // auth stuff
  let getData = userData.usertype
  console.log("-------------======>", getData)
  let ismentor = getData == "mentor" ? true : false;

  let getfav = userData?.favourite_bins?.length || 0;
  console.log("-------------======>", getfav)
  console.log("-------------======>", userData.favourite_bins)
  let havfav = getfav == 0 ? true : false;

 
 

  // --------------------------return  function ----------------------------------------------------------------
  
  return (
    <>
    {
      havfav ? 
      <div className="container m-5 align-items-center text-center" style={{height: "40vh"}}> 
      <h1 className="text-center">Welcome To our Website </h1>
            <h3 className="text-center">Select Your Interists First To start in</h3>

      <button className="btn btn-outline-success rounded-pill col-5 m-5 " type="button">
        <Link className="nav-link" to="/categories" >Select Your Interists First</Link>
      </button> </div>
      
      :
      <div className="background pb-4">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {/*side bar secssion */}
          <div className="col-lg-3">
            <Sidebar />
          </div>
          {/**main secssion */}
          <div className="col-lg-6 mt-3">
            <Search searchWord={searcWord} changeHandler={changeHandler} />
            {/** handel auth tags */}
            {
              ismentor && <div className="m-2">

                      <button className="btn btn-outline-success rounded-pill me-2 " type="button">
                        <Link className="nav-link" to="/CreateBLog" >Create Blog</Link>
                      </button>
                      <button className="btn btn-outline-success rounded-pill me-2 " type="button">
                        <Link className="nav-link" to="/launchSession" >Launch Session</Link>
                      </button>
                      <button className="btn btn-outline-success rounded-pill me-2 " type="button">
                        <Link className="nav-link" to="/mentorProfile" >View Profile</Link>
                      </button>
                    </div>
                  }
                  {/** dispaly sessions form apis */}
                  {/* get all card session */}
                  {console.log(cardSession, 'kemooo')}
                  {merged_data.map(data => (
                    data.available_dates ? <CardSession
                      title={data.title}
                      tags={data.tags}
                      description={data.description}
                      name={data.mentor.name}
                      bio={data.mentor.bio}
                      created_at={data.updated_at}
                      user_profile={data.mentor.user_profile}
                      sessionId={data.id}

                      time_since_created={data.time_since_created}
                      mentor_id={data.mentor.user_id}
                      followed_by_user={data.mentor.followed_by_user}
                    /> :
                      <Blog
                        id={data.id}
                        liked_by_user={data.liked_by_user}
                        key={data.id}
                        commitCount={data.number_of_comments}
                        reaction_title="Reaction"
                        title={data.title}
                        body={data.content}
                        tags={data.tags}
                        name={data.mentor.name}
                        bio={data.mentor.bio}
                        user_profile={data.mentor.user_profile}
                        blog_cover={data.cover_image}
                        time_since_created={data.time_since_created}
                        mentor_id={data.mentor.user_id}
                        created_at={data.updated_at}
                        number_of_likes={data.number_of_likes}
                        followed_by_user={data.mentor.followed_by_user}
                      />


                  ))}
                  {/* {otherSessions.map((data) => {
                    return (
                      <CardSession
                        title={data.title}
                        tags={data.tags}
                        description={data.description}
                        name={data.mentor.name}
                        bio={data.mentor.bio}
                        created_at={data.created_at}
                        user_profile={data.mentor.user_profile}
                        sessionId={data.id}

                        time_since_created={data.time_since_created}
                        mentor_id={data.mentor.user_id}
                        followed_by_user={data.mentor.followed_by_user}
                      />
                    )
                  })} */}
                  {/* {blogs && blogs.map((blog) => {
                    return (
                      <Blog
                        id={blog.id}
                        liked_by_user={blog.liked_by_user}
                        key={blog.id}
                        commitCount={blog.number_of_comments}
                        reaction_title="Reaction"
                        title={blog.title}
                        body={blog.content}
                        tags={blog.tags}
                        name={blog.mentor.name}
                        bio={blog.mentor.bio}
                        user_profile={blog.mentor.user_profile}
                        blog_cover={blog.cover_image}
                        time_since_created={blog.time_since_created}
                        mentor_id={blog.mentor.user_id}
                        created_at={blog.created_at}
                        number_of_likes={blog.number_of_likes}
                        followed_by_user={blog.mentor.followed_by_user}
                      />
                    );
                  })} */}
                </div>
                {/** side bar tags */}
                <div className="col-lg-3 ">
                  <Rightside
                    blogRate={[
                      "first rate blog",
                      "second rate blog",
                      "third rate blog",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}
