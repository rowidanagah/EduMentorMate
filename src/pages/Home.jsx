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
import { Link } from "react-router-dom";

export default function Home() {



  // Get data of sessioncard

  const [cardSession, setcardSession] = useState([])
  useEffect(() => {
  // const csrftoken = Cookies.get('csrftoken');
  // axios.get("http://127.0.0.1:8200/roomsession/")
  // .then((info) => setComponies(info.data))
  // .catch((err) => console.log(err))

  axios.get('http://127.0.0.1:9800/roomsession/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 0dba9d202f030608724613043df6dbb4bd0e4d86',
      },
    })
    .then((info) => setcardSession(info.data))
    .catch((err) => console.log(err))


},[])


  // ///////////////////////



  // auth stuff
  let getData = JSON.parse(localStorage.getItem("typeuser"));
  console.log("-------------", getData)
  let ismentor = getData == "mentor" ? true : false;
  let islogged = getData != "" ? true : false;

  // blogs api
  const apiKey = "9b743af1d4fde1d65af33c40dcccce87";
  const [searcWord, setSearchWord] = useState("ok");
  const URL = `https://dummyjson.com/posts/search?q=${searcWord}`;
  const [posts, setPosts] = useState([]);
  // fetch posts from api
  useEffect(() => {
    axios(`${URL}`)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((e) => {
        console.log("there is error", e);
      });
  }, [searcWord]);

  // ---------- sessionLocal Storage Stuff---------- //
  const getSessions = JSON.parse(localStorage.getItem("sessions") || "[]");


  // --------------------------return  function ----------------------------------------------------------------
  return (
    <div className="background pb-4">
      <div className="container">
        {/* {
          ismentor && <div>
            <button className="btn btn-outline-dark m-3">Create Blog</button>
            <button className="btn btn-outline-dark m-3">Add Session</button>

            <button className="btn btn-outline-dark m-3">Profile</button>

          </div>
        } */}
        <div className="row d-flex justify-content-center">
          {/*side bar secssion */}
          <div className="col-lg-3">
            <Sidebar />
          </div>
          {/**main secssion */}
          <div className="col-lg-6 mt-3">
            <Search searchWord={searcWord} searchWordHandler={setSearchWord} />

            <ul class="nav home-tags">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mentor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Vist
                </a>
              </li>
            </ul>
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
            {/** dispaly sessions */}
            {/* {
              getSessions && getSessions.map(session => {
                return (
                  <CardSession Title={session.sessionTitle} sessionId={session.sessionId} />
                )
              })
            } */}
            {/* 
            {posts.map((post) => {
              return (
                <Blog
                  id={post.id}
                  key={post.id}
                  commitCount={post.reactions}
                  reaction_title="Reaction"
                  title={post.title}
                  body={post.body}
                  tags={post.tags}
                />
              );
            })} */}


            {/* get all card session */}
            {console.log(cardSession,'kemooo')}
            {cardSession && cardSession.map((data) => {
              return (
                <CardSession
                
                Title={data.title}
                tags={data.tags}
                name={data.mentor.name}
                bio={data.mentor.bio}
                created_at={data.created_at}
                user_profile={data.mentor.user_profile}
                time_since_created={data.time_since_created}
                />
              )
            })}


            {/* {end of code} */}

            <CardSession Title="Django" />

            <Blog
              commitCount="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
              tags="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            <Blog
              commitCount="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            {/* <CardSession Title="Django" />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />

            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            /> */}
            {/*  <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            /> */}

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
  );
}
