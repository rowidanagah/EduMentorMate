import { useEffect, useState } from "react";
import LauchSession from "../components/Blog/Session/LauchSession";

const LaunchSession = () => {
    const [sessionData, setSessionData] = useState({
        sessionId: 0,
        menterId: 0,
        sessionTitle: '',
        sessionAvaileDate: [
        ]
    });
    // that hold vals of one session detail 
    const [tmpSessionDate, settmpSessionDate] = useState({
        date: new Date(),
        deterioration: '',
        reserved: false,
        id: 0
    });

    const chnageSessionData = (e) => {
        console.log(e.target.name)
        if (e.target.name == "title") {
            setSessionData({
                ...sessionData,
                sessionTitle: e.target.value
            })
        }
        if (e.target.name == "date") {
            settmpSessionDate(
                {
                    ...tmpSessionDate,
                    date: e.target.value
                }
            )
        }
        if (e.target.name == "deterioration") {
            settmpSessionDate(
                {
                    ...tmpSessionDate,
                    deterioration: e.target.value
                }
            )

        }
        console.log(sessionData)
        console.log(tmpSessionDate)

    }

    const addSession = (e) => {
        // on click in add buton -> append date obj to `sessionAvaileDate`
        //   setSessionData settmpSessionDate sessionAvaileDate

        /* steps
        
        1- validate 
            1- handel index
            2- append to sessionData -> if valid 
            3- clear input values -> clear start asln :)"
        */

        // handel index of current session date 

        e.preventDefault();
        console.log(sessionData);
        // handel id -> of each session

        settmpSessionDate({
            ...tmpSessionDate,
            id: 544545
        })
        console.log("add index", tmpSessionDate);

        // append to session data

        /*  setSessionData({
             ...sessionData,
             sessionAvaileDate: [
                 ...sessionData.sessionAvaileDate,
                 tmpSessionDate
             ]
         }) */

        console.log("after append ", sessionData)
        // clear state
        /*  settmpSessionDate(
             {
                 id: 0,
                 date: new Date(),
                 deterioration: '',
                 reserved: false
             }
         ) */

    }
    const removeSessionDate = (id) => {

        //const removedSessionData = sessionData.sessionAvaileDate[index];

        const filteredData = sessionData.sessionAvaileDate.filter(date => {
            return (date.id != id)
        })

        setSessionData({
            ...sessionData,
            sessionAvaileDate: filteredData //[...filteredData]

        })

    }
    // ----------Local Storage Stuff---------- //
    const createSession = () => {
        // create session table ->  in local stoagre 
        return JSON.parse(localStorage.getItem("sessions") || "[]"); /**test* */
    }

    // add new session ->  in local stoagre
    const onSubmitSession = () => {
        // create session ->  in local stoagre
        const sessions = createSession();
        sessions.push(sessionData);
        localStorage.setItem("sessions", JSON.stringify(sessions));
    }

    return (<LauchSession
        onSubmitSession={onSubmitSession}
        sessionData={sessionData}
        setSessionData={sessionData}
        chnageSessionData={chnageSessionData}
        addSession={addSession}
        removeSessionDate={removeSessionDate}
        tmpSessionDate={tmpSessionDate}
    />)

}


export default LaunchSession;