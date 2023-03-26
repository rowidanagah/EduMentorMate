import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Hall = () => {
  const [roomNum, setRoomNum] = useState("");

  return (
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
        <button className="btn btn-outline-success pe-5 ps-5 rounded-5">join</button>
      </Link>
    </div>
  );
};

export default Hall;
