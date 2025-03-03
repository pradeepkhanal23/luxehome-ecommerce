// src/context/SupabaseContext.js
import { createContext, useContext } from "react";
import supabase from "../supabase";

const SupabaseContext = createContext();

export function SupabaseProvider({ children }) {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  return useContext(SupabaseContext);
}
