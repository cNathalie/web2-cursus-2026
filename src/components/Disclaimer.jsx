export default function Disclaimer() {
  return (
    <span
      id="disclaimer"
      style={{
        color: "grey",
        fontStyle: "italic",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        maxWidth: "50%",
        textAlign: "center",
      }}
    >
      © Nathalie Courteaux {new Date().getFullYear()} <br />
      Deze cursus mag niet worden vermenigvuldigd, verspreid of gebruikt voor
      commerciële of winstgevende doeleinden. Het gebruik, geheel of
      gedeeltelijk, door andere leerkrachten of derden is uitsluitend toegestaan
      na voorafgaande, schriftelijke en uitdrukkelijke toestemming van de
      auteur.
    </span>
  );
}
