<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { ref, onBeforeUnmount, onMounted } from 'vue'
import SideBar from "./components/SideBar.vue";

const screenWidth = ref(window.innerWidth);
// const screenHeight = ref(window.innerHeight);
const Isdesktop = ref()

// const updateWindowSize = () => {
//   screenWidth.value = window.innerWidth;
//   screenHeight.value = window.innerHeight;
// }

const updateWindowSize = () => {
  screenWidth.value = window.innerWidth;
  if(screenWidth.value < 768) {
    Isdesktop.value = true
  }else{
    Isdesktop.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowSize);
})







</script>

<template>
  <div class="flex flex-col md:py-20  md:flex-row md:p-3 md:justify-center bg-slate-100  h-screen ">
 
    <Navbar v-show="Isdesktop " />
    <SideBar v-show="!Isdesktop "   />

    <!-- <main class="flex flex-1 flex-col justify-between md:bg-white   md:rounded-lg "></main> -->
    <main class="  md:rounded-r-lg md:bg-white md:p-2 md:px-8 h-full">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
