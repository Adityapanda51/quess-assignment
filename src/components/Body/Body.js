import React from "react";
import arrowImage from "../../images/arrow.png";
import image1 from "../../images/Jar.jpg";
import image2 from "../../images/Jar.jpg";
import image3 from "../../images/Jar.jpg";
import "./Body.css";

function BodySection() {
  return (
    <div>
      <div className="header  text-start">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img
            src={arrowImage}
            alt="Arrow"
            className="img-fluid me-2"
            width="30"
            height="30"
          />
          What is Lorem Ipsum?
        </h1>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <section className="container-fluid my-2">
        <div className="row d-flex justify-content-center">
         
          <div className="col-4">
            <div className="image-wrapper text-center">
              <img src={image1} alt="jar" className="img-fluid w-100" />
              <h2 className="text-center" style={{ color:"#B55246" }}>Where does it come from?</h2>
              <p className="mt-2">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. 
              </p>
            </div>
          </div>
         
          <div className="col-4">
            <div className="image-wrapper text-center">
              <img src={image2} alt="jar" className="img-fluid w-100" />
              <h2 className="text-center" style={{ color:"#B55246" }}>Where does it come from?</h2>
              <p className="mt-2">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
         
          <div className="col-4">
            <div className="image-wrapper text-center">
              <img src={image3} alt="jar" className="img-fluid w-100" />
              <h2 className="text-center" style={{ color:"#B55246" }}>Where does it come from?</h2>
              <p className="mt-2">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="header text-start">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img
            src={arrowImage}
            alt="Arrow"
            className="img-fluid me-2"
            width="30"
            height="30"
          />
          What is Lorem Ipsum?
        </h1>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default BodySection;
