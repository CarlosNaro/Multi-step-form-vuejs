<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { ref, onBeforeUnmount, onMounted, watch, onUpdated } from "vue";
import SideBar from "./components/SideBar.vue";

const screenWidth = ref(window.innerWidth);
// const screenHeight = ref(window.innerHeight);
const Isdesktop = ref(true);

const updateWindowSize = () => {
  screenWidth.value = window.innerWidth;
  // screenHeight.value = window.innerHeight;
};
// console.log("valor  ", Isdesktop.value)

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowSize);
});

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

// var onload: ((this: Window, ev: Event) => any) | null

watch(Isdesktop, (nuevoValor, viejoValor) => {
  console.log(`La variable cambió de ${viejoValor} a ${nuevoValor}`);
  // Aquí puedes ejecutar cualquier otra lógica que desees realizar cuando la variable cambia.
});
</script>

<template>
  <div
    class="flex flex-col md:py-20 md:flex-row md:p-3 md:justify-center bg-slate-100 h-screen"
  >
    <Navbar v-if="screenWidth < 768" />
    <SideBar v-if="screenWidth > 768" />

    <!-- <main class="flex flex-1 flex-col justify-between md:bg-white   md:rounded-lg "></main> -->
    <main class="md:rounded-r-lg md:bg-white md:p-2 md:px-8 h-full">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
