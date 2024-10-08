import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Tickets() {
  return (
    <div>
      <NavBar />
      <h1>Tickets Page</h1>
      <Outlet />
    </div>
  );
}
