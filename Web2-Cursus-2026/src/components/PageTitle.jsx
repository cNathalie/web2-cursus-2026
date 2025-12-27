import "../styles/PageTitle.css";
export default function PageTitle({ title }) {
  return (
    <div className="page-title-container">
      <h1 className="display-5 mb-3">{title}</h1>
    </div>
  );
}
