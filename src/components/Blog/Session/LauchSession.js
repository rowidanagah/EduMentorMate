import { useState } from "react";
import ErrorModel from "../../ErrorAndSuccess/ErrorModel";
import TagsInput from "../CreateBlog/TagsInput";
import "../css/blogs.css"

import ErrorText from "../../profile/auth/ErrorText";
import Error from "../../../components/ErrorAndSuccess/Error"
//../components/ErrorAndSuccess/Error";

const LauchSession = ({

    errorMsg, setShowPortal, handlePotalClose, showPortal,  setTagsLst, tags, end_dateValue, sessionDataError,

    tmpSessionDate, addSession, removeSessionDate, chnageSessionData, onSubmitSession, sessionData, setSessionData }) => {

    return (
        <div className="background">
            {showPortal &&
                <ErrorModel msg={errorMsg} handlePotalClose={handlePotalClose} />
            }
           
            <div className="container row p-5 mb-2 m-auto ">
                <div className="row p-5 m-auto">
                    <div className="p-5 bg-light m-0 shadow rounded-5">
                        <div className="d-flex justify-content-center mb-5">
                            <h2 className="display-5">Launch Session</h2>

                        </div>
                        {sessionDataError.session_all_AvaileDateError&&<Error message={"Session Can't be without session's available_dates!"} />}

                        <form onSubmit={onSubmitSession} className="">
                            {/* title */}
                            <div className="form-floating mb-3">
                                <input name="title" type="text" className="form-control"
                                    value={sessionData.sessionTitle}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Title</label>
                                <div className="ps-1">
                                    {sessionDataError['sessionTitleError']&&<ErrorText errorMsg={sessionDataError['sessionTitleError']} />}
                                </div>
                            </div>
                            
                            {/* end date */}
                            <div className="form-floating mb-3">
                                <input name="end_date" type="date" className="form-control"
                                    value= {end_dateValue}//{sessionData.end_date}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session End Date</label>
                                <div className="ps-1">
                                    {sessionDataError['end_dateError']&&<ErrorText errorMsg={sessionDataError['end_dateError']} />}
                                </div>
                            </div>

                            {/* 1- iput date 2-deruration 3-add btn */}
                            <div className="form-floating mb-3">
                                {/* session date */}
                                <input name="date" type="datetime-local" className="form-control"
                                    value={tmpSessionDate.session_date}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Date</label>
                                <div className="ps-1">
                                    {sessionDataError['sessionAvaileDateError']&&<ErrorText errorMsg={sessionDataError['sessionAvaileDateError']} />}
                                </div>
                            </div>

                            {/* change input type here */}
                            <div className="form-floating mb-3">
                                <input name="deruration"
                                    value={tmpSessionDate.deruration}
                                    className="form-control"
                                    type="time" onChange={e => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Duration Time (HH:MM[:ss]):</label>
                                <div className="ps-1">
                                    {sessionDataError['session_deruration_Error']&&<ErrorText errorMsg={sessionDataError['session_deruration_Error']} />}
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" name="price"
                             value={tmpSessionDate.session_price} step="0.01" min="0" onChange={(e) => chnageSessionData(e)} />
                            <label htmlFor="price">Session Price : 9.99$</label>

                            <div className="ps-1">
                                {sessionDataError["session_price_Error"] && (
                                <ErrorText
                                    errorMsg={sessionDataError["session_price_Error"]}
                                />
                                )}
                            </div>
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