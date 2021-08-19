import React from "react";
import History from "../services/History";
import { Button } from "react-bootstrap";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div className="Homewelcome">
        <div>
          <h1 className="Hometitle">The Love and Pain Experiment </h1>
        </div>
        <p className="Homechoose">Please Choose a Survey.</p>

        <form className="painbuttonpos">
          <Button
            className="glow-on-hover"
            onClick={() => History.push("/pain")}
          >
            Pain
          </Button>
        </form>
        <form className="loveandpainbuttonpos">
          <Button
            className="glow-on-hover"
            onClick={() => History.push("/love-and-pain")}
          >
            Love
          </Button>
        </form>
      </div>
    );
  }
}
export default Home;
