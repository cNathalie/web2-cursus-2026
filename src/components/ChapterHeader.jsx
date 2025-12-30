import FlexRow from "./FlexRow";
import PageTitle from "./PageTitle";
import "../styles/ChapterHeader.css";

export default function ChapterHeader({ title, symbol: Icon }) {
  return (
    <div className="chapterHeader">
      <FlexRow>
        <PageTitle title={title} />
        {Icon && <Icon />}
      </FlexRow>
    </div>
  );
}
