import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contect from "./Components/Contect";
import Navbar from "./Components/Navbar";
import Prices from "./Components/Prices";
import Services from "./Components/Services";
// import Nav from "./Components/Nav";
// import Navbar from "./Components/Navbar";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Header from "./Components/Banner";

function App() {
  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <Banner />
      <Services />
      <About />
      <Prices />
      <Contect />
    </>
  );
}

export default App;
