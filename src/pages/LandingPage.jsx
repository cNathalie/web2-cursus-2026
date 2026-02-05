
import JSMascot from "../components/JSMascot.jsx";
import Hero from "../components/Hero.jsx";
import CodeSample from "../components/CodeSample.jsx";

function LandingPage() {
  return (
    <div className="containerLanding">
      <JSMascot />
      <Hero>
        <h2>Leer JavaScript stap voor stap</h2>
        <p>Speels, praktisch en to the point. Je ziet snel resultaat.</p>
        <p>
          Hier begint jouw reis in de wereld van webontwikkeling. Deze cursus
          leidt je door de fundamenten van het bouwen van moderne
          webapplicaties.
        </p>
      </Hero>

      <CodeSample>
        <p>const greet = name =&gt; `Hallo, {"${name}"}!`;</p>
        <p>console.log(greet('student'));</p>
      </CodeSample>
    </div>
  );
}

export default LandingPage;
