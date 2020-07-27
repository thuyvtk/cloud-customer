import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

function Global({ children }) {
  // const [auth, setAuth] = useState("a");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState("");
  const aaa = "a";
  return (
    <GlobalContext.Provider
      value={{
        auth: aaa,
        // setAuth,
        user,
        setUser,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Global;
