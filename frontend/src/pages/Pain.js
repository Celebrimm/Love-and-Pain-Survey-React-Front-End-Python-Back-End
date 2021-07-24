import React from "react";
import QuestionBox from "../components/QuestionBox";
import SubmitButton from "../components/SubmitButton";
import Title from "../components/Title";
import History from "../services/History";

class Pain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionsAndanswers: [], data: {} };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/pain")
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
    // const { questionsAndanswers } = this.state;

    return (
      <header className="container">
        <div>
          <Title welcomeText={false} />
          <ul className="ulremovebullets">
            {this.state.questionsAndanswers.map(({ question, answers }) => (
              <QuestionBox
                question={question}
                answers={answers}
                data={this.state.data}
                handle={this.handleChange}
              />
            ))}
          </ul>
          <SubmitButton handleSubmit={this.handleSubmit} />
        </div>
      </header>
    );
  }
}

export default Pain;