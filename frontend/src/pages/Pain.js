import React from "react";
import QuestionBox from "../components/QuestionBox";
import SubmitButton from "../components/SubmitButton";
import Title from "../components/Title";
import History from "../services/History";
import uri from "../services/URL"

class Pain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questionsAndanswers: [], data: {}, title:false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
    fetch(uri + 'get_pain')
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
      Object.keys(this.state.questionsAndanswers).length && Object.keys(this.state.questionsAndanswers).length>0
    ) {
      return true;
    } else {
      return false
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
    // const { questionsAndanswers } = this.state;

    return (
      <div>
        <div className="container">
          <Title welcomeText={this.state.title} />
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
          
        </div>
        <SubmitButton handleSubmit={this.handleSubmit} title={this.state.title}allowSubmit={this.allowSubmit()} />
      </div>
      
    );
  }
}

export default Pain;
