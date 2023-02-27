import { useState } from "react";
import CreateBlogForm from "../components/Blog/CreateBlogForm";
import ShowMarkDownDetails from "../components/Blog/ShowMarkDownDetails";

import '../components/Blog/css/blogs.css'

const CreateBLog = () => {
    //css for dropzone

    // blog conrtent
    const [blogContent, setBlogContent] = useState("*React-Markdown* is **Awesome**");
    console.log(blogContent);

    // preview block dispaly
    const [previewblock, setToggleProviewblock] = useState('none');
    const [formblock, setToggleFormblock] = useState('block');

    // preview , edit
    const [preview, setToggleProview] = useState('Preview');

    const [showTitlesec, setShowTitlesec] = useState('none');
    const [showMarkDownsec, setshowMarkDownsec] = useState('none');

    const togglePreview = () => {
        setToggleProviewblock(previewblock == 'none' ? 'block' : 'none');
        setToggleFormblock(formblock == 'none' ? 'block' : 'none');

        setToggleProview(preview == 'Preview' ? 'Edit' : 'Preview');
        setshowMarkDownsec('none');
        setShowTitlesec('none')
    }

    const showTitledesc = () => {
        setShowTitlesec(showTitlesec == 'none' ? 'block' : 'none');
    }

    const showMarkDowndesc = () => {
        setshowMarkDownsec(showMarkDownsec == 'none' ? 'block' : 'none');

    }

    return (
        <div class="container  CreateBlog_page" id="">
            <div className="row align-items-center gx-5">
                <CreateBlogForm formblock={formblock} togglePreview={togglePreview}
                    showTitledesc={showTitledesc} preview={preview} blogContent={blogContent}
                    previewblock={previewblock}
                    showMarkDowndesc={showMarkDowndesc}
                    setBlogContent={setBlogContent}
                />

                <ShowMarkDownDetails showTitlesec={showTitlesec} showMarkDownsec={showMarkDownsec} />
            </div>
        </div>
    );




}


export default CreateBLog;