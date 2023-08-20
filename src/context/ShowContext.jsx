import React, { createContext, useState } from "react";

export const ShowContext = React.createContext("");

const ShowProvider = ({ children }) => {
    const [show, setShow] = useState("-translate-x-80");
    return (
      <ShowContext.Provider value={[show, setShow]}>
        {children}
      </ShowContext.Provider>
    );
  };
  
  export default ShowProvider;