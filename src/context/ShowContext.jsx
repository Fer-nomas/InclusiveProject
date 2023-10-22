import React, { createContext, useState } from "react";

export const ShowContext = React.createContext("-translate-x-18000");

const ShowProvider = ({ children }) => {
    const [show, setShow] = useState("-translate-x-18000");
    return (
      <ShowContext.Provider value={[show, setShow]}>
        {children}
      </ShowContext.Provider>
    );
  };
  
  export default ShowProvider;