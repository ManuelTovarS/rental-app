import React, { useContext } from 'react'
import RentalsContext from '../context/RentalContext';

export const Check = () => {
  const { locations } = useContext(RentalsContext);
  console.log("locations >>> ", locations);

  return (
    <div>check</div>
  )
}

