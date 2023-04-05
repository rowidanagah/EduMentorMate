import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LauchSession from "../components/Blog/Session/LauchSession";
import axios from "axios";

const LaunchSession = () => {
  let getToken = localStorage.getItem("token");

  const headers = {
    Authorization: `Token ${getToken}`,
    "Content-Type": "application/json",
  };

  const history = useHistory();
  const [showPortal, setShowPortal] = useState(false);
  const handlePotalClose = () => {
    setShowPortal(false);
  };
  const [errorMsg, seterrorMsg] = useState("");

  const [sessionData, setSessionData] = useState({
    //sessionId: 0,
    mentor: 0,
    sessionTitle: "",
    sessionAvaileDate: [],
    end_date : "",
    tags: [],
  });
  // that hold vals of one session detail
  const [tmpSessionDate, settmpSessionDate] = useState({
    session_date: '',
    deruration: "",
    reserved: false,
    id: 0,
  });
  const [tags, setTagsLst] = useState([]);

  const chnageSessionData = (e) => {
    if (e.target.name == "title") {
      setSessionData({
        ...sessionData,
        sessionTitle: e.target.value,
      });
    }
    
    if (e.target.name == "end_date") {
      setSessionData({
        ...sessionData,
        end_date: e.target.value
      });
    }
    if (e.target.name == "date") {
      settmpSessionDate({
        ...tmpSessionDate,
        session_date: e.target.value,
      });
    }
    if (e.target.name == "deruration") {
      settmpSessionDate({
        ...tmpSessionDate,
        deruration: e.target.value,

      });
    }

    console.log(sessionData);
    console.log(tmpSessionDate);
  };

  const addSession = (e) => {
    // on click in add buton -> append date obj to `sessionAvaileDate`
    // work on ->  setSessionData settmpSessionDate sessionAvaileDate
    // handel index of current session date -> session subid
    /* steps 
        1- validate 
            1- handel index
            2- append to sessionData -> if valid 
            3- clear input values -> clear start asln :)"
        */

    e.preventDefault();
    const dateformat =
      /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

    // const isValidDate = dateformat.match(tmpSessionDate.date);

    //console.log(isValidDate)
    // valid data
    console.log('-----------------------------' , isNaN(tmpSessionDate.session_date.toString()))
    if ( tmpSessionDate.session_date && tmpSessionDate.deruration) {
      console.log("added");
      //append session option
      setSessionData((prev) => {
        return {
          ...prev,
          sessionAvaileDate: [
            ...prev.sessionAvaileDate,
            { ...tmpSessionDate, id: Date.now().toString() },
          ],
        };
      });

      // clear state
      settmpSessionDate({
        id: 0,
        session_date: "",
        deruration: "",
        reserved: false,
      });
    } else {
      // isNaN(date.getTime()) -> validation done
      console.log("---------deter------------", tmpSessionDate.session_date);
      // isNaN(tmpSessionDate.session_date.toString())
      const errorMsg = ! tmpSessionDate.session_date
        ? "session date is required"
        : "session deruration is required";
      seterrorMsg(errorMsg);
      console.log(errorMsg);
      setShowPortal(true);
    }
  };

  const removeSessionDate = (id) => {
    //const removedSessionData = sessionData.sessionAvaileDate[index];
    const filteredData = sessionData.sessionAvaileDate.filter((date) => {
      return date.id != id;
    });
    setSessionData({
      ...sessionData,
      sessionAvaileDate: filteredData, //[...filteredData]
    });
  };
  // ----------Local Storage Stuff---------- //
  // const createSession = () => {
  //   // create session table ->  in local stoagre
  //   return JSON.parse(localStorage.getItem("sessions") || "[]"); /**test* */
  // };

  const validate_data = () => {
    console.log("dates", sessionData.sessionAvaileDate , sessionData.sessionAvaileDate.length);
    //{condition1 ? result1 : condition2 ? result2 : result3}
    let errorMsg = !sessionData.sessionTitle
      ? "Session Title is required"
      : !sessionData.sessionAvaileDate.length
      ? "Session availabe date is required"
      : "";

    console.log("validate msg-----------------", errorMsg);
    if (errorMsg) {
      seterrorMsg(errorMsg);
      setShowPortal(true);
      return false;
    }
    return true;
  };
  const create_new_session = async () => {
  
    console.log(sessionData.end_date)
 
    const  data = {
      "title": sessionData.sessionTitle,
      "available_dates": sessionData.sessionAvaileDate,
      "ended_at" :  sessionData.end_date,
      "mentor": 3,
      "tags": tags,
  }
   console.log('----------------' , data.available_dates)
    try {
        console.log('------------data' , data)
        const response = await axios.post(`http://127.0.0.1:8000/roomsession/`, data, { headers });
  
        console.log('rowida ----------------------------', response.data);
  
      } catch (error) {
        console.error('-------------------------------rowida error', error);
      }


  }
  // add new session ->  in local stoagre
  const onSubmitSession = (e) => {
    // create session ->  in local stoagre
    e.preventDefault();
    
    if (validate_data()) {
      console.log("dataaaaaaaaaaaaa", sessionData.sessionTitle);
      console.log("dataaaaaaaaaaaaa tags", tags);
      console.log("token on submit", getToken);
      create_new_session();
    }
   
    //   const sessions = createSession();
    //   const numberOfSession = sessions.length + 1;
    //   console.log("numberrrrrrrrrr", numberOfSession)
    //  // history.push('/home');

    //   setSessionData((prev) => {
    //     return {
    //       ...prev,
    //       sessionId: sessions.length + 1,
    //     };
    //   })

    // sessions.push(sessionData);
    // localStorage.setItem("sessions", JSON.stringify(sessions));
  };

  return (
    <LauchSession
      onSubmitSession={onSubmitSession}
      sessionData={sessionData}
      setSessionData={sessionData}
      chnageSessionData={chnageSessionData}
      addSession={addSession}
      removeSessionDate={removeSessionDate}
      tmpSessionDate={tmpSessionDate}
      showPortal={showPortal}
      handlePotalClose={handlePotalClose}
      setShowPortal={setShowPortal}
      errorMsg={errorMsg}
      tags={tags}
      setTagsLst={setTagsLst}
    />
  );
};

export default LaunchSession;
