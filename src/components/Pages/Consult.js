import React from "react";
import DiseaseCard from "../reuse/diseaseCard";
import "./Consult.css";

function Consult() {
  return (
    <div className="consult">
      <div className="consult-info">
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
      <div className="consult-doctors">
        <p className="doctorsHead">Select Speciality</p>
        <div className="diseaseCards">
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
          <DiseaseCard
            diseaseName="Dentist"
            diseaseImgUrl="https://www.news-medical.net/image.axd?picture=2018%2F12%2FBy_Damir_Khabirov.jpg"
            diseaseDesc="Bad Breathe, Dental Cavity, tooth Pain, Gum Issues"
          />
        </div>
      </div>
    </div>
  );
}

export default Consult;
