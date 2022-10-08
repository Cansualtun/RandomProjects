import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=29a080980b034e8c18685f697014f77c&format=json";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [artists, setArtists] = useState([]);
  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        artists,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
