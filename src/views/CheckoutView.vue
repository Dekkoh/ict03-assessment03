<script setup lang="ts">
import { ref } from 'vue'

let firstName = ref('')
let lastName = ref('')
let email = ref('')
let phoneNumber = ref('')
let address = ref('')
let firstNameError = ref(false)
let lastNameError = ref(false)
let emailError = ref(false)
let phoneNumberError = ref(false)
let addressError = ref(false)

function isEmailValid(email: string) {
  const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  return !!regex.exec(email)
}

function isPhoneValid(phone: string) {
  const regex = new RegExp(/^\d{9,13}/g)
  return !!regex.exec(phone ?? '')
}

function checkForm(e: Event) {
  firstNameError.value = !firstName.value ? true : false
  lastNameError.value = !lastName.value ? true : false
  emailError.value = !isEmailValid(email.value) ? true : false
  phoneNumberError.value = !isPhoneValid(phoneNumber.value) ? true : false
  addressError.value = !address.value ? true : false

  let error =
    firstNameError.value ||
    lastNameError.value ||
    emailError.value ||
    phoneNumberError.value ||
    addressError.value

  if (error) {
    e.preventDefault()
  }
}
</script>

<template>
  <div class="main">
    <div class="title">Checkout</div>
    <form class="form" @submit="checkForm" action="/checkout-successful">
      <div class="form-text">
        <label for="firstName" style="color: white">First name*:</label>
        <label for="firstName" class="form-warning" v-show="firstNameError"
          >⚠️ First name is required</label
        >
      </div>
      <input id="firstName" v-model="firstName" placeholder="First Name" />
      <div class="form-text">
        <label for="lastName" style="color: white">Last Name*:</label>
        <label for="lastName" class="form-warning" v-show="lastNameError"
          >⚠️ Last name is required</label
        >
      </div>
      <input id="lastName" v-model="lastName" placeholder="Last Name" />
      <div class="form-text">
        <label for="email" style="color: white">Email*:</label>
        <label for="email" class="form-warning" v-show="emailError">⚠️ Invalid Email</label>
      </div>
      <input id="email" v-model="email" placeholder="Email" autocomplete="off" />
      <div class="form-text">
        <label for="phoneNumber" style="color: white">Phone number*:</label>
        <label for="phoneNumber" class="form-warning" v-show="phoneNumberError"
          >⚠️ Invalid phone number</label
        >
      </div>
      <input id="phoneNumber" v-model="phoneNumber" placeholder="Phone number" />
      <div class="form-text">
        <label for="address" style="color: white">Address*:</label>
        <label for="address" class="form-warning" v-show="addressError">⚠️ Invalid address</label>
      </div>
      <input id="address" v-model="address" placeholder="Address" autocomplete="off" />
      <div class="button-wrapper">
        <input id="reset" type="reset" value="Reset" />
        <input id="submit" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: white;
  font-size: xx-large;
  margin-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 28em;
  font-size: x-small;
}

.form-warning {
  color: yellow;
}

.form input {
  margin: 0px 0px 10px 10px;
  max-width: 24em;
  font-family: 'Aboreto';
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 22em;
}
</style>
