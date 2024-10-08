import { createContext, useContext, useReducer } from "react";
import { createContactApi } from "../utils";

const TicketProvider = createContext();

const initialState = {
  email: "",
  customerId: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "getEmail":
      return { ...state, email: action.payload };

    case "saveContactDetails":
      console.log("the payload is", action.payload);
      return {
        ...state,
        email: action.payload.email,
        customerId: action.payload.customerId,
      };
      break;

    default:
      break;
  }
}

function TicketContext({ children }) {
  const [{ email, customerId }, dispatch] = useReducer(reducer, initialState);

  return (
    <TicketProvider.Provider
      value={{
        email,
        dispatch,
        customerId,
      }}
    >
      {children}
    </TicketProvider.Provider>
  );
}

function useTicketcontext() {
  const context = useContext(TicketProvider);

  if (context === undefined) console.log("Context was out of scope");

  return context;
}

export { TicketContext, useTicketcontext };
