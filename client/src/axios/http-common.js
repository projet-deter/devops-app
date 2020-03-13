import axios from "axios";

export const http = axios.create({
  // FONCTIONNENT
  /* GROUPE 3 */ baseURL: "https://devops.kabaconde.com/"
  
  // NE FONCTIONNENT PAS
  // /* GROUPE 1 */ baseURL: "http://devops.atsn.me/"
  // /* GROUPE 2 */ baseURL: "https://paris-cours.xyz/"
  // /* GROUPE 4 */ baseURL: "https://app-express-link.herokuapp.com/"
  // /* GROUPE 7 */ baseURL: "https://devopsesgi.azurewebsites.net/"
});