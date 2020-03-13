<template>
  <div class="card">
    <div class="card-body">
      <span>{{message.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMessage",
  props: {
    message: Object
  }
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
.card-body {
  display: grid;
}
.card-body > .card-title {
  font-weight: bold;
}
.card-footer {
  display: inline-flex;
}
.card-footer > .left-container,
.card-footer > .right-container {
  width: 50%;
}
.card-footer > .left-container > p {
  margin: 0;
}
.card-footer > .left-container > .is-mine {
  color: blue;
  font-weight: bold;
}
.card-footer > .right-container {
  text-align: end;
}
.card-footer > .right-container > button {
  margin: 0;
}
</style>