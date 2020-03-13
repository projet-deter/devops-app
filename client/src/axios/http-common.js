import axios from "axios";

export const httpGET = axios.create({  
  baseURL: "https://paris-cours.xyz/"
});

export const httpPOST = axios.create({
  // FONCTIONNENT
  /* GROUPE 3 */ baseURL: "https://devops.kabaconde.com/"
  
  // NE FONCTIONNENT PAS
  // /* GROUPE 1 */ baseURL: "http://devops.atsn.me/"
  // /* GROUPE 4 */ baseURL: "https://app-express-link.herokuapp.com/"
  // /* GROUPE 7 */ baseURL: "https://devopsesgi.azurewebsites.net/"
});