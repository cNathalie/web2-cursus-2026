import "../styles/QAItem.css";

export function QAItem({ question, answer }) {
  return (
    <div className="qa-item">
      <div className="qa-question">
        <span className="qa-badge">Q</span>
        <h4 className="qa-question-text">{question}</h4>
      </div>
      <div className="qa-answer">
        <span className="qa-badge answer-badge">A</span>
        <div className="qa-answer-text">{answer}</div>
      </div>
    </div>
  );
}
