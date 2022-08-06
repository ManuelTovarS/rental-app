import React, { createContext, useState } from "react";
import { getAllData } from "../utilities/methods";

const RentalsContext = createContext();

const RentalsProvider = ({ children }) => {
  const [locations, setLocations] = useState();
  const [rentalResources, setRentalResources] = useState();
  const [availability, setAvailability] = useState();
  const [registration, setRegistration] = useState();
  const [payment, setPayment] = useState();

  const getInformation = () => {
    getAllData(setLocations, setRentalResources);
  };

  const data = {
    locations,
    setLocations,
    rentalResources,
    setRegistration,
    availability,
    setAvailability,
    payment,
    setPayment,
    getInformation,
  };

  return (
    <RentalsContext.Provider value={data}>{children}</RentalsContext.Provider>
  );
};

export { RentalsProvider };

export default RentalsContext;
