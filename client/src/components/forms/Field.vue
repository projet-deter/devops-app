<template>
  <input
    v-if="this.regularFieldTypes.includes(type)"
    :type="type"
    :name="name"
    @input="updateFieldData"
    :value="this.initialValues.hasOwnProperty(name) ? this.initialValues[name] : ''"
    v-bind="$attrs"
    :class="'field field-' + type"
  />

  <input
    v-else-if="type == 'checkbox'"
    :type="type"
    :value="value"
    :name="name"
    @input="updateFieldData"
    :checked="this.initialValues.hasOwnProperty(name) && this.initialValues[name].includes(value)"
    v-bind="$attrs"
    :class="'field field-' + type"
  />

  <input
    v-else-if="type == 'radio'"
    :type="type"
    :value="value"
    :name="name"
    @input="updateFieldData"
    :checked="(this.initialValues.hasOwnProperty(name) && this.initialValues[name] == value)"
    v-bind="$attrs"
    :class="'field field-' + type"
  />

  <select
    v-else-if="type == 'select'"
    :name="name"
    @input="updateFieldData"
    v-bind="$attrs"
    :value="value"
  >
    <slot></slot>
  </select>

  <textarea
    v-else-if="type == 'textarea'"
    :name="name"
    @input="updateFieldData"
    :class="'field field-' + type"
  ></textarea>
</template>

<script>
export default {
  name: "Field",
  props: {
    name: String,
    type: {
      default: "input",
      type: String
    },
    label: String,
    value: String
  },
  inject: ["initialValues", "updateFields"],
  data: () => ({
    regularFieldTypes: [
      "text",
      "number",
      "button",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "hidden",
      "image",
      "month",
      "pasword",
      "range",
      "reset",
      "search",
      "submit",
      "tel",
      "time",
      "url",
      "week",
      "password",
    ],
    fieldTypes: ["select", "textarea", "checkbox", "radio"]
  }),
  mounted() {
    this.fieldTypes = [...this.fieldTypes, ...this.regularFieldTypes];
    if (!this.fieldTypes.includes(this.type)) {
      throw new Error("[Field Component] |" + this.type + " is not defined");
    }
  },
  methods: {
    updateFieldData: function(event) {
      this.$emit("input", event.target.value);
      this.updateFields(this.type, this.name, event.target.value);
    }
  }
};
</script>

<style></style>