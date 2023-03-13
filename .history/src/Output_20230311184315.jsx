Refused to set unsafe header "User-Agent"

// import { Avatar } from "@mui/material";
// import React, { forwardRef } from "react";
// import "../Styles/rps.css";
import React from "react";
import "./TextGenerator.css";

function Output({ response }) {
  return (
    <div className="output">
      {/* <p className="rqt">{request}</p> */}
      <p className="rps">{response}</p>
    </div>
  );
}

export default Output;
