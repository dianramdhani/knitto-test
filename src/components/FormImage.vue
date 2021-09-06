<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Form Image</h5>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            name="title"
            id="title"
            aria-describedby="emailHelp"
            required
            v-model="title"
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Image</label>
          <div class="mb-1" v-if="image">
            <img
              class="img-fluid"
              style="max-height: 150px"
              alt="Uploaded Image"
              :src="imageUrl"
            />
          </div>
          <input
            type="file"
            class="form-control"
            name="image"
            id="image"
            required
            @change="onImageChange"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            class="form-control"
            name="description"
            id="description"
            rows="5"
            required
            v-model="description"
          ></textarea>
        </div>
        <div class="alert alert-primary" role="alert" v-if="message">
          {{ message }}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import ImageService from "../services/ImageService";

export default {
  name: "FormImage",
  data() {
    return {
      title: "",
      image: null,
      description: "",
      message: "",
    };
  },
  computed: {
    imageUrl() {
      return this.image ? URL.createObjectURL(this.image) : "";
    },
  },
  imageService: null,
  created() {
    this.imageService = new ImageService();
  },
  methods: {
    async onSubmit() {
      try {
        const res = await this.imageService.postImage({
          title: this.title,
          image: this.image,
          description: this.description,
        });
        this.title = "";
        this.image = null;
        this.description = "";
        this.message = res.data.message;
        this.$store.dispatch("getImage");
        setTimeout(() => {
          this.message = "";
        }, 3000);
      } catch (error) {}
    },
    onImageChange(event) {
      this.image = event.target.files[0];
    },
  },
};
</script>