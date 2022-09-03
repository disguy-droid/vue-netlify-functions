<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { Images } from "./interfaces/Images";
import { animate } from "motion";

const images = ref<Images[]>([]);

const load = () => {
  const imgs = document.querySelectorAll(".animate-img");
  const imgContainers = document.querySelectorAll(".img-container");

  imgContainers.forEach((container) => {
    container.addEventListener("mouseenter", () => {
      animate(container, { scale: 0.9 }, { easing: "linear", duration: 0.2 });
    });

    container.addEventListener("mouseleave", () => {
      animate(container, { scale: 1 }, { easing: "linear", duration: 0.3 });
    });
  });

  imgs.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      animate(img, { scale: 1.4 }, { easing: "linear", duration: 0.2 });
    });

    img.addEventListener("mouseleave", () => {
      animate(img, { scale: 1 }, { easing: "linear", duration: 0.5 });
    });
  });
};

onMounted(async () => {
  try {
    let response = await axios.get("/.netlify/functions/fetch-image");
    images.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="columns-4 p-4 mt-24">
      <div v-for="image in images" :key="image.id" class="">
        <div class="img-container overflow-hidden">
          <img
            @load="load"
            :src="image.urls.small"
            alt=""
            class="animate-img mb-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
