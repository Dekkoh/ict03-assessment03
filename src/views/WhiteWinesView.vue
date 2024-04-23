<script setup lang="ts">
import CarouselCard from '@/components/carousel/CarouselCard.vue'
</script>

<template>
  <div class="main">
    <div class="title">White Wines</div>
    <div class="carousel">
      <CarouselCard
        title="Chardonnay"
        description="Versatile with flavors ranging from crisp citrus to creamy tropical fruits, pairs well with seafood and creamy dishes."
        image="/src/assets/wine-bottle-04.jpeg"
      ></CarouselCard>
      <CarouselCard
        title="Sauvignon Blanc"
        description="Refreshing and zesty, with citrus and herbal notes, ideal for warm weather and seafood."
        image="/src/assets/wine-bottle-04.jpeg"
      ></CarouselCard>
      <CarouselCard
        title="Riesling"
        description="Aromatic with flavors of green apple and peach, varying from dry to sweet, versatile for pairing with spicy dishes and cheeses."
        image="/src/assets/wine-bottle-04.jpeg"
      ></CarouselCard>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
}

.title {
  color: white;
  font-size: xx-large;
  margin-bottom: 40px;
}

.carousel {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width: 768px) {
  .carousel {
    height: 1400px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
