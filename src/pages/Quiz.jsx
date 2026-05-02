import { useState } from "react";
import { useApp } from "../context/AppContext";

const questions = [
  {
    q: "Should you click unknown links?",
    options: ["Yes", "No"],
    answer: "No",
  },
  {
    q: "Is 2FA useful?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    q: "Should passwords be weak?",
    options: ["Yes", "No"],
    answer: "No",
  },
];

export default function Quiz() {
  const { setQuizScore } = useApp();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((item, index) => {
      if (answers[index] === item.answer) score++;
    });
    setQuizScore(score);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>Cybersecurity Quiz</h2>
      {questions.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.q}</h3>
          {item.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={`q${index}`}
                value={opt}
                checked={answers[index] === opt}
                onChange={() => setAnswers({ ...answers, [index]: opt })}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button className="btn" onClick={handleSubmit}>Submit Quiz</button>
      {submitted && <p>Your score has been saved in dashboard.</p>}
    </div>
  );
}