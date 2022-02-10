import React from "react";

import "./Consult.css";

function Consult() {
  return (
    <div className="consult">
      <div className="textSection">
        <p className="heading">CONSULT</p>
        <h1 className="head">Simple And Fast</h1>
        <p className="headSub">Follow the below steps to get started</p>
        <div className="processCard">
          <p className="cardText"> Write about process here</p>
        </div>
        <div className="processCard">
          <p className="cardText"> Write about process here</p>
        </div>
        <div className="processCard">
          <p className="cardText"> Write about process here</p>
        </div>
        <div className="processCard">
          <p className="cardText"> Write about process here</p>
        </div>
      </div>
      <div className="imageSection">
        <img
          className="consultImage"
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-doctor-4538862-3783538.png"
          alt="Online Doctor Consultation"
        />
      </div>
    </div>
  );
}

export default Consult;
