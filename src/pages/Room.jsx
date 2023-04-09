import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { ZegoSuperBoardManager } from "zego-superboard-web";

const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 946219318;
    const serverSecret = "8e0b853d79deae0bcbfe949b73ca46a4";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "your name"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.addPlugins({ ZegoSuperBoardManager });

    zp.joinRoom({
      showScreenSharingButton: true,
      whiteboardConfig: {
        showAddImageButton: true,
      },
      showScreenSharingButton: true,
      sharedLinks: [
        {
          name: "meeting link ",
          url: `127.0.0.1:3000/room/${roomID}`,
        },
      ],

      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return (
    <div
      ref={meeting}
      style={{
        display: "fixed",
        top: "0",
        left: "0",
        right: "0",
        width: "100vw",
        height: "100vh",
        marginBottom: "5rem",
      }}
    ></div>
  );
};

export default Room;
