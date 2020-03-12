<template>
  <div class="home-body">
    <h1>Nouveau message</h1>
    <FormMessage />

    <h1>Liste des messages</h1>
    <p v-if="!$store.state.messages.length">Pas de message</p>
    <div class="messages-list" v-if="$store.state.messages.length">
      <CardMessage v-for="message in $store.state.messages" v-bind:key="message.id" v-bind:message="message" />
    </div>
  </div>
</template>

<script>
import CardMessage from "../cards/CardMessage.vue";
import FormMessage from "../forms/FormMessage.vue";

export default {
  name: "HomePage",
  components: {
    FormMessage,
    CardMessage
  },
  data: () => ({
    messageActif: {}
  }),
  created() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages: function() {
      // récupération de la liste des messages
      this.$store.dispatch("getMessages");
    }
  }
};
</script>

<style>
.home-body {
  display: grid;
  margin: auto;
  width: 80%;
}
button {
  margin: 10px 0;
  width: fit-content;
  justify-self: right
}
</style>