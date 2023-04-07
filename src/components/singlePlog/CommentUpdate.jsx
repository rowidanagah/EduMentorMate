import axios from 'axios';
import React, { useState } from 'react'
export default function CommentUpdate({content,comment_id,edit,blog_id,student_id}) {
    const [updatedContent, setUpdatedContent] = useState(content);
    let getToken = localStorage.getItem("token");
    const headers = {
      'Authorization': `Token ${getToken}`,
      'Content-Type': 'application/json',
    };
    // const [isEditing, setIsEditing] = useState(null);
    console.log(comment_id,updatedContent,student_id,blog_id,"all updated data that i want")

    const handleUpdate = (event) => {
        axios
          .put(`http://localhost:8000/comments/${comment_id}`, {
            content: updatedContent,
            student: student_id,
            blog: blog_id,
          },
          {
            headers
          }
          )
          .then((response) => {
            console.log(response.data);
            // TODO: Handle success
            edit(false)
          })
          .catch((error) => {
            console.error("Error:", error);
            // TODO: Handle error
          });
      };
    
  return (
    <div className="">
    <div class="form-floating">
    <textarea style={{height:"100px"}} cols="40" className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={updatedContent} onChange={(event) => setUpdatedContent(event.target.value)}/>
     <label for="floatingTextarea">Edit</label>
    </div>
 <div className='mt-2'>
 <button  style={{backgroundColor:"#074f57"}} class="btn btn-outline-light  btn-sm ml-1 shadow-none" onClick={handleUpdate} >Save</button>
 <button  style={{backgroundColor:"#074f57"}} class="btn btn-outline-light ms-2  btn-sm ml-1 shadow-none" onClick={() => edit(false)}>Cancel</button>
 </div>

    </div>
  )
}
