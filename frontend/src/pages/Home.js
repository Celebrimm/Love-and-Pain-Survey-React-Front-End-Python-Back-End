import React from "react";
import History from "../services/History";
import { Button } from "react-bootstrap";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      
        <div className="Homewelcome">
          <div class="font-effect-fire-animation"><h1 className="Hometitle">Welcome! </h1></div>
          <p className="Homewelcome">Choose Your Survey!</p>
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
              Love and Pain
            </Button>
          </form>
        </div>
      
    );
  }
}
export default Home;
