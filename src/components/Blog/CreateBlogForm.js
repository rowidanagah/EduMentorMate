import './css/blogs.css'

import { Remarkable } from "remarkable";
import '@github/markdown-toolbar-element'



const md = new Remarkable()

const CreateBlogForm = ({ showMarkDowndesc, formblock, togglePreview, blogContent, showTitledesc, preview, previewblock, setBlogContent }) => {

    return (
        <div className=" col-lg-9 CreateBlog ">
            <div className=" ">
                
                <div className='d-flex justify-content-end' >
                    <button className="btn btn-outline-info m-4 previewbtn" onClick={togglePreview}>{preview}</button>

                </div>
                <div className='' >
                    <button className="btn btn-outline-secondary m-4 previewbtn" >upload image</button>

                </div>

                <form className={`d-${formblock}`} m-2 onSubmit={(e) => e.preventDefault()}>
                    <div className="col-12 m-1">
                        <input type="text" className="form-control"
                            placeholder='Enter you blog title'
                            onMouseDown={showTitledesc}
                            onMouseOut={showTitledesc} />
                    </div>
                    <div class="form-group m-2">
                        <div class="col-md-12">
                            <div className="mt-1 mb-2">
                                <markdown-toolbar for="textarea_id" >
                                    <md-bold><i class="fa fa-bold toolBar_btn "></i></md-bold>
                                    <md-header><i class="fa fa-heading toolBar_btn"></i></md-header>
                                    <md-italic><i class="fa-solid fa-italic toolBar_btn"></i></md-italic>
                                    <md-quote><i class="fa-solid fa-quote-left toolBar_btn"></i></md-quote>
                                    <md-code> <i class="fa-solid fa-code toolBar_btn"></i></md-code>
                                    <md-link><i class="fa-solid fa-link toolBar_btn"></i></md-link>
                                    <md-image><i class="fa-solid fa-image toolBar_btn"></i></md-image>
                                    <md-unordered-list><i class="fa-solid fa-list toolBar_btn"></i></md-unordered-list>
                                    <md-ordered-list><i class="fa-solid fa-list-ol toolBar_btn"></i></md-ordered-list>
                                    <md-task-list><i class="fa-solid fa-list-check toolBar_btn"></i></md-task-list>
                                    <md-mention><i class="fa-solid fa-at toolBar_btn"></i></md-mention>
                                    <md-ref><i class="fa-solid fa-hashtag toolBar_btn"></i></md-ref>
                                </markdown-toolbar>
                            </div>



                            <textarea
                                name="content"
                                class="form-control"
                                cols="30" rows="11"
                                id="textarea_id"
                                onMouseEnter={showMarkDowndesc}
                                value={blogContent}
                                onChange={(e) => setBlogContent(e.target.value)}
                                placeholder="Type in something"

                            ></textarea>
                        </div>
                    </div>
                    <input type="submit" className="follow_btn rounded-5  m-5" value="puplish" />
                </form>
                <div
                    className={`d-${previewblock} m-4`}
                    dangerouslySetInnerHTML={{ __html: md.render(blogContent) }}
                ></div>

            </div >
        </div >


    );
}


export default CreateBlogForm;