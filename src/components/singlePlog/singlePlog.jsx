import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./singleplog.css";
import axios from "axios";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setpost] = useState("");
  const URLS = `https://dummyjson.com/posts/${id}`;

  // get post by id

  useEffect(() => {
    axios(URLS)
      .then((res) => {
        console.log(res.data);
        setpost(res.data);
      })
      .catch((eror) => {
        console.log(eror);
      });
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
           <strong className="fs-3"> Author:</strong>
            <b className="singlePostAuthor">
              <Link style={{textDecoration:'none'}} className="link text-dark HoverForLink" to="/posts?username=abdallah">
                Abdallah Abdelsabour
              </Link>
            </b>
          </span>
          <strong>1 day ago</strong>
        </div>
        <p
          className="singlePostDesc"
          style={{
            color: "#666",
            fontFamily: "sans-serif",
            fontSize: "18px",
            lineHeight: "51px",
          }}
        >
          {post.body}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit!

        </p>
      </div>
    </div>
  );
}
