import { useState } from "react";

const LaunchSession = ({ sessionDate, changeData }) => {
    const [showSessionForm, setshowSessionForm] = useState('none');

    const [dateRange, setDateRange] = useState({
        "minLaunchDate": new Date().toLocaleString(),
        "maxLaunchDate": new Date()
    });

    const showSessionBox = () => {
        setshowSessionForm(showSessionForm == "block" ? "none" : "block")
    }
    return (
        <div>
            <button className="btn btn-outline-success mt-4"
                onClick={showSessionBox}
                style={{ marginLeft: "16px" }}>Lauch a Session  <i class="fa-solid fa-headset"></i></button>

            <div className={`d-${showSessionForm}`}>
                <input
                    className="mt-5  form-control"
                    type='date'
                    min={dateRange.minLaunchDate}
                    max={dateRange.maxLaunchDate}
                    name="Secciondate"
                    onChange={e => changeData(e)}
                />
            </div>
        </div>
    )
}

export default LaunchSession;