import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../Context/AuthContext";
export default function Logout() {
  const history = useHistory();
  const { logout, setUser, setCurrentUser } = useAuth();
  logout();
  setUser(null);
  setCurrentUser(null);
  history.push("/");
  return <div></div>;
}
