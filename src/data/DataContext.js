import React from "react";

export default React.createContext({
  profile: {},
  isLoggedIn: false,
  items: [],
  totalItems: 0,
  grandTotal: 0,
  cart: [],
  getItems: () => {},
  updateCart: () => {},
  signOut: () => {},
  signIn: () => {},
  setShowAlert: () => {},
  setAlertMessage: () => {},
});
