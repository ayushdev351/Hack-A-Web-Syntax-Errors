import React from "react";

import "./diseaseCard.css";

function DiseaseCard({ diseaseName, diseaseImgUrl, diseaseDesc }) {
  return (
    <>
      <div className="diseaseCard">
        <img className="diseaseImg" src={diseaseImgUrl} alt="dentist"></img>
        <p className="diseaseName">{diseaseName}</p>
        <p className="diseaseDesc">{diseaseDesc}</p>
        <button className="btn">Consult Doctor</button>
      </div>
    </>
  );
}

export default DiseaseCard;
