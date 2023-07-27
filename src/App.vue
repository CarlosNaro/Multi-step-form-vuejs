<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { ref, onBeforeUnmount, onMounted } from 'vue'
// import SideBar from "./components/SideBar.vue";

const screenWidth = ref(window.innerWidth);
const screenHeight = ref(window.innerHeight);

const updateWindowSize = () => {
  screenWidth.value = window.innerWidth;
  screenHeight.value = window.innerHeight;
}

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowSize);
})







</script>

<template>
  <div class="flex flex-col md:flex-row md:p-3 h-screen bg-white">
    <div>
      <p>Width: {{ screenWidth }}px</p>
      <p>Height: {{ screenHeight }}px</p>
    </div>

    <Navbar class="  " />
    <!-- <SideBar v-show="!IsPhone  "  class=" " /> -->





    <!-- <main class="flex flex-1 flex-col justify-between md:bg-white   md:rounded-lg "></main> -->
    <main class="  md:rounded-lg h-full">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
