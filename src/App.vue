<template>
  <div id="app">
    <SelectLocale />
    <HelloGator />
  </div>
</template>

<script>
import HelloGator from "./components/HelloGator.vue";
import SelectLocale from "./components/SelectLocale.vue";

export default {
  name: "App",
  components: {
    HelloGator,
    SelectLocale,
  },
};
</script>
