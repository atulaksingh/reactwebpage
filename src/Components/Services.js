import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Services() {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: "faGithub",
      heading: "Web Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
    },
    {
      id: 2,
      icon: "faYoutube",
      heading: "Photography",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
    },
    {
      id: 3,
      icon: "faFacebook",
      heading: "Web Design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
    },
    {
      id: 4,
      icon: "faWhatsapp",
      heading: "App Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
    },
    {
      id: 5,
      icon: "faLinkedin",
      heading: "Video Editing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
    },
    {
      id: 6,
      icon: "faGithub",
      heading: "SEO Export",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores enim, laborum vitae minus velit repellendus",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services_header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="main-header">{header.subHeading}</h1>
            <p className="main-content">{header.text}</p>
            <div className="commonborder"></div>
          </div>
          <div className="row">
            {state.map((item) => {
              return (
                <div className="col-4">
                  <div className="service-box">
                    <FontAwesomeIcon icon={faFacebook} className="iconsss" />
                    <div className="service-box-header">{item.heading}</div>
                    <div className="service-box-p">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
