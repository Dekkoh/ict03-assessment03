<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

let show = ref(false)

function toggle() {
  show.value = !show.value
}

const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    show.value = false
  }
)
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/" class="logo">
        <img alt="Winery Logo" src="@/assets/wine-glass-logo.svg" class="logo-image" />
      </RouterLink>
      <div class="divider"></div>
      <nav class="navigation">
        <RouterLink to="/red-wines">Red Wines</RouterLink>
        <RouterLink to="/white-wines">White Wines</RouterLink>
        <div class="nav-dropdown-desktop">
          <a v-on:click="toggle()">Accessories</a>
          <Transition name="dropdown-transition">
            <div class="dropdown-content" v-show="show">
              <RouterLink to="/coolers">Coolers</RouterLink>
              <RouterLink to="/openers">Openers</RouterLink>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
    <div class="wrapper-mobile">
      <nav class="navigation">
        <img
          v-on:click="toggle()"
          alt="Menu Mobile"
          src="@/assets/menu-white.png"
          class="menu-mobile"
        />
        <div>
          <Transition name="dropdown-transition">
            <div class="dropdown-mobile" v-show="show">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/red-wines">Red Wines</RouterLink>
              <RouterLink to="/white-wines">White Wines</RouterLink>
              <RouterLink to="/coolers">Coolers</RouterLink>
              <RouterLink to="/openers">Openers</RouterLink>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
    <RouterLink to="/checkout" class="cart">
      <img alt="Cart icon" src="@/assets/shopping-cart.png" class="cart-icon" />
    </RouterLink>
  </header>

  <RouterView class="main" />
  <div class="footer">
    Copyright © 2024 | Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
  </div>
</template>

<style scoped>
.main {
  margin-top: 56px;
}

header {
  top: 0;
  position: fixed;
  width: 100%;
  background-color: rgba(22, 22, 23, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo {
  width: 3rem;
  height: 3rem;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
}

.logo-image {
  width: 32px;
  height: 32px;
}

.divider {
  width: 1px;
  height: 2rem;
  background-color: var(--color-text-secondary);
}

.navigation {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  font-size: 1em;
  text-align: center;
}

/* .navigation a.router-link-exact-active {
  color: var(--color-text);
} */

/* .navigation a.router-link-exact-active:hover {
  background-color: transparent;
} */

.navigation a {
  display: inline-block;
  padding: 1rem 1rem;
}

.dropdown-content {
  position: absolute;
  background-color: rgba(22, 22, 23, 0.9);
  min-width: 138px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.dropdown-transition-enter-active,
.dropdown-transition-leave-active {
  transition: all 0.3s;
  max-height: auto;
}

.dropdown-transition-enter,
.dropdown-transition-leave-to {
  opacity: 0;
  max-height: 0px;
}

.wrapper-mobile {
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: flex-start;
}

.menu-mobile {
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  filter: brightness(0) saturate(100%) invert(63%) sepia(72%) saturate(364%) hue-rotate(335deg)
    brightness(102%) contrast(101%);
}

.dropdown-mobile {
  position: absolute;
  background-color: rgba(22, 22, 23, 0.9);
  min-width: 138px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.footer {
  color: var(--color-text-secondary);
  font-size: smaller;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;
}

.cart {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cart-icon {
  width: 2rem;
  height: 2rem;
  margin: 0px 1rem;
}

@media (hover: hover) {
  .navigation a:hover {
    background-color: rgba(200, 200, 200, 0.2);
  }
}

@media (max-width: 768px) {
  .wrapper {
    display: none;
  }

  .wrapper-mobile {
    display: flex;
  }

  .navigation {
    flex-direction: column;
    font-size: 1em;
    text-align: left;
  }

  .navigation a {
    display: inline-block;
    padding: 1rem;
  }
}
</style>
