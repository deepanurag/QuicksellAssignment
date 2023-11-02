import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RingLoader color="#4fa94d" size={80} />
    </div>
  );
};

export default Loading;
