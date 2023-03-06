import { useState } from "react";

const LaunchSession = () => {

    const [sessionData, setSessionData] = useState({
        sessionId: 0,
        mentorid: 0,
        title: "",
        sessionAvaileDate: []
    });


    const createSession = () => {
        // create session ->  in local stoagre
    }

    const sessionDummyData = [
        {
            title: "new",
            mentorid: 0,
            sessionId: 0,
            sessionAvaileDate: [
                new Date(2022, 9, 3),
                new Date(2022, 9, 3),
                new Date(2022, 9, 3)

            ]
        }
        , {
            title: "title 2",
            mentorid: 1,
            sessionId: 0,
            sessionAvaileDate: [
                new Date(2022, 9, 3),
                new Date(2022, 9, 3),
                new Date(2022, 9, 3)
            ]

        }
    ];


    const addNewSession = () => {
        // add new session ->  in local stoagre
    }

    const onSubmitSession = () => {
        // create session ->  in local stoagre
    }

    return (<>
    </>)

}


export default LaunchSession;