import { credentials } from "../connection/credentials";
import axios from "axios";

const config = {
  headers: {
    Authorization: credentials.authorization,
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Credentials": true,
    //   "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    //   "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  },
};

export const getAllData = (setLocations, setRentalResources) => {
  axios
    .get(credentials.url, config)
    .then((res) => {
      console.log("res >>> ", res);
      setLocations(res);
      setRentalResources(res.rentalResources);
    })
};
