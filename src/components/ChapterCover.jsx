import PageTitle from "./PageTitle";
export default function ChapterCover({
  imgSrc = null,
  title,
  mascot: Icon,
  mascotProps,
}) {
  const safeProps = mascotProps ?? {};
  return (
    <div className="text-center">
      <img
        src={imgSrc}
        style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }}
      />
      <PageTitle title={title} />
      {Icon && <Icon {...safeProps} />}
    </div>
  );
}
