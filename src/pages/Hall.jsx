import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Hall = () => {
  const [roomNum, setRoomNum] = useState("");
  const [availablesSessions, setAvailableSessions] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    let x = axios
      .get("http://localhost:8000/roomsession/user_picked_sessions/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log("response data ", response.data);
        setAvailableSessions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container  ">
        {availablesSessions.map((s) => {
          return (
            <div
              className="card"
              style={{ width: "60%", margin: "auto", marginTop: "5rem" }}
            >
              <div
                className="card-header"
                style={{ backgroundColor: "#8cd39e" }}
              >
                {s.session_date}
              </div>
              <div className="card-body">
                <h5 className="card-title">{s.session_room.title}</h5>
                <p className="card-text">{s.session_room.description}</p>

                <a
                  href={s.session_room.sessionUrl}
                  className="btn btn-primary"
                  style={{ background: "#3d9d7e" }}
                >
                  Enter the Room
                </a>
              </div>
            </div>

            // <div className="card text-center mb-3" style={{ width: "18rem" }}>
            //   <img
            //     src={
            //       s.session_room.user_profile ||
            //       "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png"
            //     }
            //     className="card-img-top"
            //     alt="..."
            //   />
            //   <div className="card-body">
            //     <h5 className="card-title">{s.session_room.title}</h5>
            //     <p className="card-text">{s.session_room.description}</p>
            // <a
            //   href={s.session_room.sessionUrl}
            //   className="btn btn-primary"
            //   style={{ background: "#3d9d7e" }}
            // >
            //   Enter the Room
            // </a>
            //   </div>
            // </div>
          );
        })}
      </div>
      <div
        className="card d-flex align-items-center justify-content-center p-5"
        style={{
          width: "60%",
          margin: "6rem auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          marginBottom: "33rem",
          gap: "20px",
        }}
      >
        <h2 className="display-6">Enter Room ID to Join </h2>
        <input
          className="form-control w-75 text-center"
          type="text"
          placeholder="Enter Room ID"
          value={roomNum}
          onChange={(e) => setRoomNum(e.target.value)}
        />
        <Link to={`/room/${roomNum}`}>
          <button className="btn btn-outline-success pe-5 ps-5 rounded-5">
            join
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hall;
