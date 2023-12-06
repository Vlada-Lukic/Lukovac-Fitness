<!-- DOVDE -->
<template>
  <div id="app">
    <!-- VIDEO POZADINA -->
    <div class="background-container">
      <!-- <video class="background-video" autoplay muted loop> -->
      <!-- <source src="../src/assets/PozadinaVideo.mp4" type="video/mp4"> -->
      <!-- </video> -->
    </div>



    <!-- HEADER SA LINKOVIMA -->
    <header class="header">
      <nav>
        <RouterLink to="/">
          <img class="logo" src="../src/assets/Logo1R.png" width="130" height="100" />
        </RouterLink>
        <button @click="openModal">Open Modal</button>
        <RouterLink to="/bmicalculator">BMI Calculator</RouterLink>
        <RouterLink to="/galerija">Galerija</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
      </nav>
    </header>
    <RouterView />


    <!-- ONLINE PROGRAMI I RECEPTI -->
    <!-- Modal 1 SA PRVIM OPCIJAMA -->
    <div v-if="isModalOpen" @mouseleave="startCloseTimer('modal1')">
      <div class="modal1-overlay" @click="closeModal"></div>
      <div class="modal1" @mouseover="cancelCloseTimer('modal1')" @mouseleave="startCloseTimer('modal1')">
        <!-- Your modal content goes here -->
        <div class="modal1-option" @mouseover="updateModal2Content('Program BASIC')">Program BASIC</div>
        <div class="modal1-option" @mouseover="updateModal2Content('Program ADVANCE')">Program ADVANCE</div>
        <div class="modal1-option" @mouseover="updateModal2Content('Program ULTIMATE')">Program ULTIMATE</div>
        <div class="modal1-option" @mouseover="updateModal2Content('Recepti')">Recepti</div>
        <div class="modal1-option" @mouseover="updateModal2Content('Smothies')">Smothies</div>
        <!-- Add more content as needed -->
      </div>

      <!-- Modal 2 SA PRIKAZOM PRVIH OPCIJA -->
      <!-- Sub-Modal -->
      <div v-if="isSubModalOpen" @mouseleave="startCloseTimer('modal2')">
        <div class="modal2-overlay" @click="closeSubModal"></div>
        <div class="modal2" @mouseover="cancelCloseTimer('modal2')" @mouseleave="startCloseTimer('modal2')">
          <!-- Your sub-modal content goes here -->
          <h2>{{ selectedOption }}</h2>
          <!-- Add more content as needed -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const isModalOpen = ref(false);
const isSubModalOpen = ref(false);
const selectedOption = ref('');

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const openSubModal = (option) => {
  selectedOption.value = option;
  isSubModalOpen.value = true;
};

const closeSubModal = () => {
  isSubModalOpen.value = false;
};

const openSubModal2 = () => {
  isSubModalOpen.value = true;
};

let modalCloseTimer;

const startCloseTimer = (modalType) => {
  modalCloseTimer = setTimeout(() => {
    if (modalType === 'modal1') {
      closeModal();
    } else if (modalType === 'modal2') {
      closeSubModal();
    }
  }, 300); // BRZINA ZATVARANJA MODALA 1 i 2
};

const cancelCloseTimer = (modalType) => {
  clearTimeout(modalCloseTimer);
};

const updateModal2Content = (option) => {
  selectedOption.value = option;
  openSubModal2();
};
</script>

<style scoped>
/* MODAL */

.modal1 {
  position: fixed;
  top: 33%;
  left: 14%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  color: white;
  width: 15%;
  height: 30%;
  justify-content: center;
  align-items: center;
}

.modal1-option {
  cursor: pointer;
  margin: 10px 0;
  border-bottom: 1px solid white; /* Add this line to set the border between options */
  padding: 10px; /* Add padding for better appearance */
}
.modal1-overlay{
  position: fixed;
  top: 33%;
  left: 14%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  color: white;
  width: 15%;
  height: 30%;
  justify-content: center;
  align-items: center;
}
/* modal 2 */

.modal2 {
  position: fixed;
  top: 33%;
  left: 31.5%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  color: white;
  width: 20%;
  height: 30%;
  justify-content: center;
  align-items: center;
}
.modal2-overlay{
  position: fixed;
  top: 33%;
  left: 31.5%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  color: white;
  width: 20%;
  height: 30%;
  justify-content: center;
  align-items: center;

}

.modal2-option {
  cursor: pointer;
  margin: 10px 0;
  border-bottom: 1px solid white; /* Add this line to set the border between options */
  padding: 10px; /* Add padding for better appearance */
}

.modal1 div {
  cursor: pointer;
  margin: 5px 0;
}
.modal2 div {
  cursor: pointer;
  margin: 5px 0;
}
/* KRAJ MODALA */

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire container */
  z-index: -5; /* Place the video behind other content */
}

.header {
  position: absolute;
  top: 10px;
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(0,0,0,0.7);
  width: 40%;
  justify-content: center;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
