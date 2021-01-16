import React, { createContext, useState } from "react";

const initialAuthState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: JSON.parse(localStorage.getItem("user")) ? true : false,
};
export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthState);

  const setAuthData = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setAuth({ ...data, isAuthenticated: true });
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth({ token: "", user: null, isAuthenticated: false });
  };

  return (
    <authContext.Provider value={{ auth, setAuthData, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
