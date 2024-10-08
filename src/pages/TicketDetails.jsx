import { useParams } from "react-router-dom";
import DetailsComp from "../components/DetailsComp";
import { useEffect, useState } from "react";
import { getTicketDetailsApi } from "../utils";
import { useTicketcontext } from "../contexts/TicketContext";

export default function TicketDetails() {
  const { ticketId } = useParams();
  const [theTitle, setTheTitle] = useState("");
  const [theEmail, setTheEmail] = useState("");
  const [description, setTheDescription] = useState("");

  const { email } = useTicketcontext();

  useEffect(() => {
    async function triggerFunc() {
      const { success, data } = await getTicketDetailsApi(ticketId);
      console.log(data);

      setTheTitle(data.subject);
      setTheEmail(email);
      setTheDescription(data.description);
    }

    triggerFunc();
  }, []);

  return (
    <div>
      <h1>Ticket Details for Id {ticketId}</h1>

      <DetailsComp
        theTitle={theTitle}
        theEmail={theEmail}
        theDescription={description}
      />
    </div>
  );
}
