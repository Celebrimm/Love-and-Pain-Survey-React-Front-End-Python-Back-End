import React from "react";
import QuestionBox from "../components/QuestionBox";
import SubmitButton from "../components/SubmitButton";
import Title from "../components/Title";
import History from "../services/History";
import Results from "../pages/Results.js";
class LoveAndPain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAndanswers: [],
      thinkingOf: "______",
      data: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/questionnaire")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          questionsAndanswers: result,
        });
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      data: { ...this.state.data, [name]: parseInt(value) },
    });

    if (e.target.name === "0" && e.target.id !== "I have never been in love.") {
      this.setState({
        thinkingOf: e.target.id
          .toLowerCase()
          .replace(".", "")
          .replace("i", "I"),
      });
    }
    if (e.target.name === "0" && e.target.id === "I have never been in love.") {
      this.setState({ thinkingOf: "someone important to me" });
    }
  };

  allowSubmit() {
    if (
      Object.keys(this.state.data).length ===
      Object.keys(this.state.questionsAndanswers).length
    ) {
      return true;
    } else {
      alert("Please answer all the questions before submitting");
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.allowSubmit()) {
      fetch("http://127.0.0.1:5000/results ", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer_ids: this.state.data }),
      })
        .then((r) => r.json())
        .then((res) => {
          if (res) {
            History.push("/results");
          }
        });
      this.setState({ data: {} });
    }
  }

  render() {
    return (
      <header className="container">
        <div>
          <Title welcomeText={true} />
          <ul className="ulremovebullets">
            {this.state.questionsAndanswers.map(({ question, answers }) => (
              <QuestionBox
                question={question}
                answers={answers}
                data={this.state.data}
                handle={this.handleChange}
                thinkingOf={this.state.thinkingOf}
              />
            ))}
          </ul>
          <SubmitButton
            handleSubmit={this.handleSubmit}
            onClick={Results.fetchResults}
          />
        </div>
      </header>
    );
  }
}

export default LoveAndPain;
