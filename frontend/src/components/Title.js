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
          <div>
            <h1 className="title"> Pain Survey</h1>
          </div>
          <h2 className="info">
            This survey was created to test your pain threshold. After answering
            all the questions a submit button will appear at the bottom of the
            screen.
          </h2>
        </>
      );
    else if (this.state.welcomeText === true)
      return (
        <>
          <div>
            <h1 className="title">Love and Pain Survey</h1>
          </div>
          <h2 className="info">
            Before taking this survey please close your eyes and create a mental
            picture of someone you love or once loved. Try to remain fixated on
            this picture throughout the entirety of the survey. From questions
            two to fifteen, answer choices range from (1) Not at all true to (9)
            Definitely true. After answering all the questions a submit button
            will appear at the bottom of the screen.
          </h2>
        </>
      );
  }
}

export default Title;
