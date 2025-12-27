import FlexRow from "./FlexRow";
import PageTitle from "./PageTitle";

export default function ChapterHeader({ title, symbol }) {
  return (
    <FlexRow>
      <PageTitle title={title} />
      {symbol}
    </FlexRow>
  );
}
