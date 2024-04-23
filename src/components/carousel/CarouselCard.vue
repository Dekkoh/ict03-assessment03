<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <div class="carousel-card" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="card-title">{{ title }}</div>
    <div class="card-description">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.carousel-card {
  background-color: black;
  background-size: 80%;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
  height: 400px;
  width: 300px;
  border-radius: 5%;
  box-shadow: 0px 1px 2px white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: 0.3s;
}

.card-title {
  color: white;
  max-width: 50%;
  margin: 16px;
  font-size: large;
}

.card-description {
  color: var(--color-text-secondary);
  max-width: 45%;
  margin: 16px;
  opacity: 0;
  transition: 0.3s;
  font-size: smaller;
}

@media (hover: hover) {
  .carousel-card:hover {
    scale: 1.15;
  }

  .carousel-card:hover .card-description {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .card-description {
    opacity: 1;
  }
}
</style>
