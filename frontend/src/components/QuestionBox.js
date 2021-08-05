import React from "react";

const QuestionBox = ({ question, answers, data, handle, thinkingOf }) => {
  return (
    <div className="questionBox">
      <li key={question.question_id}>
        <div className="question">
          {question.question_text.replace("______", thinkingOf)}
        </div>

        {answers.map((answer) => (
          <li key={answer.answer_id}>
            <form>
              <div>
                <label>
                  <input
                    type="radio"
                    name={question.question_id}
                    id={answer.answer_text}
                    value={answer.answer_id}
                    checked={data[question.question_id] === answer.answer_id}
                    onChange={handle}
                  />
                  {answer.answer_text}
                </label>
              </div>
            </form>
          </li>
        ))}
      </li>
    </div>
  );
};

export default QuestionBox;
