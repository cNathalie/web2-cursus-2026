import "../styles/CodeSample.css";

function CodeSample({ children }) {
  return (
    <div className="code-sample" aria-hidden>
      {children}
      <div className="cursor" />
    </div>
  );
}
export default CodeSample;
