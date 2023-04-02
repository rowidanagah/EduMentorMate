import { useState } from "react";
import "../css/imgUpload.css";
const UploadImg = ({ changeData, imgUrl }) => {
  const [CoverBox, setshowCoverBox] = useState("none");

  const showCoverBox = () => {
    setshowCoverBox("block");
  };

  return (
    <div className="image-uploadcenter">
      <p className="display-6 coverhead">Upload Cover Image</p>
      {/* 
            <input type="file" className="m-1"
                onChange={changeData} name="coverImg" /> */}
      <div class="button_outer">
        <div class="btn_upload" onClick={showCoverBox}>
          <input
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            className="m-1"
            onChange={changeData}
            name="coverImg"
          />
          Brose cover image <i className="m-1 fas fa-image fa-2xs"></i>
        </div>
      </div>

      <div className={`image-upload__preview d-${CoverBox}`}>
        {imgUrl && <img src={URL.createObjectURL(imgUrl)} />}
      </div>
    </div>
  );
};

export default UploadImg;
