import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = { welcomeText: props.welcomeText };
  }

  render() {
    if (this.state.welcomeText === false)
      return (
        <>
          <div class="font-effect-fire-animation">
            <h1 className="title"> Pain Survey</h1>
          </div>
          <h2 className="info">
            Welcome! You have been chosen to participate in an survey
            experiment. After answering all the questions a submit button will appear at the bottom of the screen. Thank you for your participation!
          </h2>
        </>
      );
    else if (this.state.welcomeText === true)
      return (
        <>
          <div class="font-effect-fire-animation">
            <h1 className="title">Love and Pain Survey</h1>
          </div>
          <h2 className="info">
            Welcome! You have been chosen to participate in an survey
            experiment. From questions two to fifteen, answer choices range from
            (1) Not at all true to (9) Definitely true. After answering all the questions a submit button will appear at the bottom of the screen. Thank you for your
            participation!
          </h2>
        </>
      );
  }
}

export default Title;
