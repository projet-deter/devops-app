import Vue from "vue";
import Vuex from "vuex";
import { http } from "../axios/http-common";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    error: "",
    // liste des données
    messages: [],
  },
  actions: {
    getMessages: context => {
      http
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
        http
          .post("messages", data)
          .then(response => {
            // ajout du nouveau message dans la liste messages
            context.commit("addMessage", response.data);
            resolve();
          })
          .catch(error => {
            context.state.error = error;
            reject();
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
    },
    addMessage: (state, payload) => {
      // ajout du nouvel Object message dans la liste messages
      state.messages.push({
        content: payload
      });
    }
  }
});

export default store;
