import FlexRow from "./FlexRow";
import PageTitle from "./PageTitle";

export default function ChapterHeader({ title, symbol: Icon }) {
  return (
    <FlexRow>
      <PageTitle title={title} />
      {Icon && <Icon />}
    </FlexRow>
  );
}
