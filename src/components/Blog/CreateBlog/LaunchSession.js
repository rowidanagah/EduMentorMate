import { useState } from "react";
import ErrorText from "../../profile/auth/ErrorText";

const LaunchSession = ({
  sessionDate,
  changeData,
  sessionDataError,
  tmpSessionDate, addSession
}) => {
  const [showSessionForm, setshowSessionForm] = useState("none");

  const [dateRange, setDateRange] = useState({
    minLaunchDate: new Date().toLocaleString(),
    maxLaunchDate: new Date(),
  });

  const showSessionBox = (e) => {
    e.preventDefault();
    setshowSessionForm(showSessionForm == "block" ? "none" : "block");
  };
  return (
    <div>
      <button
        className="btn btn-outline-success mt-4"
        onClick={(e) => showSessionBox(e)}
        style={{ marginLeft: "16px" }}
      >
        Launch a Session <i class="fa-solid fa-headset"></i>
      </button>

      <div className={`d-${showSessionForm}`}>
        {/* session date */}
        <div className="form-floating mb-3">
          <input
            className="mt-5  form-control"
            type="datetime-local"
            min={dateRange.minLaunchDate}
            max={dateRange.maxLaunchDate}
            name="Secciondate"
            onChange={(e) => changeData(e)}
          />
          {sessionDataError["sessionAvaileDateError"] && (
            <ErrorText errorMsg={sessionDataError["sessionAvaileDateError"]} />
          )}
        </div>

        {/* <div className="ps-1">
        {sessionDataError['sessionAvaileDateError']&&<ErrorText errorMsg={sessionDataError['sessionAvaileDateError']} />}
        </div> */}
        {/* change input type here */}
        {/* deruration */}
        <div className="form-floating mb-3">
          <input
            name="deruration"
            value={tmpSessionDate.deruration}
            className="form-control"
            type="time"
            onChange={(e) => changeData(e)}
          />
          <label htmlFor="title" className="form-label">
            Session Duration Time (HH:MM[:ss]):
          </label>
          <div className="ps-1">
            {sessionDataError["session_deruration_Error"] && (
              <ErrorText
                errorMsg={sessionDataError["session_deruration_Error"]}
              />
            )}
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" name="price" value={tmpSessionDate.session_price} step="0.01" min="0" onChange={(e) => changeData(e)} />
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

      </div>
    </div>
  );
};

export default LaunchSession;
