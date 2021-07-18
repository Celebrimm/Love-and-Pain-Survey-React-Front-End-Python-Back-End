import React from "react";
import History from "../services/History";
import { Button } from "react-bootstrap";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Welcome!</h1>
          <p>Choose Your Survey!</p>
          <form>
            <Button
              className="homesurveychoicebtn"
              onClick={() => History.push("/pain")}
            >
              Pain
            </Button>
          </form>
          <form>
            <Button
              className="homesurveychoicebtn"
              onClick={() => History.push("/love-and-pain")}
            >
              Love and Pain
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Home;
