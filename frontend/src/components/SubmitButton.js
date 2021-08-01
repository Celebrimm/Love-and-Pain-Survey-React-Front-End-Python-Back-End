import React from "react";

const SubmitButton = ({ handleSubmit, allowSubmit, title}) => {
  
  if (allowSubmit===true && title === false)
  return (
    
      <form className="subbuttonform " onSubmit={handleSubmit}>
        
        <button   className="glow-on-hover"type="submit">
          Submit
        </button>
        
      </form>
    
  )
   else if (allowSubmit===true && title === true)
return (
    
    <form className="lapsubbuttonform " onSubmit={handleSubmit}>
      
      <button   className="glow-on-hover"type="submit">
        Submit
      </button>
      
    </form>
  
)
else if (allowSubmit===false) return <header className="submitfill"></header>
};

export default SubmitButton;

