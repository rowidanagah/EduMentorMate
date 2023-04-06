import { useState } from "react";
import ErrorModel from "../../ErrorAndSuccess/ErrorModel";
import TagsInput from "../CreateBlog/TagsInput";
import "../css/blogs.css"
const LauchSession = ({

    errorMsg, setShowPortal, handlePotalClose, showPortal,  setTagsLst, tags, end_dateValue,

    tmpSessionDate, addSession, removeSessionDate, chnageSessionData, onSubmitSession, sessionData, setSessionData }) => {

    return (
        <div>

            {showPortal &&
                <ErrorModel msg={errorMsg} handlePotalClose={handlePotalClose} />
            }
            <div className="container row mt-5 p-0 mb-2 m-auto" style={{ backgroundColor: "#172e59" }}>

                <div className="row p-5 m-auto">
                    <div className="p-5 bg-light m-0">
                        <div className="d-flex justify-content-center mb-5">
                            <h2 className="display-4">Launch Session</h2>
                        </div>
                        <form onSubmit={onSubmitSession} className="">
                            <div className="form-floating mb-3">
                                <input name="title" type="text" className="form-control"
                                    value={sessionData.sessionTitle}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Title</label>
                            </div>
                            
                            {/* end date */}
                            <div className="form-floating mb-3">
                                <input name="end_date" type="date" className="form-control"
                                    value= {end_dateValue}//{sessionData.end_date}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session End Date</label>
                            </div>

                            {/* 1- iput date 2-deruration 3-add btn */}
                            <div className="form-floating mb-3">

                                <input name="date" type="datetime-local" className="form-control"
                                    value={tmpSessionDate.session_date}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Date</label>
                            </div>

                            {/* change input type here */}
                            <div className="form-floating mb-3">
                                <input name="deruration"
                                    value={tmpSessionDate.deruration}
                                    className="form-control"
                                    type="time" onChange={e => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Duration Time (HH:MM[:ss]):</label>
                            </div>

                            <button className="btn btn-outline-success " onClick={e => addSession(e)}>+</button>

                            <TagsInput
                                key='Tags'
                                tags={tags}
                                setTagsLst={setTagsLst}
                               // onChange={(e) => changeData(e)}
                                label={"Session tags"}
                                //tags={sessionData.tags}
                                onChange={chnageSessionData}
                            />

                            {/* session section */}
                            <div className="col-12 text-center ">
                                <button className="btn btn-outline-success mt-4"
                                    onClick={(e) => onSubmitSession(e)}
                                    style={{ marginLeft: "16px" }}>Launch a Session  <i class="fa-solid fa-headset"></i></button>

                            </div>
                        </form>

                        { /* { show session date */
                            sessionData.sessionAvaileDate &&
                            sessionData.sessionAvaileDate.map((datObj) => {
                                console.log(datObj.deruration)
                                return (
                                    <div className="m-5 text-center" >
                                        {/* display session data here */}
                                        <p className="m-5 d-inline">{new Date(datObj.session_date).toLocaleString()}</p>
                                        <i className='input__remove' onClick={() => removeSessionDate(datObj.id)} >
                                            <i className="fa fa-remove"></i>

                                        </i>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div >
        </div>)
}

export default LauchSession;