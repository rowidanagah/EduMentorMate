import "../css/blogs.css";
import { Remarkable } from "remarkable";
import "@github/markdown-toolbar-element";
import { useState } from "react";
import ErrorModel from "../../ErrorAndSuccess/ErrorModel";
import TagsInput from "./TagsInput";
import UploadImg from "./UploadImg";
import LaunchSession from "./LaunchSession";
import axios from "axios";

const md = new Remarkable();

const CreateBlogForm = ({
  sessionDate,
  imgUrl,
  showPortal,
  setShowPortal,
  handlePotalClose,
  blogTitle,
  changeData,
  showMarkDowndesc,
  formblock,
  togglePreview,
  blogContent,
  showTitledesc,
  preview,
  previewblock,
  setTagsLst,
  tags,
}) => {
  const [error, setError] = useState("");
  let getToken = localStorage.getItem("token");
  console.log('-----------------token' , getToken)
  const headers = {
    Authorization: `Token ${getToken}`,
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",

  };
  const create_new_blog = async () => {
    let form_data = new FormData();
    form_data.append('title' ,"test seperate serializers" )
    form_data.append('content' ,"test seperate serializers" )
    //form_data.append('cover_image' , imgUrl,imgUrl.name )
    form_data.append('mentor' ,1 )
    const data = {
        "title": blogTitle,
        "content": blogContent,
       // "cover_image": imgUrl,
        "mentor": 1,
        "session": null,
        "tags": tags
    }
   
    try {
        console.log('------------data' , data)
        const response = await axios.post(`http://127.0.0.1:8000/api/create_blog_api/`, data, { headers });
  
        console.log('rowida ----------------------------', response.data);
  
      } catch (error) {
        console.error('-------------------------------rowida error', error);
      }


  }
 
  
  const SubmitBlog = (e) => {
    console.log("----------tags", tags);
    e.preventDefault();
    create_new_blog();

    console.log(blogTitle, blogContent);
    if (!blogContent && !blogTitle) {
      setShowPortal(true);
      setError("Not a valid  BLog");
    } else if (!blogTitle) {
      console.log("title");
      setShowPortal(true);

      setError(...error, "Title Is Required ");
    } else if (!blogContent) {
      console.log("blog");
      setShowPortal(true);

      setError("BLog Content Is Required ! ");
    } else {
      setError("");
    }
    console.log(error);
  };


  return (
    <div className=" col-9 CreateBlog ">
      <div className=" ">
        {showPortal && (
          <ErrorModel msg={error} handlePotalClose={handlePotalClose} />
        )}

        {/*  toggle preview & edit */}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-info m-4 previewbtn"
            onClick={togglePreview}
          >
            {preview}
          </button>
        </div>

        <form className={`d-${formblock}`} m-2 onSubmit={(e) => SubmitBlog(e)}>
          {/* cover img section */}
          <div className="col-12 m-1 ">
            <div className="">
              <UploadImg imgUrl={imgUrl} changeData={changeData} />
              {/* <button className="btn btn-outline-secondary m-4 previewbtn" >upload image</button> */}
            </div>
          </div>

          {/*  title section */}
          <div className="col-12 mt-3 ">
            <input
              type="text"
              className="mt-5 title_input form-control"
              placeholder="Enter you blog title"
              onMouseDown={showTitledesc}
              name="title"
              value={blogTitle}
              onChange={(e) => changeData(e)}
              onMouseOut={showTitledesc}
            />
          </div>

          {/*  text area section */}
          <div class="form-group m-2">
            <div class="col-md-12">
              <div className="mt-1 mb-2">
                <markdown-toolbar for="textarea_id">
                  <md-bold>
                    <i class="fa fa-bold toolBar_btn "></i>
                  </md-bold>
                  <md-header>
                    <i class="fa fa-heading toolBar_btn"></i>
                  </md-header>
                  <md-italic>
                    <i class="fa-solid fa-italic toolBar_btn"></i>
                  </md-italic>
                  <md-quote>
                    <i class="fa-solid fa-quote-left toolBar_btn"></i>
                  </md-quote>
                  <md-code>
                    {" "}
                    <i class="fa-solid fa-code toolBar_btn"></i>
                  </md-code>
                  <md-link>
                    <i class="fa-solid fa-link toolBar_btn"></i>
                  </md-link>
                  <md-image>
                    <i class="fa-solid fa-image toolBar_btn"></i>
                  </md-image>
                  <md-unordered-list>
                    <i class="fa-solid fa-list toolBar_btn"></i>
                  </md-unordered-list>
                  <md-ordered-list>
                    <i class="fa-solid fa-list-ol toolBar_btn"></i>
                  </md-ordered-list>
                  <md-task-list>
                    <i class="fa-solid fa-list-check toolBar_btn"></i>
                  </md-task-list>
                  <md-mention>
                    <i class="fa-solid fa-at toolBar_btn"></i>
                  </md-mention>
                  <md-ref>
                    <i class="fa-solid fa-hashtag toolBar_btn"></i>
                  </md-ref>
                </markdown-toolbar>
              </div>
              <textarea
                name="blogcontent"
                class="form-control"
                cols="30"
                rows="11"
                id="textarea_id"
                onMouseEnter={showMarkDowndesc}
                value={blogContent}
                onChange={(e) => changeData(e)}
                placeholder="Type in something"
              ></textarea>
            </div>
          </div>

          {/* session section */}
          <div className="col-12 m-1 ">
            <LaunchSession changeData={changeData} sessionDate={sessionDate} />
          </div>
          <TagsInput
            key="Tags"
            label={"blog tags"}
            tags={tags}
            setTagsLst={setTagsLst}
            onChange={(e) => changeData(e)}
          />
          <input
            type="submit"
            className="follow_btn rounded-5  m-5"
            value="Publish"
          />
        </form>

        {/* preview section -> following markdown */}
        <div className={`d-${previewblock} m-4 wrapper`}>
          <div
            dangerouslySetInnerHTML={{ __html: md.render(blogContent) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
