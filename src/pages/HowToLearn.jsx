import PageTitle from "../components/PageTitle.jsx";
import Card from "react-bootstrap/Card";
import FlexRow from "../components/FlexRow.jsx";

function HowToLearn() {
  return (
    <div>
      <PageTitle title="Hoe te verwerken" />
      <p>
        Alle leerstof in deze cursus is voorzien van een symbool dat aangeeft
        hoe belangrijk deze is.
      </p>
      <FlexRow>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="/images/need-to-know.png"
            style={{ width: "50%", alignSelf: "center" }}
          />
          <Card.Body>
            <Card.Title>Need to know</Card.Title>
            <Card.Text>
              Leerstof die je absoluut moet kennen / kunnen om verder te kunnen
              in de cursus en te slagen voor de eindtermen.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="/images/nice-to-know.png"
            style={{ width: "50%", alignSelf: "center" }}
          />
          <Card.Body>
            <Card.Title>Nice to know</Card.Title>
            <Card.Text>
              Leerstof die interessant is en je begrip van de materie kan
              verdiepen, maar niet essentieel is om verder te kunnen in de
              cursus of te slagen voor de eindtermen.
            </Card.Text>
          </Card.Body>
        </Card>
      </FlexRow>
      <br />
      <p>We maken gebruik van Visual Studio Code, je kan deze downloaden via <a href="https://www.academicsoftware.eu/login">academic software</a>.</p>
    </div>
  );
}
export default HowToLearn;
