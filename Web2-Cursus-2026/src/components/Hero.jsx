import "../styles/Hero.css";

function Hero({ children }) {
  return (
    <div className="hero">
      {" "}
      <div> {children} </div>
    </div>
  );
}
export default Hero;
