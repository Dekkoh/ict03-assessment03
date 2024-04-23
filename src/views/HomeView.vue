<template>
  <main>
    <div class="banner-01">
      <h1>The finest selection of wines</h1>
      <h4>From the best sommeliers to the comfort of your home</h4>
    </div>
    <div class="banner-logo">
      <h1>Enjoy every moment</h1>
    </div>
  </main>
</template>

<style scoped>
.banner-01 {
  min-height: 100vh;
  background-image: url('/src/assets/wine-bottle-02.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16%;
}

.banner-01 h1 {
  max-width: 40%;
  color: var(--color-text-primary);
}

.banner-01 h4 {
  max-width: 30%;
  color: var(--color-text-secondary);
}

.banner-logo {
  min-height: 100vh;
  background-image: url('/src/assets/premium-wines-logo.svg');
  background-size: 30%;
  background-position: right;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 20%;
}

.banner-logo h1 {
  max-width: 50%;
  text-align: left;
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .banner-01 h1 {
    margin-top: -160px;
    max-width: 80%;
  }

  .banner-01 h4 {
    max-width: 80%;
  }

  .banner-logo {
    flex-direction: column;
    background-size: 50%;
    background-position: center;
    align-items: center;
  }

  .banner-logo h1 {
    max-width: 80%;
    text-align: center;
    margin-top: 300px;
  }
}
</style>
