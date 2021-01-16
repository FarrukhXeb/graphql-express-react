import React, { createContext, useEffect, useState } from "react";
import FullScreenLoader from "../Shared/FullscreenLoader";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && token) setAuth({ ...auth, data: { user, token } });
      setAuth({ ...auth, loading: false });
    };
    checkAuth();
  }, [auth]);

  const setAuthData = (data) => {
    setAuth(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user);
  };

  const logOut = () => setAuth({ ...auth, data: null });

  const { loading } = auth;

  if (loading) return <FullScreenLoader />;

  return (
    <authContext.Provider value={{ auth, setAuthData, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
