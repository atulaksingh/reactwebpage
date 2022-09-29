import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import // faYoutube,
// faFacebook,
// faWhatsapp,
// faLinkedin,
// faPlay,
"@fortawesome/free-brands-svg-icons";

function Banner() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header-content">
              <div className="header-section">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ducimus iure reiciendis maiores
                </p>
                <div className="header-button">
                  <a href="#" className="btn btn-outline">
                    My Portfolio
                  </a>

                  <a href="#" className="btn btn-smart">
                    <faPlay className="play" />
                    {/* <FontAwesomeIcon icon={faPlay} className="play" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-img">
              <img src="/images/man-01.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
