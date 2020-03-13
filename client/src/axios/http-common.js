import axios from "axios";

export const httpGET = axios.create({  
  baseURL: "https://paris-cours.xyz/"
});

export const httpPOST = axios.create({
  baseURL: "https://devops.kabaconde.com/"
});