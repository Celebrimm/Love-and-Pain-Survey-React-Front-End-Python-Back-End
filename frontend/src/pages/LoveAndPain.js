import React from "react";
import QuestionBox from "../components/QuestionBox";
import SubmitButton from "../components/SubmitButton";
import Title from "../components/Title";
import History from "../services/History";
import FirstLoveQuestionInput from "../components/FirstLoveQuestionInput";

import uri from "../services/URL";

class LoveAndPain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAndanswers: [],
      thinkingOf: "______",
      data: {},
      loverightNow: false,
      title: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  questionsRendered() {
    if (Object.keys(this.state.questionsAndanswers).length > 0) return true;
  }
  componentDidMount() {
    fetch(uri + "questionnaire")
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
    if (e.target.name === "0" && e.target.id === "I have never been in love.") {
      this.setState({ data: {} });
      History.push("/pain");
    }
    if (e.target.name === "0" && e.target.id === "Someone I once loved.") {
      this.setState({ loverightNow: true });
    }
    if (e.target.name === "0" && e.target.id === "Someone I love right now.") {
      this.setState({ loverightNow: true });
    }
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ thinkingOf: value });
  };

  allowSubmit() {
    if (
      Object.keys(this.state.data).length ===
        Object.keys(this.state.questionsAndanswers).length &&
      Object.keys(this.state.questionsAndanswers).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.allowSubmit()) {
      fetch(uri + "post_results", {
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
      <div>
        <div className="Appcontainer">
          <Title welcomeText={this.state.title} />
          <FirstLoveQuestionInput
            isLove={this.state.loverightNow}
            handle={this.handleInputChange}
          />
          <ul className="ulremovebullets">
            {this.state.questionsAndanswers.map(({ question, answers }) => (
              <QuestionBox
                question={question}
                answers={answers}
                data={this.state.data}
                handle={this.handleChange}
                thinkingOf={this.state.thinkingOf}
                loverightNow={this.state.loverightNow}
              />
            ))}
          </ul>
        </div>
        <SubmitButton
          className="subbuttonformlap"
          handleSubmit={this.handleSubmit}
          allowSubmit={this.allowSubmit()}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default LoveAndPain;
