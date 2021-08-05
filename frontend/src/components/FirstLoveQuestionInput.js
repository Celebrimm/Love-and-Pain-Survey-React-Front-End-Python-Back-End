import React from "react";

const FirstLoveQuestionInput = ({ isLove, handle }) => {
  if (isLove === true)
    return (
      <div className="thinkingofcontainer">
        <form
          className="thinkingof"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>
            Please enter the name of the person you are thinking of.
            <input className="thinkingofbox" type="text" onChange={handle} />
          </label>
        </form>
      </div>
    );
  else if (isLove === false) return null;
};

export default FirstLoveQuestionInput;
