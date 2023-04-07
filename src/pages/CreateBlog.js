import { useState } from "react";
import CreateBlogForm from "../components/Blog/CreateBlog/CreateBlogForm";
import ShowMarkDownDetails from "../components/Blog/ShowMarkDownDetails";

import '../components/Blog/css/blogs.css'

const CreateBLog = () => {
    //css for dropzone
    // blog conrtent
    const [blogContent, setBlogContent] = useState("*React-Markdown* is **Awesome**");
    const [blogTitle, setblogTitle] = useState("");
    const [tags, setTagsLst] = useState([]);
    const [imgFile, setimgFile] = useState('')
    const [sessionDate, setsessionDate] = useState(new Date());


    const [showPortal, setShowPortal] = useState(false);
    const handlePotalClose = () => {
        setShowPortal(false)
    };

    const changeData = (e) => {
        if (e.target.name == "title") {
            setblogTitle(e.target.value);
        }
        if (e.target.name == "blogcontent") {
            setBlogContent(e.target.value);
        }
        if (e.target.name == "tags") {
            setShowPortal(false)
            console.log('-----------Tags--------------' , tags)
            setBlogContent([...tags, e.target.value]);
        }
        if (e.target.name == "coverImg") {
            const imgUrl = e.target.files[0];
            //const imgUrl = e.target.files.name;
            console.log('----------------' , e.target)
            console.log('------------------------------img--------------------------',imgFile )//, e.target['name'])
            setimgFile(imgUrl)

        }
        if (e.target.name == "Secciondate") {
            console.log("hreeeeee")
            const date = new Date(e.target.value);
            console.log(date)
            setsessionDate(date)
        }
    }

    // preview block dispaly
    const [previewblock, setToggleProviewblock] = useState('none');
    const [formblock, setToggleFormblock] = useState('block');

    // preview , edit
    const [preview, setToggleProview] = useState('Preview');

    const [showTitlesec, setShowTitlesec] = useState('none');
    const [showMarkDownsec, setshowMarkDownsec] = useState('none');
    const [bold, setbold] = useState('none');
    const [heading, setheading] = useState('none');
    const [italic, setitalic] = useState('none');
    const [repcode, setrepcode] = useState('none');
    const [link, setlink] = useState('none');
    const [image, setimage] = useState('none');
    const [unorder, setunorder] = useState('none');
    const [order, setorder] = useState('none');
    const [task, settask] = useState('none');
    const [mention, setmention] = useState('none');
    const [ref, setref] = useState('none');
    const [quote, setqoute] = useState('none');


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

    const ShowBlogDetails = () => {
        setbold(bold == 'none' ? 'block' : 'none');

    }
    const ShowHeadingDetails = () => {
        setheading(heading == 'none' ? 'block' : 'none');

    }
    const ShowItalicDetails = () => {
        setitalic(italic == 'none' ? 'block' : 'none');

    }
    const ShowRepcodeDetails = () => {
        setrepcode(repcode == 'none' ? 'block' : 'none');

    }
    const ShowLinkDetails = () => {
        setlink(link == 'none' ? 'block' : 'none');

    }
    const ShowImageDetails = () => {
        setimage(image == 'none' ? 'block' : 'none');

    }
    const ShowUnorderDetails = () => {
        setunorder(unorder == 'none' ? 'block' : 'none');

    }
    const ShowOrderDetails = () => {
        setorder(order == 'none' ? 'block' : 'none');

    }
    const ShowTaskDetails = () => {
        settask(task == 'none' ? 'block' : 'none');

    }
    const ShowMentionDetails = () => {
        setmention(mention == 'none' ? 'block' : 'none');

    }
    const ShowRefDetails = () => {
        setref(ref == 'none' ? 'block' : 'none');

    }
    const ShowQouteDetails = () => {
        setqoute(quote == 'none' ? 'block' : 'none');

    }



    return (
        <div class="container  CreateBlog_page" id="">
            <div className="row align-items-center gx-5">
                <CreateBlogForm formblock={formblock} togglePreview={togglePreview}
                    showTitledesc={showTitledesc} preview={preview} blogContent={blogContent}
                    ShowBlogDetails={ShowBlogDetails}
                    ShowHeadingDetails={ShowHeadingDetails}
                    ShowItalicDetails={ShowItalicDetails}
                    ShowRepcodeDetails={ShowRepcodeDetails}
                    ShowLinkDetails={ShowLinkDetails}
                    ShowImageDetails={ShowImageDetails}
                    ShowUnorderDetails={ShowUnorderDetails}
                    ShowOrderDetails={ShowOrderDetails}
                    ShowTaskDetails={ShowTaskDetails}
                    ShowMentionDetails={ShowMentionDetails}
                    ShowRefDetails={ShowRefDetails}
                    ShowQouteDetails={ShowQouteDetails}
                    previewblock={previewblock}
                    showMarkDowndesc={showMarkDowndesc}
                    changeData={changeData}
                    blogTitle={blogTitle}
                    tags={tags}
                    setTagsLst={setTagsLst}
                    showPortal={showPortal}
                    handlePotalClose={handlePotalClose}
                    setShowPortal={setShowPortal}
                    imgUrl={imgFile}
                    sessionDate={sessionDate}
                />

                <ShowMarkDownDetails ShowQouteDetails={quote} ShowRefDetails={ref} ShowMentionDetails={mention} ShowTaskDetails={task} ShowOrderDetails={order} ShowUnorderDetails={unorder} ShowImageDetails={image} ShowLinkDetails={link} ShowRepcodeDetails={repcode} ShowItalicDetails={italic} ShowHeadingDetails={heading} ShowBlogDetails={bold} showTitlesec={showTitlesec} showMarkDownsec={showMarkDownsec} />
            </div>
        </div>
    );




}


export default CreateBLog;