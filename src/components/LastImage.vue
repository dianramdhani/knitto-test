<template>
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="No image uploaded" /> -->
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import ImageService from "../services/ImageService";

export default {
  name: "LastImage",
  data() {
    return {
      title: "",
      image: null,
      description: "",
    };
  },
  imageService: null,
  created() {
    this.imageService = new ImageService();
    this.imageService.getImage().then((res) => console.log(res));
  },
};
</script>