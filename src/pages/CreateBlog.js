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
   // const [sessionDate, setsessionDate] = useState(new Date());
    const [session_availble_date, setsession_availble_date] = useState();


    const [showPortal, setShowPortal] = useState(false);
    const handlePotalClose = () => {
        setShowPortal(false)
    };

    const isDateInFuture = (dateString) => {
        const currentDate = new Date();
        const selectedDate = new Date(dateString);
        console.log("is vali", selectedDate.getTime() > currentDate.getTime());
        return selectedDate.getTime() > currentDate.getTime();
    }
    // session stuff
    const [sessionDataError, setsessionDataError] = useState({
        //sessionId: 0,
        sessionAvaileDateError: "",
        session_deruration_Error: "",
        session_all_AvaileDateError : '',
        session_price_Error:''
      });
    // that hold vals of one session detail
    const [tmpSessionDate, settmpSessionDate] = useState({
        session_date: "",
        deruration: "",
        reserved: false,
        session_price: 0.0 +'$',
        id: 0,
    });

    const addSession =(e) => {
        e.preventDefault();
        // clear prev error msgs
        setsessionDataError({
            ...sessionDataError, 
            session_deruration_Error : "",
            sessionAvaileDateError : ""
        })
        console.log(tmpSessionDate)
        if (tmpSessionDate.session_date && tmpSessionDate.deruration){ // validate both data exits
            //sessionDataError
           if(isDateInFuture(tmpSessionDate.session_date)){
                setsessionDataError({
                    ...sessionDataError,
                    session_price_Error: tmpSessionDate.session_price ? '' : "Session default price would be 9.99$"
                })
                settmpSessionDate({
                    ...tmpSessionDate,
                    session_price: tmpSessionDate.session_price ? tmpSessionDate.session_price : 9.99,
                });

                setsession_availble_date([tmpSessionDate])
                console.log('-------------------' , session_availble_date)
           }else{
                setsessionDataError({
                    ...sessionDataError,
                    session_deruration_Error : !tmpSessionDate.deruration ? "session deruartion is required" :"",
                    sessionAvaileDateError:  "you can't add session date in the past"
                })

           }

        }else{
            // const errorMsg = !tmpSessionDate.session_date? "session date is required" : "session deruration is required";
            //     //   seterrorMsg(errorMsg);
            //     //   setShowPortal(true);
                  setsessionDataError({
                    ...sessionDataError, 
                    session_deruration_Error : !tmpSessionDate.deruration ? "session deruartion is required" :"",
                    sessionAvaileDateError : !tmpSessionDate.session_date ? "session date is required" : ""
                  })
        }


    }

    // const addSession = (e) => {
    //     e.preventDefault();
    //     const dateformat =
    //       /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
    //     //   "-----------------------------",isNaN(tmpSessionDate.session_date.toString()));
    //     setsessionDataError({
    //       ...sessionDataError, 
    //       session_deruration_Error : "",
    //       sessionAvaileDateError : ""
    //     })
    //     if (tmpSessionDate.session_date && tmpSessionDate.deruration){ // validate both data exits
    //       if (isDateInFuture(tmpSessionDate.session_date)){ //happy scenario
    //           setSessionData((prev) => {
    //             return {
    //               ...prev,
    //               sessionAvaileDate: [
    //                 ...prev.sessionAvaileDate,
    //                 { ...tmpSessionDate, id: Date.now().toString() },
    //               ],
    //             };
    //           });
             
    //         // clear state
    //         settmpSessionDate({
    //           id: 0,
    //           session_date: "",
    //           deruration: "",
    //           reserved: false,
    //         });
          
    //       }else{ // session date in past
    //         seterrorMsg("session date can't be in the past");
    //         setsessionDataError({
    //           ...sessionDataError,
    //           session_deruration_Error : !tmpSessionDate.deruration ? "session deruartion is required" :"",
    
    //           sessionAvaileDateError: "Session date can't be in the past"
    //         })
    //         console.log(errorMsg);
    //         setShowPortal(true);
    //       }
    
    //     }else{// missing out data
    //       console.log('------------')
    //       const errorMsg = !tmpSessionDate.session_date? "session date is required" : "session deruration is required";
    //       seterrorMsg(errorMsg);
    //       setShowPortal(true);
    //       setsessionDataError({
    //         ...sessionDataError, 
    //         session_deruration_Error : !tmpSessionDate.deruration ? "session deruartion is required" :"",
    //         sessionAvaileDateError : !tmpSessionDate.session_date ? "session date is required" : ""
    //       })
    //     }
    //   };

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
            let session_date = e.target.value;
            console.log('vvvvvvvvvvvvv ' , session_date)
            settmpSessionDate({
                ...tmpSessionDate,
                session_date: session_date,
              });
            if(isDateInFuture(session_date)){
                setsessionDataError({
                    ...sessionDataError,
                    sessionAvaileDateError: ""
                })
               
            }else{
                setsessionDataError({
                    ...sessionDataError,
                    sessionAvaileDateError: "Session date can't be in the past"
                })
            }
        }
        if (e.target.name == "deruration") {
            let session_deruration= e.target.value;
            if(session_deruration){
                settmpSessionDate({
                    ...tmpSessionDate,
                    deruration: session_deruration,
                  });
            }else{
                setsessionDataError({
                    ...sessionDataError,
                    session_deruration_Error: "Session date can't be in the past"
                })
            }
        }
        if (e.target.name == "price") {
            let sessionPrice= e.target.value;
            settmpSessionDate({
                    ...tmpSessionDate,
                    session_price: sessionPrice,
                });
            console.log(tmpSessionDate)
                // else{
                //     setsessionDataError({
                //         ...sessionDataError,
                //         session_session_Error: "Session date can't be in the past"
                    // })
            
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
                    setsessionDataError={setsessionDataError}
                    showMarkDowndesc={showMarkDowndesc}
                    changeData={changeData}
                    blogTitle={blogTitle}
                    tags={tags}
                    setTagsLst={setTagsLst}
                    showPortal={showPortal}
                    handlePotalClose={handlePotalClose}
                    setShowPortal={setShowPortal}
                    imgUrl={imgFile}
                    tmpSessionDate={tmpSessionDate}
                    sessionDataError={sessionDataError}
                   // sessionDate={sessionDate}
                    addSession={addSession}
                    session_availble_date={session_availble_date}
                />

                <ShowMarkDownDetails ShowQouteDetails={quote} ShowRefDetails={ref} ShowMentionDetails={mention} ShowTaskDetails={task} ShowOrderDetails={order} ShowUnorderDetails={unorder} ShowImageDetails={image} ShowLinkDetails={link} ShowRepcodeDetails={repcode} ShowItalicDetails={italic} ShowHeadingDetails={heading} ShowBlogDetails={bold} showTitlesec={showTitlesec} showMarkDownsec={showMarkDownsec} />
            </div>
        </div>
    );




}


export default CreateBLog;