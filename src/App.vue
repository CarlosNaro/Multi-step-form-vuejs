<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { ref, onBeforeUnmount, onMounted } from "vue";
import SideBar from "./components/SideBar.vue";

const screenWidth = ref(window.innerWidth);

const updateWindowSize = () => {
  screenWidth.value = window.innerWidth;
};


onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowSize);
});

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

window.addEventListener('beforeunload', function (event:any) {
  localStorage.clear();
});
</script>

<template>
  <div class="flex md:items-center md:justify-center h-screen  bg-slate-100">
    <div class=" flex md:bg-white  md:w-7/12  md:h-5/6 rounded-2xl md:p-3   ">
      <div class="  h-min md:h-auto  w-auto absolute md:relative z-10 " > 
        <Side-Bar v-if="screenWidth > 768" />
        <Navbar class="" v-if="screenWidth < 768" />
      
      </div>
      <div class="flex-1  absolute md:relative sm:px-1  md:px-5 lg:px-16 md:pt-10  overflow-y-auto custom-scrollbar   " > 
        <router-view  />
      </div>

  
    </div>
  </div>

  

</template>

<style scoped></style>

