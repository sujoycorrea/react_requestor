import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import Tickets from "./pages/Tickets";
import TicketDetails from "./pages/TicketDetails";
import PageNotFound from "./pages/PageNotFound";
import { TicketContext } from "./contexts/TicketContext";
import GetEmail from "./components/GetEmail";
import AllTheTickets from "./components/AllTheTickets";

function App() {
  return (
    <TicketContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createTicket" element={<CreateTicket />} />
          <Route path="tickets" element={<Tickets />}>
            <Route index element={<GetEmail />} />
            <Route path=":emailId" element={<AllTheTickets />} />
            <Route path="ticketDetails/:ticketId" element={<TicketDetails />} />
          </Route>
          {/* <Route path="ticketDetails" element={<TicketDetails />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </TicketContext>
  );
}

export default App;
