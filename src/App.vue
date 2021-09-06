<template>
  <div class="container py-5">
    <div class="row gx-5">
      <div class="col">
        <FormImage />
      </div>
      <div class="col">
        <LastImage />
      </div>
    </div>
  </div>
</template>

<script>
import FormImage from "./components/FormImage.vue";
import LastImage from "./components/LastImage.vue";

export default {
  name: "App",
  components: {
    FormImage,
    LastImage,
  },
};
</script>
