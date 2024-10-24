"use client";

import { Children, createContext, useContext, useState } from "react";

const ResrvationContext = createContext();

const initialState = { from: undefined, to: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ResrvationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ResrvationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ResrvationContext);
  if (context === undefined)
    throw new Error("Context was used outside of the provider");
  return context;
}

export { ReservationProvider, useReservation };
