import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import AppRoute from "./AppRoute";
/**
 * In process
 */
export default function PrivateRoute({
  component: Component,
  layout: Layout,
  ...rest
}) {
  const {
    auth: { isAuthenticated },
  } = useContext(authContext);
  return isAuthenticated ? (
    <AppRoute component={Component} layout={Layout} {...rest} />
  ) : (
    <Redirect to={"/login"} />
  );
}
