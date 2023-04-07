import BlogHeader from "../Blog/BlogHeader";
import Blog from "../Blog/Blog";
import { Link } from "react-router-dom";

const UserBlogs = ({title,body,time_since_created,created_at,number_of_likes,commitCount,id}) => {

    return (
        <div className="mt-3">
            {/*<img class="card-img-top blog_img" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nZI14gr9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/786tq34bio3szgfhbbyp.png" alt="Card image cap"></img>
 */}
            <figure className="bg-white p-4 rounded blogCaption "style={{width:"105%"}} >
                <div className="">
                <blockquote className="blockquote pb-2">
                   
                   <p className="p-2">
                        {/* {body} */}
                    <Link className="HoverForLink text-dark"style={{ textDecoration: "none" }} to={`/blog/${id}`} >
                       {body}
                    </Link>
                    </p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0 font-italic">
                {created_at}
                <small class="text-muted pe-3 d-flex justify-content-end">Last updated {time_since_created && time_since_created}</small>
                </figcaption>

        {/* <div class=" mb-3 d-flex justify-content-between ps-4"> */}
        {/* <div className="reaction-comment">
          <button type="button" class="btn btn-light me-1 ">
            <i class={`fa-regular fa-heart me-2`}> </i>
            <small> {number_of_likes}</small>
          </button>
          
   
          <button type="button" class="btn btn-light ">
            <i class="fa-regular fa-comment me-2"></i>
            <small> {commitCount}</small>
          </button>
      
        </div> */}
        {/* <div className="post-time mt-1 "> */}

          
        {/* </div> */}
      {/* </div> */}

            
                   </div>
            </figure>
        </div>

    )
}


export default UserBlogs;