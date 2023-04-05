import React from "react";
import Trend from "./Trends";
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
function Trending() {
    let getToken = localStorage.getItem("token");
    const [blogs, setBlogs] = useState([]);

    const headers = {
      'Authorization': `Token ${getToken}`,
      'Content-Type': 'application/json',
    };

    const get_trend_blogs = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/blogsapi/?trends=true', { headers });
    
          console.log('rowida ----------------------------', response.data);
          setBlogs(response.data)
    
        } catch (error) {
          console.error('-------------------------------rowida error', error);
        }
      }
    
      useEffect(() => {
        get_trend_blogs();
      }, [])
    
    return (
        <div style={{marginTop:"7%"}} className="container">
            <div className="row m-4 justify-content-evenly ">
                {/* <h4 className="col-12 mb-4 text-center display-6">Trending on Medium</h4> */}

                <div class="about-title text-center mb-4">
                <h4 className="text-center display-6 ">Trending on Medium</h4>
                <div class="line "></div>
                <div class="about-layer">
                    <h4 >Trending</h4>
                </div>
                </div>
                {blogs && blogs.map((blog, index) => {
                    console.log(index)
              return (
                <Trend id={index+1} image={blog.mentor.user_profile} creator={blog.mentor.username} 
                title={blog.title} date={blog.created_at}/>

                
              );
            })}
               
            
            </div>
        </div>
    );
}
export default Trending;