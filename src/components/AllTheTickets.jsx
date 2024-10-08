import { useNavigate, useParams } from "react-router-dom";
import GetEmail from "./GetEmail";
import ListComp from "./ListComp";

export default function AllTheTickets() {
  const { emailId } = useParams();
  const navigate = useNavigate();

  function ticketClicked(ticketId) {
    console.log(ticketId);
    navigate(`/tickets/ticketDetails/${ticketId}`);
  }
  return (
    <div>
      <h2>All The Tickets pages</h2>

      <GetEmail />

      <h3> All the tickets for {emailId}</h3>

      <ListComp
        theTitle={"Ipad Issue"}
        theLabel1={"ID:"}
        theContent1={"23"}
        theLabel2={"Email:"}
        theContent2={"jake@jake.com"}
        theLable3={"Date"}
        theContent3={"12/01/2024"}
        theOnClick={ticketClicked}
        theId={23}
      />
    </div>
  );
}
