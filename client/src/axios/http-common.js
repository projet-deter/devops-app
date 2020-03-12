import axios from "axios";

export const http = axios.create({
  baseURL: "https://messages.free.beeceptor.com"
});

// http.interceptors.request.use(
//   config => {
//     let token = store.state.accessToken;
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
