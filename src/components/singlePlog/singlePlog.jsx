import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./singleplog.css";
import axios from "axios";

export default function SinglePost({ id, title, body, tags, reaction_title, commitCount, number_of_likes,
   time_since_created, created_at, blogDetails_cover, liked_by_user,mentor,comments_details}) {
    // console.log(comments_details,'comment')

    // const [comments, setComments] = useState(comments_details)
    // setComments([...comments,comments_details && comments_details]);
    // #######################################################fetch user
    const [getuser, setuser] = useState("")
    let getToken = localStorage.getItem("token");
    const headers = {
      'Authorization': `Token ${getToken}`,
      'Content-Type': 'application/json',
    };
    useEffect(() => {
      axios.get(`http://localhost:8000/api/user`, {
        headers
      })
        .then((info) => setuser(info.data))
        .catch((err) => console.log(err))
  },[])    

  // ################################################################end fetch user
    // ######################################################### post comment
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post(`http://localhost:8000/comments/`, {
        student: getuser.user.user_id,
        blog: id,
        content: content,
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

  // #########################################################end post comment
  // const { id } = useParams();
  // const [post, setpost] = useState("");
  // const URLS = `https://dummyjson.com/posts/${id}`;

  // // get post by id

  // useEffect(() => {
  //   axios(URLS)
  //     .then((res) => {
  //       console.log(res.data);
  //       setpost(res.data);
  //     })
  //     .catch((eror) => {
  //       console.log(eror);
  //     });
  // }, []);

  return (
    <div className="singlePost ">
      <div className="singlePostWrappe mt-4 ">
        <div className="text-center">
        <img
          className="text-center"
          style={{maxWidth:"100%",maxHeight:'420px'}}
          // width={'100%'}
          // height={'420px'}
          src={blogDetails_cover && blogDetails_cover}
          alt=""
        />
        </div>
        <h1 className="singlePostTitle">
          {/* {console.log(title)} */}
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
        <div className="singlePostInfo">
          <span>
           <strong style={{color:'#5899c9'}} className="fs-4"> Author:</strong>
            <b className="singlePostAuthor">
            <Link to={`/mentorProfile/${mentor && mentor.user_id}`} style={{textDecoration:'none'}} className="link text-dark HoverForLink"><strong>{mentor && mentor.name}</strong></Link>

            </b>
          </span>
          <strong style={{color:'#5899c9'}}>{created_at && created_at} . {time_since_created && time_since_created}</strong>
        </div>
        <div className="m-2" style={{borderBottom:'dashed 3px #b9e5eb'}}></div>
        <p
          className="singlePostDesc"
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            lineHeight: "51px",
          }}
        >
          <stong className='fs-2' >{title && title}</stong> <br />
          {body && body} <br />
       
         {tags && tags.map((tag) => (
              <Link
                className="HoverForLink"
                style={{ textDecoration: "none" ,color:"#666"}}
                key={tag}
              >
                #{tag}
              </Link>
            ))}
         </p>
      
      </div>

      <div className="m-2" style={{borderBottom:'dashed 3px #b9e5eb'}}></div>
{/* ##########################################################comments */}
      <div class=" mt-5 ">
    <div class="d-flex justify-content-center row">
        <div class="col-md-12">
            <div class="d-flex flex-column comment-section">
              {/* ############################################Post form */}
            <div class="mt-3 mb-3">
                  <form onSubmit={handleSubmit}>
                    <p className="display-6 fw-bold">Top comments ({commitCount})</p>
                    <div class="d-flex flex-row align-items-start">
                    <img class="rounded-circle" src={getuser && getuser.user.user_profile} width="40"/>
                    <textarea value={content} onChange={(event) => setContent(event.target.value)} class="form-control ml-1 shadow-none textarea"></textarea>
                    </div>
                    <div class="mt-2 text-right ms-4">
                    <button style={{backgroundColor:"#074f57"}} class="btn btn-outline-light  btn-sm ml-1 shadow-none" type="submit">Post comment</button>
                    {/* <button style={{backgroundColor:"#074f57"}} class="btn btn-outline-light  btn-sm ml-1 shadow-none ms-3" type="submit">Cancel</button> */}
                     </div>
                     </form>
            </div>
              {/* ############################################Post form end*/}

              {/* ############################################get all comments*/}
            {comments_details && comments_details.map((data) => {
              return (
                <>
                <div class=" p-2 bg-body rounded-top ">
                <div class="d-flex flex-row user-info ">
                  <img class="rounded-circle" src={data && data.student.user_profile} width="40"/>
                    <div class="d-flex flex-column justify-content-start ml-2 ms-2">
                    <strong class="d-block font-weight-bold name">{data && data.student.name}</strong>
                    <span class="date text-black-50">{data.created_at} - {data.time_since_created}</span></div>
                </div>
                <div class="mt-2">
                    <p class="comment-text">{data.content}</p>
                </div>
            </div>
            <div class="">
                <div class="d-flex flex-row fs-12 bg-body rounded-bottom  mb-4">
                     <i class="like p-2 cursor btn btn-light fa-regular fa-heart m-2"></i><span class="ml-1"></span>
                     <i class="like p-2 cursor btn btn-light fa-regular fa-comment m-2"></i><span class="ml-1"></span> 
                </div>
            </div>
            </>
              )
              
            })}


                
            </div>
        </div>
    </div>
</div>
    </div>
  );
}
