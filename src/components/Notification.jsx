export default function Notification({ success, message }) {
  const stylesOptions = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: success ? "green" : "red",
    width: "300px",
    margin: " 10px 0 10px 0",
  };

  return (
    <div>
      <div style={stylesOptions}>{message}</div>
    </div>
  );
}
