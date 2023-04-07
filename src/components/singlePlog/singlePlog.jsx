import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./singleplog.css";
import axios from "axios";
import CommentUpdate from "./CommentUpdate";

export default function SinglePost({ id, title, body, tags, reaction_title, commitCount, number_of_likes,
   time_since_created, created_at, blogDetails_cover, liked_by_user,mentor,comments_details}) {
    const [isEditing, setIsEditing] = useState(null);
    // scroll up
    // function ScrollToTop() {
    //   const { pathname } = useLocation();
    
    //   useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [pathname]);
    
    //   return null;
    // }
    // console.log(mentor && mentor.user_id,'comment')
    // console.log(comments_details,'aaa')
    // const reversedComments = comments.slice().reverse();
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
//  ####################################################################delete comment

  
// const [commentId, setCommentId] = useState([])

const handleDeleteComment = async (commentid) => {
  try {
    await axios.delete(`http://localhost:8000/comments/delete/${commentid}`,{headers});
    // window.location.reload();
    // comment_state(comments_details.filter(comment => comment.id !== commentid));
  } catch (error) {
    console.error(error);
  }
};

  // #####################################################################delete comment
  // #######################################################################update comment
  const [updatedContent, setUpdatedContent] = useState("");
  console.log(updatedContent,'neww comment')
  // ####################################################################### end update comment
  // const [commentId, setCommentId] = useState('');
  // async function handleDeleteComment (){
  //   await axios
  //     .delete(`http://localhost:8000/comments/delete/`, {
  //       user_id: getuser.user.user_id,
  //       comment_id: commentId,
  //     },
  //     {
  //       headers
  //     }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       // TODO: Handle success
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.response);
  //       // TODO: Handle error
  //     });
  // };

    // ##################################################################### end delete comment

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
      {/* this method let me go up at the top of page */}
         {/* <ScrollToTop /> */}
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
  
       
      {/* Rest of your app */}
    
        <div className="singlePostInfo">
          <div className="row justify-content-center align-items-center ">
           <strong style={{color:'#5899c9'}} className="fs-4  "> Author:</strong>
            <b className="singlePostAuthor ">
            <Link to={`/mentorProfile/${mentor && mentor.user_id}`} style={{textDecoration:'none'}} className="link text-dark HoverForLink"><strong>{mentor && mentor.name}</strong></Link>

            </b>
          </div>
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
                    <img class="rounded-circle me-2 " src={ getuser && "http://127.0.0.1:8000" +  getuser.user.user_profile} width="50"/>
                    <textarea value={content} onChange={(event) => setContent(event.target.value)} class="form-control ml-1 shadow-none textarea"></textarea>
                    </div>
                    <div class="mt-2 text-right ms-4">
                    <button  class="btn btn-outline-success  btn-sm ml-1 shadow-none" type="submit">Post comment</button>
                    {/* <button style={{backgroundColor:"#074f57"}} class="btn btn-outline-light  btn-sm ml-1 shadow-none ms-3" type="submit">Cancel</button> */}
                     </div>
                     </form>
            </div>
              {/* ############################################Post form end*/}

              {/* ############################################get all comments*/}
            {comments_details && comments_details.slice().reverse().map((data) => {
              return (
                <>
                <div style={{position:"relative"}} class=" p-2 bg-body rounded-top ">
                {isEditing ===data.id && (
                     <div style={{position:"absolute" ,width:'98.5%',zIndex:'2',height:'120%',backgroundColor:"#b9e5eb"}} className=" d-flex justify-content-center align-items-center  ">
                     {/* <div className="">
                     <textarea
                      value={data.content}
                      onChange={(event) => setUpdatedContent(event.target.value)}
                  />
                  <div>
                  <button className=" ms-5" >Save</button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>

                     </div> */}
                     <CommentUpdate student_id={getuser.user.user_id} blog_id={id} content={data.content} comment_id={isEditing} edit={setIsEditing}/>
                   </div>
                )}
                  
                <div class="d-flex flex-row user-info ">
                  <img class="rounded-circle" src={data && data.student.user_profile} height="50" width="50"/>
                    <div class="d-flex flex-column justify-content-start ml-2 ms-2">
                    <strong class="d-block font-weight-bold name">{data && data.student.name}</strong>
                    <span class="date text-black-50">{data.created_at} - {data.time_since_created}</span>
                   
                    </div>
                                 
                </div>
                <div class="mt-2">
                    <p class="comment-text">{data.content}</p>
                </div>
              </div>
              <div>
                <div style={{position:'relative'}} class="d-flex flex-row fs-12 bg-body rounded-bottom  mb-4">
                     <i class="like p-2 cursor btn btn-light fa-regular fa-heart m-2"></i><span class="ml-1"></span>

                     <div style={{position:'absolute',bottom:'280%',left:'91%'}} className="d-flex justify-content-end ms-md-0">                    
                        {data && data.student && getuser && getuser.user && data.student.user_id === getuser.user.user_id && (
                          <>
                          <i onClick={() => setIsEditing(data.id)} class="fa-regular fa-pen-to-square text-primary"></i>
                          <i onClick={() =>handleDeleteComment(data.id)} className="fa-solid fa-trash text-danger ms-2" ></i>
                        {/* <button onClick={() =>handleDeleteComment(data.id)} style={{height:'40px'}} className="btn btn-danger mt-4  ">Delete</button> 
                        <button  onClick={() => setIsEditing(data.id)} style={{height:'40px'}} className="btn btn-warning mt-4 ms-2">Update</button> */}

                        </>
                        )}
                    </div>
                     {/* <i class="like p-2 cursor btn btn-light fa-regular fa-comment m-2"></i><span class="ml-1"></span>  */}
                     
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









// <div style={{position:'absolute',bottom:'200%',left:'90%'}} className="d-flex justify-content-end ">                    
// {data && data.student && getuser && getuser.user && data.student.user_id === getuser.user.user_id && (<button onClick={() => handleDeleteComment(setCommentId(data.id))} className="btn btn-danger">Delete</button>)}


// </div>