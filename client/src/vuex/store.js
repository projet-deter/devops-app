import Vue from "vue";
import Vuex from "vuex";
import { httpGET, httpPOST } from "../axios/http-common";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    error: "",
    // liste des données
    messages: []
  },
  actions: {
    getMessages: context => {
      httpGET
        .get("messages")
        .then(response => {
          context.state.error = "";
          // création de la liste des messages
          context.commit("createMessages", response.data);
        })
        .catch(error => {
          context.state.error = error;
        });
    },
    postMessage: (context, data) => {
      return new Promise((resolve, reject) => {
        httpPOST
          .post("messages", data)
          .then(() => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  mutations: {
    createMessages: (state, payload) => {
      // ajout de chaque Object message dans la liste messages
      state.messages = payload.map(item => {
        return {
          content: item
        };
      });
    }
  }
});

export default store;
