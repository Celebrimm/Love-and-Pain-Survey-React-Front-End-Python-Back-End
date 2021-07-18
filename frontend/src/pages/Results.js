import React from "react";
import Chart from "../components/Chart";
import ResultInfo from "../components/ResultInfo";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  fetchResults = () => {
    fetch("http://127.0.0.1:5000/results")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  };
  componentDidMount() {
    fetch("http://127.0.0.1:5000/get_results")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }
  render() {
    return (
      <div className="result-info">
        <Chart data={this.state.data}></Chart>
        <ResultInfo />
      </div>
    );
  }
}

export default Results;
