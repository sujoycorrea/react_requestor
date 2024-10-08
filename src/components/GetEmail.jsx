import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import ListComp from "./ListComp";
import { useTicketcontext } from "../contexts/TicketContext";
import { useLocation, useNavigate } from "react-router-dom";
import { getTicketsApi, getUserDetailsApi } from "../utils";
import Notification from "./Notification";

export default function GetEmail() {
  const { email, customerId, dispatch } = useTicketcontext();
  const [theEmail, setTheEmail] = useState(email);
  const [showNotification, setShowNotification] = useState(false);
  const [notiSuccess, setNotiSuccess] = useState(false);
  const [notiMessage, setNotiMessage] = useState("");
  const [theTickets, setTheTickets] = useState([]);

  const navigate = useNavigate();
  let location = useLocation();

  async function submitBtnClicked(e) {
    e.preventDefault();
    console.log(email);

    // dispatch({ type: "getEmail", payload: email });
    // navigate(`/tickets/${email}`);
    try {
      const theData = await getUserDetailsApi(theEmail);

      if (theData.data === null) {
        setNotiSuccess(false);
        setNotiMessage("This email does not exist");
        setShowNotification(true);
      }

      console.log(theData);

      const { success, data } = await getTicketsApi(theData.data._id);

      if (success && data.length > 0) {
        dispatch({
          type: "saveContactDetails",
          payload: { email: theEmail, customerId: theData.data._id },
        });
        setNotiSuccess(true);
        setNotiMessage("Please find tickets below");
        setShowNotification(true);
      } else {
        setNotiSuccess(false);
        setNotiMessage("No Tickets in this email");
        setShowNotification(true);
      }

      console.log(data);

      setTheTickets(data);
    } catch (error) {
      console.log("FAIL");
      console.log(error);
    }
  }

  async function listClick(ticketId) {
    console.log("list clicked");
    console.log(`The ticket id is ${ticketId}`);
    navigate(`/tickets/ticketDetails/${ticketId}`);
  }

  return (
    <div>
      {showNotification && (
        <Notification success={notiSuccess} message={notiMessage} />
      )}

      <h3>Using your email ID we'll search for any tickets</h3>
      <Input
        theLable={"Email"}
        thePlaceHolder={"Your email id"}
        theType={"text"}
        theValue={theEmail}
        theOnChange={setTheEmail}
      />
      <Button theOnClick={submitBtnClicked}>Submit</Button>

      {theTickets.map((i) => (
        <ListComp
          theTitle={i.subject}
          theLabel1={"Ticket Id"}
          theContent1={i._id}
          theLabel2={"Email:"}
          theContent2={theEmail}
          theLable3={"Priority:"}
          theContent3={i.priority}
          thekey={i._id}
          theId={i._id}
          theOnClick={listClick}
        />
      ))}
    </div>
  );
}
