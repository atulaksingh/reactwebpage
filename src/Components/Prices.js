import React from "react";

function Prices() {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLANE",
    subHeading: "Pricing Plan",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minimaaliquam vel dolorem inventore sit labore iusto mollit",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: "50",
      ms1: "Lorem ipsum dolor ",
      ms2: "Lorem ipsum dolor ",

      ms3: "Lorem ipsum dolor ",

      ms4: "Lorem ipsum dolor ",

      ms5: "Lorem ipsum dolor ",
    },
    {
      id: 2,
      heading: "Standard",
      price: "80",
      ms1: "Lorem ipsum dolor ",
      ms2: "Lorem ipsum dolor ",

      ms3: "Lorem ipsum dolor ",

      ms4: "Lorem ipsum dolor ",

      ms5: "Lorem ipsum dolor ",
    },
    {
      id: 3,
      heading: "Premium",
      price: "160",
      ms1: "Lorem ipsum dolor ",
      ms2: "Lorem ipsum dolor ",

      ms3: "Lorem ipsum dolor ",

      ms4: "Lorem ipsum dolor ",

      ms5: "Lorem ipsum dolor ",
    },
  ]);
  return (
    <div className="Prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="main-header">{header.subHeading}</h1>
          <p className="main-content">{header.text}</p>
          <div className="commonborder"></div>
        </div>
        <div className="row">
          {state.map((prices) => {
            return (
              <div className="col-4" key={prices.id}>
                <div className="price">
                  <div className="price-heading">{prices.heading}</div>
                  <div className="price-rs">
                    <span>$</span>
                    {prices.price}
                    <ul>
                      <li>{prices.ms1}</li>
                      <li>{prices.ms2}</li>
                      <li>{prices.ms3}</li>
                      <li>{prices.ms4}</li>
                      <li>{prices.ms5}</li>
                    </ul>
                  </div>
                  <div className="price-btn">
                    <a href="#" className="btn btn-outline">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Prices;
