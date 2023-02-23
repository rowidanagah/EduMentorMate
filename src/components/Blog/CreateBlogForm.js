import './css/blogs.css'

import { Remarkable } from "remarkable";
import '@github/markdown-toolbar-element'



const md = new Remarkable()

const CreateBlogForm = ({showMarkDowndesc, formblock, togglePreview, blogContent, showTitledesc, preview ,previewblock, setBlogContent }) => {

    return (
        <div className="col col-lg-9 CreateBlog">
            <div className="col-md-9 col-sm-12 ">
                <button className="btn btn-outline-info m-4 previewbtn" onClick={togglePreview}>{preview}</button>

                <form className={`d-${formblock}`} onSubmit={(e) => e.preventDefault()}>
                    <div className="col-12 m-3">
                        <input type="text" className="form-control"
                            placeholder='Enter you blog title'
                            onMouseDown={showTitledesc}
                            onMouseOut={showTitledesc} />
                    </div>
                    <div class="form-group m-2">
                        <div class="col-md-12">
                            <markdown-toolbar for="textarea_id">
                                <button className="btn btn-outline-info text-lg-center"><md-bold><i class="fa fa-bold"></i></md-bold> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-header><i class="fa fa-heading"></i></md-header> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-italic><i class="fa-solid fa-italic"></i></md-italic> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-quote><i class="fa fa-quotes"></i></md-quote> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-code><i class="fa-solid fa-code"></i></md-code> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-link><i class="fa-solid fa-link"></i></md-link> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-image><i class="fa-solid fa-image"></i></md-image> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-unordered-list><i class="fa-solid fa-list"></i></md-unordered-list> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-ordered-list><i class="fa-solid fa-list-ol"></i></md-ordered-list> </button>
                                <button className="btn btn-outline-info text-lg-center"><md-task-list><i class="fa-solid fa-list-check"></i></md-task-list></button>
                                <button className="btn btn-outline-info text-lg-center"><md-mention><i class="fa-solid fa-at"></i></md-mention> </button>
                                <button className="btn btn-outline-info text-lg-center"> <md-ref><i class="fa-solid fa-hashtag"></i></md-ref> </button>
                            </markdown-toolbar>

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
                    <input type="submit" className="btn btn-primary" value="puplish" />
                </form>
                <div
                    className={`d-${previewblock} m-4`}
                    dangerouslySetInnerHTML={{ __html: md.render(blogContent) }}
                ></div>

            </div>
        </div>

        
    );
}


export default CreateBlogForm;