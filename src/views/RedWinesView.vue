<script setup lang="ts">
import CarouselCard from '@/components/carousel/CarouselCard.vue'
</script>

<template>
  <div class="main">
    <div class="title">Red Wines</div>
    <div class="carousel">
      <CarouselCard
        title="Cabernet Sauvignon"
        description="Full-bodied with flavors of black currant, plum, and firm tannins. Pairs well with steak and aged cheeses."
        image="/src/assets/wine-bottle-04.jpeg"
        id="foo"
      ></CarouselCard>
      <CarouselCard
        title="Merlot"
        description="Smooth and approachable with flavors of ripe berries and soft tannins. Goes well with roasted poultry and pasta dishes."
        image="/src/assets/wine-bottle-04.jpeg"
      ></CarouselCard>
      <CarouselCard
        title="Pinot Noir"
        description="Elegant and versatile, with flavors of red berries and a silky texture. Matches with salmon, duck, and mushroom-based dishes."
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
