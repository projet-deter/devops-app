<template>
  <form>
    <!-- Formik -->
    <Formik @on-submit="handleNewMessage" submit-label="Envoyer" :initial-values="messageForm">
      <!-- alert-list -->
      <div class="alert-list">
        <div class="alert" v-if="$v.$anyDirty && $v.messageForm.pseudo.$error">
          <span v-if="!$v.messageForm.pseudo.required">Le pseudo est obligatoire</span>
        </div>
        <div class="alert" v-if="$v.$anyDirty && $v.messageForm.content.$error">
          <span v-if="!$v.messageForm.content.required">Le message est obligatoire</span>
        </div>
      </div>
      <!-- form-group | pseudo -->
      <div class="form-group">
        <label for="pseudo">Pseudo</label>
        <Field
          type="text"
          name="pseudo"
          class="form-control"
          placeholder="Aria Stark"
          v-model.trim="$v.messageForm.pseudo.$model"
        />
      </div>
      <!-- form-group | content -->
      <div class="form-group">
        <label for="content">Message</label>
        <Field
          type="text"
          name="content"
          class="form-control"
          placeholder="Votre message..."
          v-model.trim="$v.messageForm.content.$model"
        />
      </div>
      <!-- button | submit -->
      <template v-slot:submit-button>
        <div class="modal-footer">
          <button class="btn btn-outline-primary" v-on:click.prevent="resetForm">Effacer</button>
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </div>
      </template>
    </Formik>
  </form>
</template>

<script>
import Formik from "./Formik.vue";
import Field from "./Field.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "ModalForm",
  components: {
    Formik,
    Field
  },
  data: () => ({
    // données du formulaire messageForm
    messageForm: {
      pseudo: "",
      content: ""
    }
  }),
  methods: {
    resetForm: function() {
      // vide le formulaire
      this.messageForm.pseudo = "";
      this.messageForm.content = "";
      this.$v.$reset();
    },
    handleNewMessage: function() {
      const data = {
        pseudo: this.messageForm.pseudo,
        content: this.messageForm.content,
      };
    // envoie pour CRÉATION du message
    this.$store.dispatch("postMessage", data).then(() => {
        // on reset le formulaire
        this.resetForm();
    });
    }
  },
  validations: {
    messageForm: {
      pseudo: { required },
      content: { required }
    }
  }
};
</script>

<style>
form {
  margin: auto;
  width: 60%;
}

.form-group {
  display: flex;
  align-items: center;
}

.form-group > label {
  margin: 0 9px 0 0;
  min-width: 75px;
}

.alert-list {
  margin: 10px 0 15px 0;
  background-color: #ef3043;
  border-radius: 0.25rem;
}

.alert-list > .alert {
  margin: 0;
  padding: 2px 10px;
}

.alert-list > .alert > span {
  color: white;
  font-weight: 500;
}
</style>