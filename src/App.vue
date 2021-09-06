<template>
  <div class="container py-5">
    <div class="row gx-5">
      <div class="col">
        <FormImage />
      </div>
      <div class="col">
        <div class="card">
          <!-- <img src="..." class="card-img-top" alt="No image uploaded" /> -->
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormImage from "./components/FormImage.vue";

export default {
  name: "App",
  components: {
    FormImage,
  },
};
</script>
