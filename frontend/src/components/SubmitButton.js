import React from "react";

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className="subbtn">
      <form onSubmit={handleSubmit}>
        <button className="subbtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitButton;
