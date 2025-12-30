import { Container, Accordion } from "react-bootstrap";
import "../styles/IntroAccordion.css";
import PageTitle from "./PageTitle";
export default function IntroAccordion() {
  return (
    <Container className="py-4">
      <PageTitle title="Over de cursus" />
      <p className="lead mb-4">Een duik in de wondere wereld van het web!</p>

      <Accordion
        defaultActiveKey="0"
        alwaysOpen
        className="accordion-fixed text-start"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Welkom!</Accordion.Header>
          <Accordion.Body>
            <p className="mb-3">
              Fijn dat je erbij bent! In deze cursus <strong>Web 2</strong>{" "}
              ontdekken we stap voor stap hoe het internet werkt, wat er achter
              de schermen van je browser gebeurt en hoe je zelf dingen kunt
              laten bewegen, reageren en veranderen op een webpagina. Alles op
              een rustige, haalbare manier — ook als je nog nooit één regel code
              hebt geschreven.
            </p>
            <p className="mb-0">
              De cursus bevat <strong>interactieve oefeningen</strong>, die je
              rechtstreeks in de console van je browser kunt uitvoeren. En nog
              leuker: <em>de cursus is zelf een webapp, gebouwd in React</em>.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hoofdstukken</Accordion.Header>
          <Accordion.Body>
            <ul className="mb-3 text-start">
              <li>
                <strong>Het internet:</strong> hoe clients, servers en HTTP
                samenwerken.
              </li>
              <li>
                <strong>Browser developer tools:</strong> je ingebouwde
                gereedschapskoffer.
              </li>
              <li><strong>HTTPS:</strong> beveiliging van je webverkeer.</li>
              <li>
                <strong>JavaScript basis:</strong> objecten, events, timers, en{" "}
                <em>advanced</em> DOM‑manipulatie.
              </li>
              <li>
                <strong>DOM tree:</strong> de structuur van je webpagina als
                “boom”.
              </li>
              <li>
                <strong>Events:</strong> hoe je kunt reageren op gebruikersacties.
              </li>
              
              <li>
                <strong>CSS manipulatie met JavaScript:</strong> dynamisch
                stijlen en veranderen.
              </li>
              <li><strong>Forms:</strong> gebruikersinvoer verwerken.</li>
              <li><strong>Timers:</strong> tijdgebonden acties uitvoeren.</li>
              <li><strong>Advanced DOM:</strong> geavanceerde manipulatie van de DOM.</li>
              <li><strong>Objecten:</strong> werken met objecten en hun eigenschappen.</li>
              <li>
                <strong>Fetch API:</strong> data ophalen van het internet.
              </li>
              <li>
                <strong>JSON introductie:</strong> eenvoudige uitwisseling van
                gegevens.
              </li>
              <li>
                <strong>Mini intro TypeScript:</strong> eens proeven van typed
                code.
              </li>
            </ul>
            <p className="mb-0">
              Je leert telkens <strong>praktisch</strong> werken met voorbeelden
              en kleine experimenten.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Werkwijze & verwachtingen</Accordion.Header>
          <Accordion.Body>
            <p className="mb-3">
              We starten eenvoudig en bouwen geleidelijk op. Je hoeft geen
              programmeerkennis te hebben: nieuwsgierigheid en zin om te
              proberen volstaan.
            </p>
            <p className="mb-3">
              Neem gerust een tas koffie of thee, open je browserconsole, en
              laat ons samen ontdekken hoe je van een webpagina iets maakt dat
              leeft, beweegt en reageert.
            </p>
            <p className="mb-3">
              <strong>Vergeet niet: fouten maken mag!</strong> Het is een
              essentieel onderdeel van leren. Dus als je vastloopt, aarzel niet
              om hulp te vragen.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Evaluatie</Accordion.Header>
          <Accordion.Body>
            <p className="mb-3">
              Gedurende dit semester werk je de helft van de tijd aan een eigen
              project. Hoe je dit invult, mag je helemaal zelf kiezen. De enige
              eis is dat je iets bouwt dat gebruikmaakt van de concepten die we
              in de cursus behandelen. Belangrijk: er wordt niet verwacht dat je
              gebruik maakt van React of andere frameworks/libraries. De
              behandelde technologieën uit de cursus (HTML, CSS, JavaScript,
              DOM-manipulatie, Fetch API, etc.) zijn de focus.
            </p>
            <p className="mb-3">
              <strong>Beoordeling:</strong> Je project wordt beoordeeld op basis
              van de functionaliteit, de toepassing van de geleerde concepten en
              de algehele presentatie.
            </p>
            <p className="mb-3">
              <strong>Eindpresentatie:</strong> Aan het einde van het semester
              presenteer je jouw project aan de docent. Dit is een kans om je
              werk te laten zien, en aan te tonen dat je de behandelde concepten
              begrijpt en kunt toepassen.
            </p>
            <p>
              Het gebruik van AI tools zoals ChatGPT is toegestaan voor
              brainstormen en het genereren van ideeën. Echter, de uiteindelijke
              code en implementatie moeten jouw eigen werk zijn. Plagiaat wordt
              streng bestraft. Wie zijn eigen code niet kan uitleggen tijdens de
              eindpresentatie riskeert een onvoldoende voor het project en dus
              voor de hele cursus.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Artificiële Intelligentie en Programmeren
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Het gebruik van AI tools zoals ChatGPT is toegestaan voor
              brainstormen en het genereren van ideeën. Echter, de uiteindelijke
              code en implementatie moeten jouw eigen werk zijn. Plagiaat wordt
              streng bestraft.{" "}
              <strong>
                {" "}
                Wie zijn eigen code niet kan uitleggen tijdens de
                eindpresentatie riskeert een onvoldoende voor het project en dus
                voor de hele cursus.
              </strong>
            </p>
            <p>
              Hoewel deze technologieën indrukwekkend en handig kunnen zijn, wil
              ik toch een belangrijke kanttekening meegeven: Het doel van
              programmeeroefeningen is niet alleen om tot een werkende oplossing
              te komen, maar vooral om zelf te leren denken als een programmeur.
              Probleemoplossend denken, logisch redeneren en het leren omgaan
              met fouten zijn essentiële vaardigheden die je enkel ontwikkelt
              door zelf actief aan de slag te gaan. Wanneer je AI gebruikt om
              code voor je te laten schrijven, loop je het risico deze
              vaardigheden niet of onvoldoende te ontwikkelen. Op korte termijn
              lijkt het misschien efficiënt, maar op lange termijn belemmert het
              je leerproces en je zelfstandigheid als programmeur.
              <strong>
                {" "}
                Wil je je echt onderscheiden als programmeur?
              </strong>{" "}
              Dan is het belangrijk dat je de fundamenten beheerst. Gebruik AI
              gerust als hulplijn om uitleg te krijgen over concepten of
              foutmeldingen, maar laat het niet je denkwerk overnemen.
              <strong> Prompt-prutsers zijn er al meer dan genoeg.</strong>{" "}
              Kortom: gebruik je hoofd, niet alleen een tool. Zo bouw je een
              stevige basis op waar je later écht iets aan hebt.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Laatste woordje</Accordion.Header>
          <Accordion.Body>
            <p className="mb-0">Veel succes en vooral: veel plezier!</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
