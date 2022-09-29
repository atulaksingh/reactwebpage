import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// D:\reactproject\react-web\node_modules\bootstrap\dist\css\bootstrap.min.css
import {
  faYoutube,
  faFacebook,
  faWhatsapp,
  faLinkedin,
  // faPlay,
} from "@fortawesome/free-brands-svg-icons";
function Contect() {
  // const [header] = React.useState({
  //   mainHeader: "CHOOSE A PLANE",
  //   subHeading: "Pricing Plan",
  //   text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minimaaliquam vel dolorem inventore sit labore iusto mollit",
  // });
  return (
    <div className="Contect">
      <div className="container">
        {/* <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="main-header">{header.subHeading}</h1>
          <p className="main-content">{header.text}</p>
          <div className="commonborder"></div>
        </div> */}
        <div className="aboutsection">
          <div className="row justicenter">
            <div className="col-6">
              <div className="about-section-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                pariatur? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsam, pariatur?
              </p>
              <ul className="about-circle">
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
