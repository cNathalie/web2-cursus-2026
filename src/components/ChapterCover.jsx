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
      <p className="mt-3 text-muted">{title}</p>
      {Icon && <Icon {...safeProps} />}
    </div>
  );
}
