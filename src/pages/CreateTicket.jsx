import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import styles from "./CreateTicket.module.css";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification";
import { useTicketcontext } from "../contexts/TicketContext";
import { createContactApi, createTicketApi, getUserDetailsApi } from "../utils";

export default function CreateTicket() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notiSuccess, setNotiSuccess] = useState(true);
  const [notiMessage, setNotiMessage] = useState("");

  const { dispatch } = useTicketcontext();

  //In File function
  async function recurringTicketCreation(
    subject,
    description,
    contactId,
    priority
  ) {
    const createTicketResponse1 = await createTicketApi(
      subject,
      description,
      contactId,
      priority
    );

    if (createTicketResponse1.success) {
      setShowNotification(true);
      setNotiSuccess(true);
      setNotiMessage("Ticket Created");
    } else {
      setShowNotification(true);
      setNotiSuccess(false);
      setNotiMessage("Ticket not created");
    }
  }

  async function createBtnClicked(e) {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(subject);
    // console.log(description);

    const { status, theData } = await createContactApi(email, name);
    // console.log(data);

    switch (status) {
      case 200:
        console.log("user created");

        dispatch({
          type: "saveContactDetails",
          payload: { email: email, customerId: theData.data._id },
        });

        await recurringTicketCreation(
          subject,
          description,
          theData.data._id,
          "low"
        );

        break;

      case 404:
        console.log(email);
        const { success, data } = await getUserDetailsApi(email);
        dispatch({
          type: "saveContactDetails",
          payload: { email: email, customerId: data._id },
        });

        await recurringTicketCreation(subject, description, data._id, "low");

        break;

      case 400:
        console.log(data.data.message);
        setShowNotification(true);
        setNotiSuccess(success);
        setNotiMessage(data);
        break;

      default:
        break;
    }

    // if (data === "A user with this email id already exists") {
    // }
    // if (success) {
    //   dispatch();
    //   setShowNotification(true);
    //   setNotiSuccess(success);
    //   setNotiMessage("Ticket created");
    // } else {
    //   setShowNotification(true);
    //   setNotiSuccess(success);
    //   setNotiMessage(data);
    // }
  }

  return (
    <div>
      <NavBar />

      <h1>Create Ticket</h1>
      <p>You can create your ticket here</p>

      {showNotification && (
        <Notification success={notiSuccess} message={notiMessage} />
      )}

      <div className={styles.makeRow}>
        <Input
          theLable={"Name"}
          theType={"text"}
          thePlaceHolder={"Your Full Name"}
          theValue={name}
          theOnChange={setName}
        />

        <Input
          theLable={"Email"}
          theType={"text"}
          thePlaceHolder={"Your Email"}
          theValue={email}
          theOnChange={setEmail}
        />
      </div>
      <div className={styles.makeRow}>
        <Input
          theLable={"Subject"}
          theType={"text"}
          thePlaceHolder={"Subject of request"}
          theValue={subject}
          theOnChange={setSubject}
        />

        <TextArea
          theLabel={"Description"}
          theValue={description}
          theOnChange={setDescription}
        />

        <Button theOnClick={createBtnClicked}>Create</Button>
      </div>
      {/* <div>
        <Button theOnClick={createBtnClicked}>Create</Button>
      </div> */}
    </div>
  );
}
