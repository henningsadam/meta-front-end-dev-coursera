function PromoMessage(props) {
  return (
    // some details
    <>
      {/* <h1>{headlineMessage}</h1>
      <h2>{bodyMessage}</h2>
      <hr /> */}
      <h1>{props.heading}</h1>
      <h2>{props.message}</h2>
    </>
  );
}

export default PromoMessage;