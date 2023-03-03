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

export default function Home() {
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

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" mt-2 background">
      <div className="container">
        <div className=" row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-6">
            {/* <EditProfile/> */}
            <div>
           {/*    
            <button className='btn btn-danger modalBtn' onClick={()=>setOpenModal(true)}> open</button>
            <Success message="not working!"/>
            <Error message="notWorking"/>
            */}
            </div>
 
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
            <CardSession Title="Django" />

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
            })}
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
            <CardSession Title="Django" />
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
            <CardSession Title="Python" />
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
            />
            <Blog
              comment_title="Comment"
              reaction_title="Reaction"
              title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"
            />
          </div>

          <div className="col-lg-3">
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
