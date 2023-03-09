import { useState } from "react";
import CardSession from "../components/Home/CardSession";

const Sessions = () => {
    // ---------- sessionLocal Storage Stuff---------- //
    const getSessions = JSON.parse(localStorage.getItem("sessions") || "[]");


    return (
        <div className="container m-5">
            {
                getSessions && getSessions.map(session => {
                    return (
                        <CardSession Title={session.sessionTitle} />

                    )

                })
            }

        </div>
    )
}


export default Sessions;