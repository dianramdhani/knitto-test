<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ image.title }}</h5>
      <img
        class="img-fluid mb-2"
        alt="No image uploaded"
        style="max-height: 200px"
        :src="image.image_path"
      />
      <p class="card-text">
        {{ image.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LastImage",
  imageService: null,
  created() {
    this.$store.dispatch("getImage");
  },
  computed: mapState(["image"]),
};
</script>