import { useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Hall = () => {
  const [roomNum, setRoomNum] = useState("123");

  return (
    <div
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
      <h2>Enter Room Id to Join </h2>
      <input
        type="text"
        placeholder="Enter Romm id "
        value={roomNum}
        onChange={(e) => setRoomNum(e.target.value)}
      />
      <Link to={`/room/${roomNum}`}>
        <button>join</button>
      </Link>
    </div>
  );
};

export default Hall;
