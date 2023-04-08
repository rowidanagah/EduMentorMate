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
import { Link, Redirect, useHistory } from "react-router-dom";

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

  // get blog & sessions fetch
  useEffect(() => {
    get_blog_data();
    // get_blog_data();
    // get_session_data();

  }, [cardSession, blogs,searcWord]) //cardSession, blogs, searcWord

  const merged_data = [...blogs, ...cardSession].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const history = useHistory();

  let userData= JSON.parse(localStorage.getItem('user'))// {}
  // auth stuff
  let getData = userData.usertype
  let ismentor = getData == "mentor" ? true : false;
  let getfavourite_bins = JSON.parse(localStorage.getItem('favourite_bins')) || 0// {}

  // let getfav = userData?.favourite_bins?.length || 0;
  // let havfav = getfav == 0 ? true : false;
  //let getfav = userData.favourite_bins.length || 0;
  let getfav = getfavourite_bins.length || 0;
  console.log("-------------====getfav==>", getfav)
  console.log("-------------======>", userData.favourite_bins)
  let havfav = getfav == 0 ? true : false;
  console.log('---------getfav--------------' , getfav)
  // if(! getfav){
  //   history.push('/categories')
  // }
  // --------------------------return  function ----------------------------------------------------------------
  // ###############################################################################################Fetch right side
  const [blog, setBlog] = useState([]);
  const get_trend_blogs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blogsapi/?trends=true', { headers });
        setBlog(response.data)
  
      } catch (error) {
        console.error('-------------------------------rowida error', error);
      }
    }
  
    useEffect(() => {
      get_trend_blogs();
    }, [get_trend_blogs])
    
  return (
    <>
    {
        havfav ? <Redirect to="/categories" /> :   <div className="background pb-4">
      <div className="container ">
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
              ismentor && <div className="m-2 mt-3 mb-3">

                      <button className="btn btn-outline-success rounded-pill me-2 " type="button">
                        <Link className="nav-link" to="/CreateBLog" >Create Blog</Link>
                      </button>
                      <button className="btn btn-outline-success rounded-pill me-2 " type="button">
                        <Link className="nav-link" to="/launchSession" >Launch Session</Link>
                      </button>
                      <button className="btn btn-outline-success rounded-pill me-2 " type="button">
                        <Link className="nav-link" to={`/mentorProfile/${userData.user_id}`} >View Profile</Link>
                      </button>
                    </div>
                  }
                  {/** dispaly sessions form apis */}
                  {/* get all card session */}
                  {merged_data.map(data => (
                    data.available_dates ? <CardSession
                      title={data.title}
                      tags={data.tags}
                      description={data.description}
                      name={data.mentor.name}
                      username={data.mentor.username}
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
                        username={data.mentor.username}
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
                {/* <div className="col-lg-3 ">
                  <Rightside
                    blogRate={[
                      "first rate blog",
                      "second rate blog",
                      "third rate blog",
                    ]}
                  />
                </div> */}
            
          {/** side bar tags */}
          <div className="col-lg-3 mt-3 ">
          <div className="ourteam-title d-sm-none  d-lg-block">
          <h3 className=" text-dark text-center">Most Trending Blogs</h3>
            <div className="line"></div>
              <div className="our-layer">
                  <h4>Most Trending Blogs</h4>
              </div>
          </div>
          {blog && blog.map((blog, index) => {
                       
                  return (
                    // <Trend id={index+1} image={blog.mentor.user_profile} creator={blog.mentor.username} 
                    // title={blog.title} date={blog.created_at}/>
                    
                    <div className="w-100 row mt-3 d-sm-none ms-2  d-lg-flex"  style={{border: "1px solid #5899c9"}}>
                      
                    <p className="col-1 fw-lighter fs-3">{index+1}</p>
                    <div className="row col-11 mt-2 ">
                   
                  <img className="rounded-circle col-2 " style={{width: "60px", height: "35px"}} src={blog.mentor.user_profile} alt=""/>
                    <h6 className="col-7 ps-0 mt-2 fw-bold">{blog.mentor.username}</h6>
                    <small className="mt-2 ">
                    <Link className="HoverForLink text-dark"style={{ textDecoration: "none" }} to={`/blog/${blog.id}`} >
                    {blog.title}
                    </Link>
                    </small>
                    <div className="d-flex justify-content-between pt-3 mb-2">
                    <small className="fw-lighter mb-0 ">{blog.updated_at}</small>
                    <small className="fw-lighter mb-0 ">{blog.time_since_created}</small>
                    </div>
                </div>
                    </div>

                    
                  );
                })}
            {/* <Rightside
              blogRate={[
                "first rate blog",
                "second rate blog",
                "third rate blog",
              ]}
            /> */}
          </div>
        </div>
      </div>
    </div>
    }
  
    </>
    
  );
}
