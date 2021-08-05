import React from "react";

const SubmitButton = ({ handleSubmit, allowSubmit, title }) => {
  if (allowSubmit === true)
    return (
      <form className="subbuttonform " onSubmit={handleSubmit}>
        <button className="glow-on-hover" type="submit">
          Submit
        </button>
      </form>
    );
  else if (allowSubmit === false)
    return <header className="submitfill"></header>;
};

export default SubmitButton;
