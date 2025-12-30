function FlexRow({ children }) {
  return (
    <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
      {children}
    </div>
  );
}

export default FlexRow;
