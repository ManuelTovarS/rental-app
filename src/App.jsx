import React, { useEffect, useContext } from "react";
import RentalsContext from "./context/RentalContext";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import "./App.css";
import { Header, Footer, NavBar } from "./components/index";

export const App = () => {
  const { getInformation } = useContext(RentalsContext);

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <NavBar></NavBar>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};
