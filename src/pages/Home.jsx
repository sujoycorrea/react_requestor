import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Home.module.css";

export default function Home() {
  // Home Page logic

  const navigate = useNavigate();

  //Function for button click that detects which button is clicked and does accordingly
  function buttonClicked(e) {
    e.target.innerHTML === "Create Ticket"
      ? navigate("/createTicket")
      : navigate("/tickets");
  }
  return (
    <div>
      <h1>Ticket System</h1>
      <p>This system allows you to create Tickets and view your tickets</p>
      <div className={styles.btnOptions}>
        <Button theOnClick={buttonClicked}>Create Ticket</Button>
        <Button theOnClick={buttonClicked}>My Tickets</Button>
      </div>
    </div>
  );
}
