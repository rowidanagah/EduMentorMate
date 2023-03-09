import { useEffect, useState } from "react";
import LauchSession from "../components/Blog/Session/LauchSession";

const LaunchSession = () => {
  const [sessionData, setSessionData] = useState({
    sessionId: 0,
    menterId: 0,
    sessionTitle: "",
    sessionAvaileDate: [],
    tags: []
  });
  // that hold vals of one session detail
  const [tmpSessionDate, settmpSessionDate] = useState({
    date: new Date(),
    deterioration: "",
    reserved: false,
    id: 0,
  });

  const chnageSessionData = (e) => {

    if (e.target.name == "title") {
      setSessionData({
        ...sessionData,
        sessionTitle: e.target.value,
      });
    }
    if (e.target.name == "date") {
      settmpSessionDate({
        ...tmpSessionDate,
        date: e.target.value,
      });
    }
    if (e.target.name == "deterioration") {
      settmpSessionDate({
        ...tmpSessionDate,
        deterioration: e.target.value,
      });
    }
    if (e.target.name == "tags") {
      setSessionData((prev) => {
        return {
          ...sessionData,
          tags: [...prev.tags, e.target.value]
        }
      });
      console.log(sessionData, "tagsss")
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

    // abdallah start
    e.preventDefault();
    setSessionData((prev) => {
      return {
        ...prev,
        sessionAvaileDate: [
          ...prev.sessionAvaileDate,
          { ...tmpSessionDate, id: Date.now().toString() },
        ],
      };
    });
    // Abdallah End
    console.log(sessionData)
    // clear state
    settmpSessionDate(
      {
        id: 0,
        date: new Date(),
        deterioration: '',
        reserved: false
      }
    )
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
  const createSession = () => {
    // create session table ->  in local stoagre
    return JSON.parse(localStorage.getItem("sessions") || "[]"); /**test* */
  };

  // add new session ->  in local stoagre
  const onSubmitSession = (e) => {
    // create session ->  in local stoagre
    e.preventDefault();
    const sessions = createSession();
    const numberOfSession = sessions.length + 1;
    console.log("numberrrrrrrrrr", numberOfSession)

    setSessionData((prev) => {
      return {
        ...prev,
        sessionId: sessions.length + 1,
      };
    })

    console.log(sessionData)
    sessions.push(sessionData);
    localStorage.setItem("sessions", JSON.stringify(sessions));
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
    />
  );
};

export default LaunchSession;
