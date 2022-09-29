import React, { useState } from "react";

function About() {
  const [state] = useState({
    subHeading: "About Me",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
  });
  const [Header] = useState([
    { id: 1, title: "Name", text: "Atul Singh" },
    { id: 1, title: "Email", text: "talktoatulsingh@gmail.com" },
    { id: 1, title: "Phone no", text: "734243784327" },
    { id: 1, title: "Linkdin", text: "atulaksingh" },
  ]);
  return (
    <div className="About">
      <div className="container">
        <div className="common">
          <h1 className="main-header">{state.subHeading}</h1>
          <p className="main-content">{state.text}</p>
          {/* <div className="commonborder"></div> */}
        </div>
        <div className="row alignitam h-650">
          <div className="col-6">
            <div className="about-img">
              <img src="/images/man-01.png" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              <h1>Hii there</h1>
              <div className="about-info-p1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                magnam harum veritatis nemo. Officiis eos illo non? Quos, sunt
                odit.
              </div>
              <div className="about-info-p2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                aliquam vel dolorem inventore sit labore iusto mollit
              </div>
              <div className="info-contect">
                <div className="row">
                  {Header.map((info) => {
                    return (
                      <div className="col-6 mb-20">
                        <strong className="colors">{info.title}:</strong>
                        <p>{info.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
